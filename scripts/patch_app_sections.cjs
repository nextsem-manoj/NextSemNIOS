const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

// 1. Import AcademicSection
if (!content.includes('AcademicSection')) {
  content = content.replace(
    "import { ClassGrid } from './components/ClassGrid';",
    "import { ClassGrid, type AcademicSection } from './components/ClassGrid';"
  );
}

// 2. Add activeSection state
if (!content.includes('activeSection, setActiveSection')) {
  const targetState = "const [selectedKgLevel, setSelectedKgLevel] = useState<'nursery' | 'lkg' | 'ukg' | 'all'>('all');";
  const sectionState = `const [selectedKgLevel, setSelectedKgLevel] = useState<'nursery' | 'lkg' | 'ukg' | 'all'>('all');
  const [activeSection, setActiveSection] = useState<AcademicSection | null>(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const sec = params.get('section')?.toLowerCase();
    if (sec === 'primary') return 'PRIMARY';
    if (sec === 'secondary') return 'SECONDARY';
    if (sec === 'senior' || sec === 'senior-secondary' || sec === 'seniorsecondary') return 'SENIOR';
    if (params.get('class')) {
      const c = Number(params.get('class'));
      if (c >= 11) return 'SENIOR';
      if (c >= 6) return 'SECONDARY';
      return 'PRIMARY';
    }
    return null;
  });`;
  content = content.replace(targetState, sectionState);
}

// 3. Update breadcrumbs for CLASSES and CLASS_SUBJECTS
if (!content.includes('Primary (Classes 1–5)')) {
  const targetCrumbs = "} else if (viewMode === 'CLASSES') {\r\n      crumbs.push({ label: 'Classes (1-12)' });\r\n    } else if (viewMode === 'NCERT_NOTES') {";
  const newCrumbs = `} else if (viewMode === 'CLASSES') {
      if (activeSection === 'PRIMARY') {
        crumbs.push({ label: 'All Sections', onClick: () => setActiveSection(null) });
        crumbs.push({ label: 'Primary (Classes 1–5)' });
      } else if (activeSection === 'SECONDARY') {
        crumbs.push({ label: 'All Sections', onClick: () => setActiveSection(null) });
        crumbs.push({ label: 'Secondary (Classes 6–10)' });
      } else if (activeSection === 'SENIOR') {
        crumbs.push({ label: 'All Sections', onClick: () => setActiveSection(null) });
        crumbs.push({ label: 'Senior Secondary (Classes 11–12)' });
      } else {
        crumbs.push({ label: 'Sections (Primary, Secondary, Senior)' });
      }
    } else if (viewMode === 'NCERT_NOTES') {`;

  if (content.includes(targetCrumbs)) {
    content = content.replace(targetCrumbs, newCrumbs);
  } else {
    // Try LF line endings
    const targetCrumbsLf = "} else if (viewMode === 'CLASSES') {\n      crumbs.push({ label: 'Classes (1-12)' });\n    } else if (viewMode === 'NCERT_NOTES') {";
    content = content.replace(targetCrumbsLf, newCrumbs);
  }
}

// 4. Update ClassGrid render props
if (!content.includes('initialSection={activeSection}')) {
  const targetClassGrid = `<ClassGrid
                  selectedClass={selectedClass}
                  onSelectClass={(clsNum) => {
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  }}`;
  const newClassGrid = `<ClassGrid
                  selectedClass={selectedClass}
                  onSelectClass={(clsNum) => {
                    const inferredSec = clsNum >= 11 ? 'SENIOR' : clsNum >= 6 ? 'SECONDARY' : 'PRIMARY';
                    setActiveSection(inferredSec);
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  }}
                  initialSection={activeSection}
                  onSelectSectionChange={(sec) => setActiveSection(sec)}
                  onOpenNios={() => navigateTo({ viewMode: 'NIOS_BOOKS' })}`;

  content = content.replace(targetClassGrid, newClassGrid);
}

fs.writeFileSync(appPath, content, 'utf8');
console.log('✅ Injected Section navigation & state into App.tsx');


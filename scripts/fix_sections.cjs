const fs = require('fs');
const path = require('path');

// 1. Fix ClassGrid.tsx
const gridPath = path.join(__dirname, '..', 'src', 'components', 'ClassGrid.tsx');
let grid = fs.readFileSync(gridPath, 'utf8');

// Clean imports
grid = grid.replace(
  `import { 
  BookOpen, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  Download, 
  ExternalLink,
  ArrowLeft,
  GraduationCap,
  Layers,
  School,
  CheckCircle2
} from 'lucide-react';`,
  `import { 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';`
);

// Fix subjectCount
grid = grid.replace(
  'item.subjectCount || meta?.subjectCount || 5',
  'meta?.subjectCount || 5'
);

// Use onBack in Section Selector if onBack exists
grid = grid.replace(
  `{/* Section Gateway Heading */}`,
  `{onBack && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button
                type="button"
                onClick={onBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>
            </div>
          )}

          {/* Section Gateway Heading */}`
);

fs.writeFileSync(gridPath, grid, 'utf8');
console.log('✅ ClassGrid.tsx fixed');

// 2. Fix App.tsx
const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
let app = fs.readFileSync(appPath, 'utf8');

// Make sure ClassGrid has initialSection and onSelectSectionChange
const targetAppGrid = `<ClassGrid
                  selectedClass={selectedClass}
                  onSelectClass={(clsNum) => {
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  }}
                  onOpenKgHub={(lvl) => {
                    setSelectedKgLevel(lvl || 'all');
                    navigateTo({ viewMode: 'KIDS_FOUNDATIONAL_HUB' });
                  }}
                  onBack={handleGoBack}
                  onOpenAdmin={() => navigateTo({ viewMode: 'ADMIN' })}
                  searchQuery={searchTerm}
                />`;

const replacementAppGrid = `<ClassGrid
                  selectedClass={selectedClass}
                  onSelectClass={(clsNum) => {
                    const inferredSec = clsNum >= 11 ? 'SENIOR' : clsNum >= 6 ? 'SECONDARY' : 'PRIMARY';
                    setActiveSection(inferredSec);
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  }}
                  onOpenKgHub={(lvl) => {
                    setSelectedKgLevel(lvl || 'all');
                    navigateTo({ viewMode: 'KIDS_FOUNDATIONAL_HUB' });
                  }}
                  initialSection={activeSection}
                  onSelectSectionChange={(sec) => setActiveSection(sec)}
                  onOpenNios={() => navigateTo({ viewMode: 'NIOS_BOOKS' })}
                  onBack={handleGoBack}
                  onOpenAdmin={() => navigateTo({ viewMode: 'ADMIN' })}
                  searchQuery={searchTerm}
                />`;

if (app.includes(targetAppGrid)) {
  app = app.replace(targetAppGrid, replacementAppGrid);
} else {
  console.log('ClassGrid call target not found directly, checking partial replacement...');
  app = app.replace(
    'onSelectClass={(clsNum) => {\r\n                    navigateTo({ viewMode: \'CLASS_SUBJECTS\', selectedClass: clsNum, selectedSubject: null });\r\n                  }}',
    `onSelectClass={(clsNum) => {
                    const inferredSec = clsNum >= 11 ? 'SENIOR' : clsNum >= 6 ? 'SECONDARY' : 'PRIMARY';
                    setActiveSection(inferredSec);
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  }}
                  initialSection={activeSection}
                  onSelectSectionChange={(sec) => setActiveSection(sec)}
                  onOpenNios={() => navigateTo({ viewMode: 'NIOS_BOOKS' })}`
  );
}

// Update breadcrumbs for CLASSES to use activeSection
const targetCrumb = "crumbs.push({ label: 'Classes (1–12)' });";
const newCrumb = `if (activeSection === 'PRIMARY') {
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
      }`;

if (app.includes(targetCrumb)) {
  app = app.replace(targetCrumb, newCrumb);
}

fs.writeFileSync(appPath, app, 'utf8');
console.log('✅ App.tsx fixed');


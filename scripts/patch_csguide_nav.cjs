const fs = require('fs');
const filePath = 'c:/Users/Manoj/nextsemorg/CS-Guide/src/components/layout/GlobalNavigationWidget.tsx';
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('Nextsem Universe Portals')) {
  const targetCategory = 'const categories: NavCategory[] = [\r\n    {';
  const newCategory = `const categories: NavCategory[] = [
    {
      title: "🌐 Nextsem Universe Portals",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      links: [
        {
          name: "Nextsem Flagship Portal",
          href: "https://nextsem.online",
          desc: "Main ecosystem portal for College, Jobs & Coding",
          icon: <Home size={14} className="text-emerald-400" />,
          badge: "MAIN HUB",
          badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        },
        {
          name: "StudyGuide (NCERT & NIOS)",
          href: "https://nextsem-ncert-2403.web.app/",
          desc: "Classes 1–12 Textbooks, Solutions & Labs",
          icon: <BookOpen size={14} className="text-amber-400" />,
          badge: "K-12",
          badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        }
      ]
    },
    {`;

  content = content.replace(targetCategory, newCategory);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ Injected Nextsem Universe Portals into CS-Guide navigation');
}


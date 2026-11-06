const fs = require('fs');
const filePath = 'c:/Users/Manoj/nextsemorg/nextsem.online/src/components/SimpleHeroClient.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import
if (!content.includes('EcosystemPortalSection')) {
  content = content.replace(
    'import WindowsIcon from "@/components/WindowsIcon";',
    'import WindowsIcon from "@/components/WindowsIcon";\r\nimport EcosystemPortalSection from "@/components/portal/EcosystemPortalSection";'
  );
}

// 2. Add component right before section 2 (gateways)
if (!content.includes('<EcosystemPortalSection />')) {
  content = content.replace(
    '{/* ── 2. THE 3 PRIMARY LEARNING GATEWAYS ── */}',
    '{/* ── 2. UNIFIED NEXTSEM ECOSYSTEM GATEWAY ── */}\r\n      <EcosystemPortalSection />\r\n\r\n      {/* ── 2B. THE 3 PRIMARY LEARNING GATEWAYS ── */}'
  );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Injected EcosystemPortalSection into nextsem.online/src/components/SimpleHeroClient.tsx');


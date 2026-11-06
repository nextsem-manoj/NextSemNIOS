const fs = require('fs');
const filePath = 'c:/Users/Manoj/nextsemorg/nextsem.online/src/components/Header.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import
if (!content.includes('EcosystemDropdown')) {
  content = content.replace(
    "import NextsemLogoAnimation from './NextsemLogoAnimation';",
    "import NextsemLogoAnimation from './NextsemLogoAnimation';\r\nimport EcosystemDropdown from './EcosystemDropdown';"
  );
}

// 2. Add component in right action
if (!content.includes('<EcosystemDropdown />')) {
  content = content.replace(
    "{/* Learning Goal Switcher Button */}",
    "{/* Nextsem Ecosystem Dropdown */}\r\n          <EcosystemDropdown />\r\n\r\n          {/* Learning Goal Switcher Button */}"
  );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Injected EcosystemDropdown into nextsem.online/src/components/Header.tsx');


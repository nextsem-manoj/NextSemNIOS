const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

if (!content.includes('AutoUpdateBanner')) {
  content = content.replace(
    "import { AppUpdateModal } from './components/AppUpdateModal';",
    "import { AppUpdateModal } from './components/AppUpdateModal';\r\nimport { AutoUpdateBanner } from './components/AutoUpdateBanner';"
  );
}

if (!content.includes('<AutoUpdateBanner />')) {
  content = content.replace(
    '<AppUpdateModal',
    '<AutoUpdateBanner />\r\n\r\n      <AppUpdateModal'
  );
}

fs.writeFileSync(appPath, content, 'utf8');
console.log('✅ Injected AutoUpdateBanner into src/App.tsx');


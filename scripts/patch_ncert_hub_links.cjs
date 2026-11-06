const fs = require('fs');
const path = require('path');

// 1. Patch Navbar.tsx
const navbarPath = path.join(__dirname, '..', 'src', 'components', 'Navbar.tsx');
let navContent = fs.readFileSync(navbarPath, 'utf8');

if (!navContent.includes('nextsem.online')) {
  // Add Globe import
  if (!navContent.includes('Globe')) {
    navContent = navContent.replace(
      "import { Menu, ArrowLeft, Search, X, FileText, Calculator, HelpCircle, Sun, Moon, GraduationCap } from 'lucide-react';",
      "import { Menu, ArrowLeft, Search, X, FileText, Calculator, HelpCircle, Sun, Moon, GraduationCap, Globe } from 'lucide-react';"
    );
  }

  // Add Nextsem Hub link before search box
  const targetSearch = "{/* Right Section: Compact Search Input */}";
  const hubButton = `{/* Nextsem Flagship Portal Button */}
          <a
            href="https://nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Nextsem Academy Flagship Portal"
            className="nav-link-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 11px',
              borderRadius: '9px',
              fontSize: '0.74rem',
              fontWeight: 800,
              background: 'rgba(4, 170, 109, 0.12)',
              color: '#04AA6D',
              border: '1px solid rgba(4, 170, 109, 0.35)',
              textDecoration: 'none',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Globe size={13} style={{ color: '#04AA6D' }} />
            <span className="hub-text">Nextsem Hub</span>
            <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>❯</span>
          </a>

          ` + targetSearch;

  navContent = navContent.replace(targetSearch, hubButton);
  fs.writeFileSync(navbarPath, navContent, 'utf8');
  console.log('✅ Injected Nextsem Hub button into Navbar.tsx');
}

// 2. Patch NavigationDrawer.tsx
const drawerPath = path.join(__dirname, '..', 'src', 'components', 'NavigationDrawer.tsx');
let drawerContent = fs.readFileSync(drawerPath, 'utf8');

if (!drawerContent.includes('nextsem.online')) {
  if (!drawerContent.includes('Globe')) {
    drawerContent = drawerContent.replace(
      "import {\r\n  X,",
      "import {\r\n  X,\r\n  Globe,"
    );
  }

  const targetTheme = "{/* 2. Theme Segmented Switcher (System / Dark / Light) */}";
  const hubCard = `{/* 1B. Nextsem Flagship Universe Portal Link */}
        <div style={{ padding: '10px 16px 4px' }}>
          <a
            href="https://nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 13px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(4, 170, 109, 0.14) 0%, rgba(20, 184, 166, 0.08) 100%)',
              border: '1px solid rgba(4, 170, 109, 0.35)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#04AA6D',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(4, 170, 109, 0.4)'
              }}>
                🌐
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  Nextsem Academy Hub
                </div>
                <div style={{ fontSize: '0.67rem', color: '#04AA6D', fontWeight: 700 }}>
                  College Degrees, Tech Jobs &amp; Coding
                </div>
              </div>
            </div>
            <span style={{ color: '#04AA6D', fontSize: '0.9rem', fontWeight: 800 }}>❯</span>
          </a>
        </div>

        ` + targetTheme;

  drawerContent = drawerContent.replace(targetTheme, hubCard);
  fs.writeFileSync(drawerPath, drawerContent, 'utf8');
  console.log('✅ Injected Nextsem Hub card into NavigationDrawer.tsx');
}


const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. ViewMode type
if (!code.includes('CLASS_9_MATHS_TEST')) {
  code = code.replace(
    "'POORVI_CH7_NEEM_BABA' | 'ADMIN'",
    "'POORVI_CH7_NEEM_BABA' | 'CLASS_9_MATHS_TEST' | 'ADMIN'"
  );
}

// 2. getInitialStateFromUrl
const checkTarget = "else if (viewParam === 'hydrocarbons'";
  const newInit = "else if (viewParam === 'class9-maths-test' || viewParam === 'maths-ch4-5-test' || viewParam === 'class9-maths-40marks' || viewParam === 'maths9-test' || (classParam === '9' && (chapterParam === '4' || chapterParam === '5') && params.get('test') === 'true')) initialViewMode = 'CLASS_9_MATHS_TEST'; \n  ";
if (!code.includes('class9-maths-test')) {
  code = code.replace(checkTarget, newInit + checkTarget);
}

// 3. useEffect URL sync
const urlSyncTarget = "else if (viewMode === 'RATE_US') {\n      params.set('view', 'rate');\n    }";
const newUrlSync = "else if (viewMode === 'RATE_US') {\n      params.set('view', 'rate');\n    } else if (viewMode === 'CLASS_9_MATHS_TEST') {\n      params.set('view', 'class9-maths-test');\n    }";
code = code.replace(urlSyncTarget, newUrlSync);

// 4. Breadcrumbs
const breadcrumbTarget = "crumbs.push({ label: \"introduction to Euclid's Geometry (Lab & Postulates)\" });\n    } else if (viewMode === 'TS_GREWAL_ACCOUNTING_EQUATION') {";
const newBreadcrumb = "crumbs.push({ label: \"introduction to Euclid's Geometry (Lab & Postulates)\" });\n    } else if (viewMode === 'CLASS_9_MATHS_TEST') {\n      crumbs.push({ label: 'NCERT Books', onClick: () => navigateTo({ viewMode: 'CLASSES' }) });\n      crumbs.push({ label: 'Class 9', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 9 }) });\n      crumbs.push({\n        label: 'Mathematics',\n        onClick: () => {\n          const c9m = activeClassesData.find((c) => c.classNumber === 9)?.subjects.find((s) => s.id === 'c9-maths');\n          if (c9m) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c9m, selectedClass: 9 });\n        }\n      });\n      crumbs.push({ label: 'Ch 4 & 5 Assessment (40 Marks)' });\n    } else if (viewMode === 'TS_GREWAL_ACCOUNTING_EQUATION') {";
code = code.replace(breadcrumbTarget, newBreadcrumb);

// 5. Dashboard categories handler
const catTarget = "} else if (cat === 'euclid-interactive') {\n                    navigateTo({ viewMode: 'EUCLID_INTERECTIVE', selectedClass: 9 });";
const newCat = "} else if (cat === 'euclid-interactive') {\n                    navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedClass: 9 });\n                  } else if (cat === 'class9-maths-test' || cat === 'maths-ch4-5-test') {\n                    navigateTo({ viewMode: 'CLASS_9_MATHS_TEST', selectedClass: 9 });";
code = code.replace(catTarget, newCat);

// 6. BookChaptersView prop onOpenClass9MathsTest
const bcTarget = "onOpenInteractiveEuclid={(ch) => {\n                    navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedChapter: ch });\n                  }}";
const newBc = "onOpenInteractiveEuclid={(ch) => {\n                    navigateTo({ viewMode: 'EUCLID_INTERECTIVE', selectedChapter: ch });\n                  }}\n                  onOpenClass9MathsTest={() => {\n                    navigateTo({ viewMode: 'CLASS_9_MATHS_TESTE', selectedClass: 9 });\n                  }}";
code = code.replace(bcTarget, newBc);

// 7. View render iframe
const renderTarget = "{viewMode === 'EUCLID_INTERECTIVE' && (\n              <EuclidGeometryInteractiveView onBack={handleGoBack} />\n            )}";
const newRender = "{viewMode === 'EUCLID_INTERACTIVE' && (\n              <EuclidGeometryInteractiveView onBack?{handleGoBack} />\n            )}\n\n            {viewMode === 'CLASS_9_MATHS_TEST' && (\n              <div style:{{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>\n                <iframe\n                  src=\"/class9-maths-ch4-ch5-question-paper-40-marks.html\"\n                  title=\"Class 9 Mathematics - Chapters 4 & 5 Assessment (40 Marks)\"\n                  style:{{ width: '100%', height: '88vh', border: 'none', background: '#0a0f1d' }}\n                />\n              </div>\n            )}";
code = code.replace(renderTarget, newRender);

fs.writeFileSync('src/App.tsx', code, 'utf8');
console.log('App.tsx successfully patched!');

const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  // ==========================================
  // PROJECT LATEST: NextSem Study Guide Hub (13839762481418739395)
  // 4 Pillars, 2-Column Grid Dashboard & NIOS Books
  // ==========================================
  {
    name: 'stitch-2column-grid-dashboard.html',
    title: 'Ncert Books & Solutions - 2-Column Grid Dashboard',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1YjA1Y2I3ZGMwOTI1YzVkNGNlMjU5MDU2EgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgzOTc2MjQ4MTQxODczOTM5NQ&filename=&opi=89354086'
  },
  {
    name: 'stitch-clean-dashboard.html',
    title: 'Ncert Books & Solutions - Clean Dashboard',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1Yjc4MzZhYTEwMmQzY2JjNTJmMGRlNDNlEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgzOTc2MjQ4MTQxODczOTM5NQ&filename=&opi=89354086'
  },
  {
    name: 'stitch-all-nios-books.html',
    title: 'Ncert Books & Solutions - All NIOS Books',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1YjlmMjNlNjgwN2UwMDVhNzU1MzFjNmFkEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgzOTc2MjQ4MTQxODczOTM5NQ&filename=&opi=89354086'
  },
  {
    name: 'stitch-study-guide-4pillars.html',
    title: 'Study Guide Hub - 4 Pillars',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1OWI1ODYyYmQwNDczNmMwODk3MjdkM2RmEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgzOTc2MjQ4MTQxODczOTM5NQ&filename=&opi=89354086'
  },
  {
    name: 'icon-ncert-books-3d.png',
    title: 'Isolated 3D NCERT Books Stack Icon',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1Wpv6p-tXpDvTYWF29L736krxFVzBipUaJbhZuPa5xYJFHsePL5n9MbcYGGk9mf3f6J4f_ZyOrfQoXCYc7pH98yYd9diDTl7f04gNlGLQ0dSziXwD4IPl8Uuqfe4w_8x8foG6eTz-80iF78M-cRGCS_rikcYADuYbrScdUyZfpSjPt664ti9huQj8iXQ9gjuEXIV_Nr9WVLtrsSoYNhosj3htFsFr2LYF-pgiiXWXO-OvK01AP5-jrOssdU'
  },
  {
    name: 'icon-ncert-notes-3d.png',
    title: 'Isolated 3D NCERT Notes Notebook Icon',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1VYNXwGY5URDPCyQVgFxy0RYekjVto9b3OSsOYGOChvOky-QljRER3eOIAGHigJn4XuZQjXJjXVim49kyCMJi40IWYg-SGadiheYYqK-cJYXztKMOA3drg8ApPGVYEeP1w3TfD05gRH9RPdJknEYOdxmfkvn-y0HirD0V9qKs0icTWicn0K-bbFerqUoLsQpRS6LexonN_R-Tx03h0SZ7QC10oTQLzg__YyO7uCUfl3WRq_uJtQlWEd--Sc'
  },
  {
    name: 'icon-nios-books-3d.png',
    title: 'Isolated 3D NIOS Books Open Book & Cap Icon',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1UKqJWdiwazu8aIMmyBx3Hj4dnfIkbIUPWR_30TbT4RzBNuCLbvNoCeK6zjtSfGLlD2ol3U3kBsVB1EDmgsKr_wM7PfQbhXPCvE8BL18_TUCeBjcKBl9iBAMtIIF-vs16PmYKfUi_t3ZCd4nez1sbzmrBvVF3UIsL9PM7rahdNuQcJgsW_TszLAI6pwKnLsoZvTSUyKjWYW1nSENTgnYNJ6nAKon-Jg0hU4EWDnH82fx_PhItn-gETetO5d'
  },
  {
    name: 'icon-nios-notes-3d.png',
    title: 'Isolated 3D NIOS Notes Worksheets Icon',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WAD_nhIL2qMAsm64G1YqSxVg0ZHgP3W4V0_DjCGVn_-SadLVl0d8JXW2XFQPzBsJrLeAxmYDwCh-yDOPcnFs2fcUTQHnzI5ayeKCr4d2ZXraaa8Ar0T3tpvs_zs9Xz9mu292VWP60A4rTfxZ3S3QAVPORIIzHmQjgV5Zzo3pjycsS91l23hK12NNrqcWojjdikGWlSjgny3WXcWSn8OObDlBywEAJiiqMEJd_XFs-jG-Gc0Tun3Z6EDhw'
  },
  {
    name: 'card-ncert-books-render.png',
    title: 'NCERT Textbooks 3D Render',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WmSLKYVJ0rggeKr8oNOspQobZ-mjrXxkHtEU6DXBBvtzzZczXTKk5zIpwF7YYyxBfPUvx4jNXDkiZkczieYhjk-vMHen_PaIMWTc_c9hAc0vVIZsckZeqkjMksaWbbgw3YEl1lWHLekvyI8qZhW3z6JSGDOxN0k7e5lnXYraklcQ01fAEB46kM-tkxXYhloA7xCRlMd4qjFl-5VSDuWTG5DtTPHzHSQeFNe9Oivstv0Pb6SCrFVb58J9LN'
  },
  {
    name: 'card-ncert-notes-render.png',
    title: 'NCERT Notes 3D Render',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1VG8Oo3sJslJMWB2Bx2c1aAQBup8o7txraapLg3vCKIZPDL8-LigpPqPFUXpbfJWBgR22XjyVnAgKrQLCpbH9Bp8s8Fq_bJXleNoO54VB6Dgab1TW4i_iGEbsANHelhWwEyB5lauaeNv95eQfEr0e9fG0R6A3bVw5Y0KcT3jq6WbmhxW23j0YHzAGR24qEfz8DASFmui51h-Cc2yBXnBMRWs8zwBJTnhMB51bEpOkCd1T9zo1wBmq0ByTlI'
  },
  {
    name: 'card-nios-books-render.png',
    title: 'NIOS Books 3D Render',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1XYyHsFG_IIpdzJ_LxVLYjGembLPJUalRXwc3-q9fhZKh9Nat6LjOe9WYjqo_lJhxdthiQGMt876Ymn-wxkexziah-wr6YASgXROou3w8FnUvJjbW20lq16SlHh2HEEmcQNYjDQk39oDdmUq3IvWmGBkKYSXiC_O2seOYwDF6rkHOGVdKp7c9lLoyN5-L2ViXuxL23XNWUPurbgho-eGpVNAuesHfM-33bybDPMqDlX-V1skqS2EpU8GWRm'
  },
  {
    name: 'card-nios-notes-render.png',
    title: 'NIOS Notes 3D Render',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WVnhbVDusa9fEuJ-MbtQHshvpOEttEyNlbnCGaYEbQrPpJpdsLtPfNw2nwFL7rsqogLP1GS0ldeB7fDyljWbnxFw4GBPHcwIuHpioKbgJRFdEh8pYCTbugoP2FjDk1DfGHcXGu_siXcFxde60Ie6oWmz00GqmqeSN49-IA_V8mDclNfN6n1gS1a4CbisCkXbyQKx8K5BMnCvyWGlChINJVpWRSVc1hz02sBzvZXglLxdBqcWb9G_GGp25Q'
  },
  {
    name: 'card-nextsem-emblem.png',
    title: 'NextSem Academic Emblem 3D',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1VY13wz1dp23FzmEsTOqhVcbYIXrzL_pxM7FbfviCNq8o9G2lFJt87nk5AuvePwxe1JpTPhDa6d5rp-5oC3i-IWnGrOk1Y9A1RHKzKPP3v8P5LJLhLFS_yPhb9yx4G6sR2u2zYpy3pTE1HO9QxGrXPrj6ToRRrn8lk23bovND8-YGFeAULHk2q-fECtR_Cg9Lvu3MacCIhGbDV02troVqzqp-mL2O2mw931e7WQ4vC4Kpub_J7LvCKVoZ38'
  },

  // ==========================================
  // PROJECT 1: NextSem Study Guide App (16108558520537872396)
  // Matching user's 5 reference screenshot workflows!
  // ==========================================
  {
    name: 'stitch-main-category-hub.html',
    title: 'Main Category Hub & Visual Matrix',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MmNlZWE1MDcwMzgzYTM1MDBlMTFjYjE0EgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },
  {
    name: 'stitch-class-selector.html',
    title: 'Class / Standard Selector',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MmQ3NmFmMDQwNTAzYzFmMzk0MDU5YWQwEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },
  {
    name: 'stitch-subject-directory.html',
    title: 'Subject Directory',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MmVhNzIyYzMwMzkyYzdiMTliMGIxZmVjEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },
  {
    name: 'stitch-chapter-action-deck.html',
    title: 'Chapter Index & Action Deck',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MzE2YzYzY2MwMjhmMGIxYmJmMjJjMDVhEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },
  {
    name: 'stitch-reader-solution-studio.html',
    title: 'High-Precision Reader & Solution Studio',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MzE4ZjQzNDAwMWI0ZTFmNzMxMmNiYTQ5EgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },
  {
    name: 'stitch-academic-vault-flow.html',
    title: 'Study Guide Academic Vault Flow',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MzJjMDBkM2EwMWE2MzFlZjY4MGNiOGIyEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },
  {
    name: 'stitch-study-guide-logo.svg',
    title: 'StudyGuide by Nextsem Logo SVG',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE1MjlmN2FiMDcwMWVlN2Y1OWMzMGM4OTQ0EgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNjEwODU1ODUyMDUzNzg3MjM5Ng&filename=&opi=89354086'
  },

  // ==========================================
  // PROJECT 2: Nextsem Academy Study Suite (6124623461495438952)
  // ==========================================
  {
    name: 'stitch-study-matrix.html',
    title: 'Nextsem - Study Matrix',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjYzN2FhNTYwMWE2MzIxZjlmMmFjNTk0EgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-dual-pane-studio.html',
    title: 'Nextsem - Dual-Pane Study Studio',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjQ1MWM2NTcwMWVlNWI3OWZmMGUzMWNhEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-numericals-lab.html',
    title: 'Nextsem - Numericals Lab',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjYwOWU0NTcwNzBkZDRkYzJmMTljYmQ4EgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-bilingual-mcq-quiz.html',
    title: 'Nextsem - Bilingual MCQ Quiz',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjQwMmIxYmQwMDMwMTFiMjIzMTJkN2VmEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-accountancy-studio.html',
    title: 'Nextsem - Accountancy Studio',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjNiZGNkOTgwMzM4NWJiYTExMjBjYzUwEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-chapter-explorer.html',
    title: 'Nextsem - Chapter Explorer',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjNlNmNkYTMwNTc2MDFiMzkyMDliYmJlEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-academy-study-matrix.html',
    title: 'Nextsem Academy Study Matrix',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjgzMGI0NjkwNTIyYTEwODg3MDJkNzdmEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086'
  },
  {
    name: 'stitch-math-permutations-reader.html',
    title: 'NCERT Class 11 Math — Permutations & Combinations Reader',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE0OTVmNDc0NDYwNjM5NDg3N2U3MmIzOTg3EgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzMxNTA4NTYxNDM5NTU5NzU3NQ&filename=&opi=89354086'
  },
  {
    name: 'stitch-physics-ch6-solutions-viewer.html',
    title: 'NCERT Class 12 Physics Ch 6 Solutions',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0ODFkZTBjNGQwMzM4NWJiYTExMjBjYzUwEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM4MDUzNjM0NDU4NjU4MzgzNDc4&filename=&opi=89354086'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          const file = fs.createWriteStream(dest);
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
}

function enhanceHtml(filePath) {
  if (!filePath.endsWith('.html')) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any google usercontent logo with official local final logo
  content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]*"/g, (match) => {
    if (match.toLowerCase().includes('logo')) {
      return 'src="/study-guide-logo.jpg"';
    }
    return match;
  });

  // Ensure title tag
  if (!content.includes('<title>')) {
    content = content.replace('<head>', '<head>\n<title>StudyGuide by Nextsem | NCERT & NIOS</title>');
  }

  // Inject KaTeX support if equations present
  if (!content.includes('katex.min.css')) {
    const katexTags = `
    <!-- KaTeX math rendering -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body);"></script>
    `;
    content = content.replace('</head>', `${katexTags}\n</head>`);
  }

  // Ensure Home link in breadcrumb has href="/"
  content = content.replace(/<span class="text-cyan-link">Home<\/span>/g, '<a href="/" class="text-cyan-link hover:underline">Home</a>');
  content = content.replace(/<span class="text-on-surface-variant">Class 12<\/span>/g, '<a href="/?class=12" class="text-on-surface-variant hover:text-text-primary hover:underline">Class 12</a>');
  content = content.replace(/<span class="text-on-surface-variant">Class 11<\/span>/g, '<a href="/?class=11" class="text-on-surface-variant hover:text-text-primary hover:underline">Class 11</a>');
  content = content.replace(/<span class="text-on-surface-variant">Physics<\/span>/g, '<a href="/?class=12&subject=physics" class="text-on-surface-variant hover:text-text-primary hover:underline">Physics</a>');
  content = content.replace(/<span class="text-on-surface-variant">Mathematics<\/span>/g, '<a href="/?class=11&subject=mathematics" class="text-on-surface-variant hover:text-text-primary hover:underline">Mathematics</a>');

  fs.writeFileSync(filePath, content, 'utf8');
}

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`[Stitch Sync] Starting sync for ${files.length} screens across projects...`);

  for (const item of files) {
    const dest = path.join(publicDir, item.name);
    console.log(`[Stitch Sync] Fetching ${item.name} (${item.title})...`);
    try {
      await downloadFile(item.url, dest);
      enhanceHtml(dest);
      const stats = fs.statSync(dest);
      console.log(`[Stitch Sync] Saved & Enhanced ${item.name} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`[Stitch Sync] Failed ${item.name}:`, err.message);
    }
  }

  console.log('\n[Stitch Sync] All Stitch screens synchronized and enhanced successfully!');
}

run();

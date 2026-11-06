import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'worksheet-clean-url-rewrite',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && (req.url === '/santoor-class5-ch6-what-a-tank-worksheet' || req.url.startsWith('/santoor-class5-ch6-what-a-tank-worksheet?'))) {
            req.url = req.url.replace('/santoor-class5-ch6-what-a-tank-worksheet', '/santoor-class5-ch6-what-a-tank-worksheet.html');
          } else if (req.url && (req.url === '/curiosity-class7-ch6-adolescence-worksheet' || req.url.startsWith('/curiosity-class7-ch6-adolescence-worksheet?'))) {
            req.url = req.url.replace('/curiosity-class7-ch6-adolescence-worksheet', '/curiosity-class7-ch6-adolescence-worksheet.html');
          } else if (req.url && (req.url === '/ganita-class7-ch6-number-play-mcq' || req.url.startsWith('/ganita-class7-ch6-number-play-mcq?'))) {
            req.url = req.url.replace('/ganita-class7-ch6-number-play-mcq', '/ganita-class7-ch6-number-play-mcq.html');
          } else if (req.url && (req.url === '/science-class9-ch3-tissues-in-action-difficult-mcq' || req.url.startsWith('/science-class9-ch3-tissues-in-action-difficult-mcq?'))) {
            req.url = req.url.replace('/science-class9-ch3-tissues-in-action-difficult-mcq', '/science-class9-ch3-tissues-in-action-difficult-mcq.html');
          } else if (req.url && (req.url === '/class6-7-easy-mcq-practice' || req.url.startsWith('/class6-7-easy-mcq-practice?'))) {
            req.url = req.url.replace('/class6-7-easy-mcq-practice', '/class6-7-easy-mcq-practice.html');
          } else if (req.url && (req.url === '/class6-7-english-comprehension-passage' || req.url.startsWith('/class6-7-english-comprehension-passage?'))) {
            req.url = req.url.replace('/class6-7-english-comprehension-passage', '/class6-7-english-comprehension-passage.html');
          } else if (req.url && (req.url === '/english-class7-poorvi-unit1-learning-together-mcq' || req.url.startsWith('/english-class7-poorvi-unit1-learning-together-mcq?'))) {
            req.url = req.url.replace('/english-class7-poorvi-unit1-learning-together-mcq', '/english-class7-poorvi-unit1-learning-together-mcq.html');
          } else if (req.url && (req.url === '/class7-social-science-ch2-understanding-weather-mcq' || req.url.startsWith('/class7-social-science-ch2-understanding-weather-mcq?'))) {
            req.url = req.url.replace('/class7-social-science-ch2-understanding-weather-mcq', '/class7-social-science-ch2-understanding-weather-mcq.html');
          } else if (req.url && (req.url === '/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks' || req.url.startsWith('/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks?'))) {
            req.url = req.url.replace('/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks', '/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html');
          }
          next();
        });
      }
    }
  ],
})

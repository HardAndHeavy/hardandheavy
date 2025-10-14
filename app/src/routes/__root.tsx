import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Хэви' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
    scripts: [
      // Для рекламы от VK
      {
        children: `
          var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "3709155", type: "pageView", start: (new Date()).getTime()});
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {
              var s = d.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(ts, s);
            };
            if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
            } else {
              f();
            }
          })(document, window, "tmr-code");
        `,
      },
      // Для рекламы от VK
      {
        tag: 'noscript',
        children: `
          <div>
            <img src="https://top-fwz1.mail.ru/counter?id=3709155;js=na" 
                 style="position:absolute;left:-9999px;" 
                 alt="Top.Mail.Ru" />
          </div>
        `,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

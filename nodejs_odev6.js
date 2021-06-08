const koa = require('koa')
const app = new koa()

app.use((ctx, next) => {
    const url = ctx.request.url
    if (url === "/") {
        ctx.res.writeHead(200, { "Content-Type": "text/html" });
        ctx.res.write("<h1>INDEX SAYFASINA HOSGELDINIZ</h1>");
        console.log("INDEX");
      } else if (url === "/about") {
        ctx.res.writeHead(200, { "Content-Type": "text/html" });
        ctx.res.write("<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>");
        console.log("ABOUT");
      } else if (url === "/contact") {
        ctx.res.writeHead(200, { "Content-Type": "text/html" });
        ctx.res.write("<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>");
        console.log("CONTACT");
      } else {
        ctx.res.writeHead(404, { "Content-Type": "text/html" });
        ctx.res.write("<h1>404 SAYFA BULUNAMADI</h1>");
      }
      ctx.res.end();
  });
  
app.listen(3000, () => {console.log('Server running at PORT 3000')})

import 'dotenv/config';

import Koa from "koa";
import Router from 'koa-router';

const app = new Koa();

const router = new Router()



router.get('/about', (ctx) => {
    ctx.body = 'About';
})

const PORT = process.env.PORT || 3000

app.on('error', err => {
    console.log(`server error`, err)
});

app.use(async (ctx) => {
    ctx.body = 'Hello World!';
    
});

app.listen(PORT, () => {
    console.log(`[+] Server been started: http://localhost:${PORT}`)
});
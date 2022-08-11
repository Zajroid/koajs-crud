import Router from 'koa-router';

const router = new Router()


/* Creating a route for the about page. */
router.get('/about', (ctx) => {
    ctx.body = 'About';
});

/* This is a route that will be called when the user goes to the root of the website. */
router.get('/', (ctx) => {
    ctx.body = 'Main'
})

export default router;
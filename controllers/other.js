// index:

module.exports = {
    'GET /about': async (ctx, next) => {
        ctx.render('about.html');
    },
    'GET /contact': async (ctx, next) => {
        ctx.render('contact.html');
    },
    'GET /menu': async (ctx, next) => {
        ctx.render('menu.html');
    }
};
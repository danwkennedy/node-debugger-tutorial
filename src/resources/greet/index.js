const name = require('../../config/environment').name;
const router = require('koa-router')();

router.get('/greet', function *() {
  this.status = 200;
  this.body = { greeting: `I'm ${ name }` };
});

module.exports = router.routes();

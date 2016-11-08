import Salt from 'koa-salt';

export default Salt()
  .load('logger')
  .load('init')
  .load('static')
  .load('forward-backend')
  .load('router');

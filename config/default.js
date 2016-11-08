import path from 'path';
import packson from '../package.json';

const rootPath = path.dirname(__dirname);
const rooter = dir => path.join(rootPath, dir);
const port = 8787;

export default Object.assign({}, packson, {
  port,
  backend: {
  },
  path: {
    root: rootPath,
    // client
    assets: rooter('assets'),
    css: {
      src: rooter('app/styles/sass'),
      dest: rooter('assets/css')
    },
    image: {
      src: rooter('app/styles/images'),
      dest: rooter('assets/images')
    },
    fonts: {
      src: rooter('app/styles/fonts'),
      dest: rooter('assets/fonts')
    },
    js: {
      entry: rooter('app/pages'),
      dest: rooter('assets/scripts')
    },

    // server
    app: rooter('server/main.js'),
    routes: rooter('server/routes'),
    extensions: rooter('server/extensions'),
    middlewares: rooter('server/middlewares'),
    controllers: rooter('server/controllers'),
    views: rooter('server/views')
  }
});

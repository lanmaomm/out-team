import Controller from '../controller';
import config from 'config';

export default class Main extends Controller {
    *index() {
      let { query } = this.ctx;
      if (!query.page) {
        query.page = 1;
      }
      this.podata({
        data: [{
          key: '2',
          name: '吴彦祖',
          age: 18,
          address: '西湖区'
        }],
        current: query.page - 0,
        limit: 10,
        total: 200
    })
  }
}

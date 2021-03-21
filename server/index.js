const Vue = require('vue');
const express = require('express');

const app = express();

const renderer = require('vue-server-renderer').createRenderer();

const page = new Vue({
  data: {
    title: 'Hello Vue SSR'
  },
  template: '<div>{{title}}</div>',
});

app.get('/', async (req, res) => {
  try {
    const html = await renderer.renderToString(page);
    res.send(html);
  } catch (e) {
    res.status(500).send('Server Error!');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

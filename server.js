import Koa from 'koa';
import React from 'react'
import {
  renderToString
} from 'react-dom/server';

import views from 'koa-views';
import path from 'path';

// import Demo from './app/main.js'
import index from './router/index';

const app = new Koa();

app.use(require('koa-static')(__dirname + '/public'));

app.use(views(path.resolve(__dirname, './views'), {
  map: {
    html: 'ejs'
  }
}));

app.use(index.routes())

/* app.use(async (ctx) => {
  let str = renderToString( < Demo /> );
  await ctx.render('index', {
    root: str
  })
}) */

app.listen(3000)
console.log("系统启动，端口：3000")
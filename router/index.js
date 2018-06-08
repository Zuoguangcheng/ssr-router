import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ServerRoot from '../app/server';

import { match } from "react-router";

const router = require('koa-router')();
import routes from '../app/router';

let { renderToString } = ReactDOMServer;

router.get('*', async ( ctx, next ) => {
  let url = ctx.request.url.replace('/client', '');

  console.log('url', url)
  const context = {};
  let str = renderToString(<ServerRoot url={url} context={context} />)
  await ctx.render('index', {
    root: str,
  })
})

module.exports = router;
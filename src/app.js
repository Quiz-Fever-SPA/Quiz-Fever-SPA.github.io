import { page, render } from './library.js';
import { editorPage } from './pages/editor/editor.js';
import { navPage } from './pages/nav.js';
import { getUserData } from './util.js';

const root = document.getElementById('content');
const nav = document.getElementById('titlebar');


page(decorateContext);
page(navContext);
page('/', editorPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.user = getUserData();
    next();
}

function navContext(ctx, next) {
    render(navPage(ctx), nav);
    next();
}
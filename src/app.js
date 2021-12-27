import { logout } from './api/user.js';
import { page, render } from './library.js';
import { loginPage, registerPage } from './pages/author.js';
import { browsePage } from './pages/browse.js';
import { editorPage } from './pages/editor/editor.js';
import { logoutPage } from './pages/logout.js';
import { navPage } from './pages/nav.js';
import { getUserData } from './util.js';
// import * as api from './api/user.js';

// window.api = api;

const root = document.getElementById('content');
const nav = document.getElementById('titlebar');


page(decorateContext);
page(navContext);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutPage);
page('/browse', browsePage);
page('/create', editorPage);
page('/edit/:id', editorPage);

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

// document.getElementById('logoutBtn').addEventListener('click', onLogout);

// async function onLogout() {
//     await logout();
//     page.redirect('/');
// }
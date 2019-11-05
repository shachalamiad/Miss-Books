import bookApp from '../pages/book-app.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';
import welcome from '../pages/welcome.cmp.js';
import about from '../pages/about.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: welcome
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:id',
        component: bookDetails
    }
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;
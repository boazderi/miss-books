
import bookApp from "./view/book-app-cmp.js"
import homePage from "./view/home-page.cmp.js"
import aboutPage from "./view/about-page.cmp.js"
import bookDetails from "./view/book-details-cmp.js"

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/book',
            component: bookApp
        },
        {
            path: '/book/:id',
            component: bookDetails
        },
        // {
        //     path: '/car/edit/:id?',
        //     component: carEditCmp
        // },
        {
            path: '/about',
            component: aboutPage
        },
    ]
}

export const router = createRouter(routerOptions)

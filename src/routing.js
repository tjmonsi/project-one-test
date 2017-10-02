
    export default {
      '/': () => { return import(/* webpackChunkName: "landing-page" */ './modules/project-one-module/pages/landing-page/landing-page.js') }, 
'/page/:id': () => { return import(/* webpackChunkName: "page-one" */ './modules/project-one-module/pages/page-one/page-one.js') }
    }
  
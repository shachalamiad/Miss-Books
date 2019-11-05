'use strict'

import theRouter from '../js/services/routes.js'
import appHeader from '../js/cmps/app-header.cmp.js'

Vue.config.productionTip = false

var options = {
    router: theRouter,
    el: '#my-app',
    template: `
    <div class="home-page">

            <app-header></app-header>
            <router-view></router-view>
       
    </div>
    `,

    data() {  
        return {
            
            }
    },

    components: {
        appHeader
    },

}
new Vue(options);

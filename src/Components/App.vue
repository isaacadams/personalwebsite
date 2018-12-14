<template>
    <div id="app">
        <nav>
            <ul>
                <li v-for="route in routes" v-if="route.name !== 'NotFound'">
                    <router-link :to="route.path">{{route.name}}</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    //import { RouteConfig } from 'vue-router';
    //import Component from "vue-class-component";
    //import { Prop } from "vue-property-decorator";
    
    export default Vue.extend({
        props: ['routes']        
    })

</script>
export default {
    template: ` 
    <div id="app">
        <nav>
            <ul>
                <li v-for="route in routes" v-if="route.name !== 'NotFound'" >
                     <router-link :to="route.path" > {{ route.name }}</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
    `,
    props: ['routes']
}

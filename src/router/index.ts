import {createRouter, createMemoryHistory} from 'vue-router'
import Home from '../components/Home.vue'
import PeriodicControl from '../components/PeriodicControl.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/periodic-control", component: PeriodicControl}
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})
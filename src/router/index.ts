import {createRouter, createMemoryHistory} from 'vue-router'
import Home from '../components/Home.vue'
import PeriodicControl from '../components/Periodic control.vue'
import SecondSurvey from '../components/SecondSurvey.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/periodic-control", component: PeriodicControl},
    {path: "/second", component: SecondSurvey}
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})
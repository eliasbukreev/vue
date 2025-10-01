import {createRouter, createMemoryHistory} from 'vue-router'
import Home from '../components/Home.vue'
import FirstSurvey from '../components/FirstSurvey.vue'
import SecondSurvey from '../components/SecondSurvey.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/first", component: FirstSurvey},
    {path: "/second", component: SecondSurvey}
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})
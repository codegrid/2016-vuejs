import Latest from './container/Latest.vue'
import List from './container/List.vue'
import NewMemo from './container/NewMemo.vue'
import Edit from './container/Edit.vue'

export default {
  mode: 'history',
  routes: [
    {
      path: '/list', component: List, children: [
        {
          path: ':id', component: Edit
        }
      ]
    },
    {
      path: '/latest', component: Latest
    },
    {
      path: '/new', component: NewMemo
    },
    {
      path: '*',  redirect: '/latest'
    }
  ]
}

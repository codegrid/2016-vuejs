import Root from './page/Root'
import Items from './page/Items'
import Add from './page/Add'
import EditorView from './components/EditorView'

export default {
  mode: 'history',
  routes: [
    {
      path: '/', component: Root, name: 'root'
    },
    {
      path: '/add', component: Add, name: 'add'
    },
    {
      path: '/items', component: Items, name: 'items', children: [
        {
          path: ':id', component: EditorView, name: 'item', meta: {edit: true}
        }
      ]
    }
  ]
}

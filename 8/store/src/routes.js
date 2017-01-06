import Root from './page/Root'
import Add from './page/Add'
import Items from './page/Items'
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
          path: ':id', component: EditorView, name: 'edit'
        }
      ]
    }
  ]
}

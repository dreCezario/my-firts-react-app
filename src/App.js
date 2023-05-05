import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'

import UsersList from './pages/users/List'
import UsersRegister from './pages/users/Register'
import Home from './pages/Home'

function App() {
  return (
      <Router>
        <TemplateDefault>
          <Switch>
              <Route path="/users/add"> 
                <TemplatePage title="User Registration" Component={UsersRegister} />
              </Route>
              <Route path="/users"> 
                <TemplatePage title="Users List" Component={UsersList} />
              </Route>
              <Route path="/"> 
              <TemplatePage title="Home" Component={Home} />
              </Route>
          </Switch>
        </TemplateDefault>
      </Router>
  );
}

export default App;

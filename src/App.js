import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'

import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
            <Route path="/users"> 
              <TemplatePage title="Users" Component={Users} />
            </Route>
            <Route path="/"> 
            <TemplatePage title="Home" Component={Home} />
            </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  );
}

export default App;

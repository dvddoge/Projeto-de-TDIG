import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AuthenticatedAxios from './components/AuthenticatedAxios';

const Logout = () => {
  localStorage.removeItem('jwtToken');
  return <Redirect to="/login" />;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/profile" component={UserProfile} /> {/* substitua pelo componente de perfil de usuário */}
        <PrivateRoute path="/home" component={UserHome} /> {/* substitua pelo componente da página inicial do usuário */}
        <PrivateRoute path="/project-management" component={ProjectManagement} /> {/* substitua pelo componente de gerenciamento de projetos */}
        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </Router>
  );
}

export default App;

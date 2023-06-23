import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import RegistrationForm from './components/RegistrationForm';
import StudentLinking from './components/StudentLinking';

import UserContextProvider from './context/UserContext';
import ProjectContextProvider from './context/ProjectContext';

const App = () => {
  return (
    <UserContextProvider>
      <ProjectContextProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/register" component={RegistrationForm} />
              <Route path="/login" component={LoginPage} />
              <Route path="/projects/:id" component={ProjectDetailsPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/link-student" component={StudentLinking} />
              <Route path="/" component={LoginPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ProjectContextProvider>
    </UserContextProvider>
  );
};

export default App;

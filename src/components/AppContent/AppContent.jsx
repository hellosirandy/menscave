import React from 'react';
import ArticlePage from '../../components/ArticlePage/ArticlePage';
import EditArticlePage from '../EditArticlePage/EditArticlePage';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './AppContent.css';

const AppContent = ({authed}) => {
  return(
    <div className="app-content">
      <Switch>
        <Route path='/article' component={ ArticlePage }/>
        <PrivateRoute authed={authed} exact path='/newarticle' component={ EditArticlePage }/>
        <PrivateRoute authed={authed} exact path='/editarticle/:article' component={ EditArticlePage }/>
      </Switch>
    </div>
  )
}

export default AppContent;

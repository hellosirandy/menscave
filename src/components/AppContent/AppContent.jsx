import React from 'react';
import ArticleListContainer from 'containers/ArticleListContainer';
import ArticlePage from '../../components/ArticlePage/ArticlePage';
import EditArticlePage from '../EditArticlePage/EditArticlePage';
import { Switch, Route } from 'react-router-dom';
import './AppContent.css';

const AppContent = () => {
  return(
    <div className="app-content">
      <Switch>
        <Route path='/article' component={ ArticlePage }/>
        <Route exact path='/newarticle' component={ EditArticlePage }/>
        <Route exact path='/editarticle/:article' component={ ArticleListContainer }/>
      </Switch>
    </div>
  )
}

export default AppContent;

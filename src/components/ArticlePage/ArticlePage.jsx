import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleListContainer from 'containers/ArticleListContainer'

const ArticlePage = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/article' component={ ArticleListContainer }/>
        <Route exact path='/article/:article' component={ ArticleListContainer }/>
      </Switch>
    </div>
  )
}

export default ArticlePage;

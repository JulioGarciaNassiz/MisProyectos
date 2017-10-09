'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import SearchBox from './components/SearchBox.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import SearchResult from './components/SearchResult.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

const routes = (
  <Route path="/" component={SearchBox} >
    <Route path="/items/:id" component={ItemDetail}/>
    <Route path="/items" component={SearchResult}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
); 


export default routes;

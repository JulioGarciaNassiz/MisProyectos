'use strict';

import React from 'react';
import { Link } from 'react-router';
import SearchItem from './SearchItem.jsx'
import items from '../data/items';

export default class SearchResult extends React.Component {
  render() {
    const itemsSearch = items.items.map(item => <SearchItem key={item.id} {...item} />)
    const braedcrumbs = items.categories.map(description => description + ' > ' )
    if(Object.keys(this.props.location.query).length > 0){
        
    }
    return (
        <div>
          <h5 className="search-breadcrumb">{braedcrumbs.toString()}</h5>
          <div className="items-container">
              
            {itemsSearch}
          </div>      
        </div>
          
    );
  }
}

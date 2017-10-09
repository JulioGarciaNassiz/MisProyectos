'use strict';

import React from 'react';
import { Link } from 'react-router';
import SearchItem from './SearchItem.jsx'
import axios from 'axios'

export default class SearchResult extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        items: null,
        breadcrumb: ''
      };
    }
  componentDidMount () {
    console.log(this.props.location.query)
    axios.get(' http://localhost:3000/api/items?q=' + this.props.location.query.q)
    .then(items => {
      console.log(items)
      const itemsSearch = items.data.items.map(item => <SearchItem key={item.id} {...item} />)
      const braedcrumbs = items.data.categories.toString().split(',').join(' > ')
      console.log(itemsSearch)
      console.log(braedcrumbs)
      this.setState({
        items: itemsSearch,
        breadcrumb: braedcrumbs
      })
    })
    }
  render() {
    
    
    if(Object.keys(this.props.location.query).length > 0){
        
    }
    return (
        <div>
          <h5 className="search-breadcrumb">{this.state.breadcrumb}</h5>
          <div className="items-container">
              
            {this.state.items}
          </div>      
        </div>
          
    );
  }
}

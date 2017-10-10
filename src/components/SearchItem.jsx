'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row, Form, FormGroup, FormControl, Button, InputGroup, Label } from 'react-bootstrap'

export default class SearchItem extends React.Component {
  render() {
    return (
      <div>
        <Row className="list-item">
          <Col className="image-container">
            <Link to={`/items/${this.props.id}`}>
              <img src={this.props.picture} />
            </Link>
          </Col>
          <Col className="description-container">
            <h3 className="detail-price-item">
              {formatPrice(this.props.price)}
              <h5>{this.props.price.decimals} </h5>
              <img className="free-shipping" src={this.props.free_shipping ? '/img/ic_shipping.png' : '#'}>
              </img>
            </h3>
            <h4>
              {this.props.title}
            </h4>

          </Col>
          <Col className="city-container">
            <p className="item-location">
              {this.props.location}
            </p>
          </Col>
        </Row>
      </div>

    );
  }
}

function formatPrice(price) {
  const curr = price.currency === 'ARS' ? '$' : 'u$S'
  return curr + ' ' + price.amount
}
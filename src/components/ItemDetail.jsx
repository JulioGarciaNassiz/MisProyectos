'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row, Form, FormGroup, FormControl, Button, InputGroup, Label } from 'react-bootstrap'
import NotFoundPage from './NotFoundPage.jsx';
import items from '../data/itemDetail';
import axios from 'axios'

export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }
  componentDidMount() {
    axios.get(' http://localhost:3000/api/items/' + this.props.params.id)
      .then(response => {
        const item = response.data;
        const braedcrumbs = item.item.categories.toString().split(',').join(' > ')
        this.setState(
          {
            item: <div>
              <h5 className="search-breadcrumb">{braedcrumbs}</h5>
              <div className="items-container">
                <Row>
                  <Col className="detail-image-container">
                    <img src={item.item.picture} />
                  </Col>
                  <Col className="description-container">
                    <h5 className="detail-top">
                      {(item.item.condition === "new" ? 'Nuevo' : 'Usado') + ' - ' + item.item.sold_quantity + ' vendidos'}
                    </h5>
                    <h3 className="detail-middle">
                      {item.item.title}
                    </h3>
                    <h3 className="detail-price">
                      {formatPrice(item.item.price)}
                      <h5>{item.item.price.decimals} </h5>
                    </h3>
                    <Button className="buy-button">
                      Comprar
              </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className="detail-product-desc-t">
                      Descripción del producto
              </h2>
                    <p className="detail-product-desc-c">
                      {item.item.description}
                    </p >
                  </Col>
                </Row>
              </div>
            </div>
          }
        );
      }).catch(error => {
        this.setState(
          { item: <NotFoundPage /> }
        );
      })
  }
  render() {
    const item = this.state.item
    return (
      item
    )

  }
}

function formatPrice(price) {
  const curr = price.currency === 'ARS' ? '$' : 'u$S'
  return curr + ' ' + price.amount
}
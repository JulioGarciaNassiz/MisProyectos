import React from 'react'
import { Grid, Col, Row, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap'
import { withRouter, Link } from 'react-router';
class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        };
    }
    handleEmailChange(e) {
        this.setState({ search: e.target.value });
    }

    handleSearch(event) {
        this.props.history.push({ 
            pathname: '/items',
            search: '?q=' + this.state.search
        })
        event.preventDefault()
    }

    handleClickSearch(event) {
        this.props.history.push({ 
            pathname: '/items',
            search: '?q=' + this.state.search
        })
        event.preventDefault()
    }

    render() {

        return (
            <Grid>
                <Row className="nav-header nav-header-fixed">
                    <Col xsOffset={1} xs={1}>
                        <Link to='/'>
                            <img className="icon" src={`/img/Logo_ML.png`} />
                        </Link>

                    </Col>
                    <Col xs={9}>
                        <Form onSubmit={this.handleClickSearch.bind(this)}>
                            <FormGroup >
                                <InputGroup>
                                    <FormControl type="text" placeholder="Nunca dejes de buscar" onChange={this.handleEmailChange.bind(this)} value={this.state.email} />
                                    <InputGroup.Button>
                                        <Button type="submit"  onClick={this.handleSearch.bind(this)}><img className="icon" src={`/img/ic_Search.png`} /></Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row className="mainContainer">
                    <div className="app-content">{this.props.children}</div>
                </Row>

            </Grid>

        )

    }
}

export default SearchBox
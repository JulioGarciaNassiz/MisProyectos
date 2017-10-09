import React from 'react'
import {Grid,Col,Row,Form,FormGroup,FormControl,Button,InputGroup} from 'react-bootstrap'
class SearchBox extends React.Component {

    render () {

        return (
            <Grid>
                <Row className="nav-header nav-header-fixed">
                    <Col xsOffset={1} xs={1}>
                        <a href="">
                            <img className="icon" src={`/img/Logo_ML.png`}/>
                        </a>
                    
                    </Col>
                    <Col xs={9}>
                    <Form action="">
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Button>
                                    <Button><img className="icon" src={`/img/ic_Search.png`}/></Button>
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
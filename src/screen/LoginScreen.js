import React,{useState} from 'react'
import {Container,Row, Col, Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function LoginScreen() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
    <Container>

        <Row className='me-0 justify-content-md-center my-3' style={{minHeight:'70vh'}}>
            <Col xs={12} md={6}>
                <Form onSubmit={submitHandler}> 

                    <Form.Group controlId='username'>
                        <Form.Control 
                            className='my-3'
                            style={{fontWeight:'bold', color:'black', border:'1px solid black'}}
                            type='text'
                            placeholder='Enter username'
                            value={username}
                            required
                            onChange={(e)=>setUsername(e.target.value)}
                            >
                        </Form.Control>
                   
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Control 
                                type='password'
                                className='my-3'
                                style={{fontWeight:'bold', color:'black', border:'1px solid black'}}
                                required
                                placeholder='Enter password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                >
                        </Form.Control>
                    </Form.Group>
                    <div className='text-center'>
                        <Button type='submit' style={{width:100}}>Login</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>

    )
}

export default LoginScreen

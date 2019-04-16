import React, {Component} from 'react';
import {Form,FormGroup,Input,Label,Col,Button} from 'reactstrap';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name] : value
        })
    }


    render(){
        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <Col md={{size:4,offset:4}}>
                        <div id="login-box" className='text-center'>
                            <img src='./assets/img/quiz-pro-logo.png' alt='Quiz Pro Logo' />
                            <Form className='text-left'>
                                <FormGroup>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input type='email' name='email' id='email' placeholder='Enter Email'
                                    value={this.state.email} onChange={this.handleInput}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'> Password </Label>
                                    <Input type='password' name='password' id='password' placeholder='Enter Password'
                                    value={this.state.password} onChange={this.handleInput}/>
                                </FormGroup>

                                <FormGroup>
                                    <Button type='submit' className='btn-sm'>
                                        Login
                                    </Button>
                                </FormGroup>
                            </Form>
                        </div>
                        </Col>
                    </div>
                </div>
           </React.Fragment>
        )
    }
}

export default Login
import React,{Component} from 'react';
import {Navbar,NavbarBrand,Row,Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render(){
        return(
            <Navbar expand='md'>
                <div className='container-fluid'>
                    <Row className='w-100'>
                        <Col md={3}>
                            <NavbarBrand>
                                <img src='assets/img/quiz-pro-logo.png' alt='Quiz Pro' />
                            </NavbarBrand>
                        </Col>

                        <Col md={{size:3,offset:6}}>
                            <div id='navbar-user' >
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle>
                                    <h6 className='mb-0'> <i className='fa fa-user'></i> Username <i className='fa fa-caret-down'></i></h6>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Word</DropdownItem>
                                        <DropdownItem>Word</DropdownItem>
                                        <DropdownItem className='text-danger'><b>Logout</b></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Navbar>
            
        )
    }
}

export default Header;
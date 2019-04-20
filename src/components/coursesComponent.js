import React,{Component} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card,Col, CardHeader} from 'reactstrap';
import {CourseList} from '../shared/coursesDetaills';


class Courses extends Component{
    constructor(props){
        super(props);
        this.state={
            courses:CourseList,

        }


    }


    render(){
        const courseco = this.state.courses.map((course) => {
            return(
                <React.Fragment>
                <Col md={11} key={course.id} className='mt-1 mb-2'>
                    <Card>
                        <CardHeader id={'toggy'+course.id}>
                            <div className='course-title float-left'>
                                <h4>{course.name}</h4>
                            </div>
                            <span className='fa fa-caret-down float-right'></span>
                        </CardHeader>
                        <UncontrolledCollapse toggler={'#toggy' + course.id}>    
                            <CardBody>
                                <h5>{course.description}</h5>
                                <p>Category: {course.category}</p>
                                <Button className='btn-sm'>Start Test</Button>
                            </CardBody>
                        </UncontrolledCollapse>  
                    </Card>
                </Col>
                </React.Fragment>    
            );
        });
        return(
            <div className='container'>
                <div className='row'>
                    {courseco}
                </div>
            </div>
        )
    }
 
}



export default Courses;
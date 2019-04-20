import React , {Component} from 'react';
import Login from './loginComponent';
import Courses from './coursesComponent';
import Header from './headerComponent';
import Quiz from './quizPaper';


class Main extends Component{
    render(){
        return( 
            <React.Fragment>
            <Header />
            <Quiz/>
        </React.Fragment>
        )
    }
}

export default Main;
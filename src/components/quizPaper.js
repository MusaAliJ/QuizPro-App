import React,{Component} from 'react';
import {Questions} from '../shared/quizQuestions';


class Quiz extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:Questions,
            num:0
  
        }
        this.funda = this.funda.bind(this);
    }
  
    funda(){
          this.setState({ num: this.state.num+1})
        const quelimit = this.state.num;
        if(quelimit > 1){
            
        }
        } 

    render(){ 
 
        const question = this.state.questions[this.state.num]
        
            return(
                <React.Fragment>
                <h1>Q:no {question.id}</h1>
                <h1>{question.question}</h1>
                <h1>{question.optionA}</h1>
                <h1>{question.optionB}</h1>
                <h1>{question.optionC}</h1>
                <h1>{question.optionD}</h1>
                {<button onClick={(e) => this.funda(e)}> Next </button>}
                </React.Fragment>
            )
           
        


  
    }
}

export default Quiz;
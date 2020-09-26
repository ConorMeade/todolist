import React from 'react';
import reactDOM from 'react-dom';
import './index.css';

function User(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Section(props){
  return (
    <div>
      {props.value}
    </div>
  )
}
class CreateEntry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text : '',
      list : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      text : event.target.value
    });
  }

  handleSubmit(event){
    alert('A new task was submitted: ' + this.state.text);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          New Entry:
            <input type="text" value={this.state.text} onChange = {this.handleChange} />
        </label>
        <input type ="submit" value="Submit" />
      </form>
    );
  }

}

class List extends React.Component{

  /*Three sections for second most pressing tasks, most pressing tasks, and finished tasks */
  constructor(props){
    super(props);
    this.state = {
      secondPriority : [1, 2, 3],
      firstPriority : [4, 5, 6],
      finished : [7, 8, 9]
    };
  }

  render(){
    return(
      <div>
        <div className = "entryform">
          <CreateEntry />
        </div>
      </div>
    );
  }
}


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    // change code above this line
  }
  // change code below this line
  increment(){
    this.setState({
      count : this.state.count + 1
    });
  }
  decrement(){
    this.setState({
      count : this.state.count - 1
    });
  }
  reset(){
    this.setState(state =>({
      count : 0
    }));
  }
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};






  // ========================================

// const element = <User name = "Conor" />;
// reactDOM.render(
//   element,
//   document.getElementById('root')
// );

reactDOM.render(
  <List />,
  document.getElementById('root')
);





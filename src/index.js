import React from 'react';
import reactDOM from 'react-dom';
import './index.css';

function User(props) {
  return <h1>Hello, {props.name}</h1>;
}

class CreateEntry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text : '',
      selectedList : "",
      secondPriority : [],
      firstPriority : [],
      finished : []
    };
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleText(event){
    this.setState({
      text : event.target.value
    });
  }
  handleSelect(event){
    this.setState({
      selectedList : event.target.value
    });
    if(this.state.selectedList == "somewhat"){
      this.setState({
        secondPriority : [...this.state.secondPriority, this.state.text]
      });
    }else if(this.state.selectedList == "very"){
      this.setState({
        firstPriority : [...this.state.firstPriority, this.state.text]
      });
    }else{
      this.setState({
        finished : [...this.state.finished, this.state.text]
      });
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.secondPriority);
    console.log(this.state.firstPriority);
    console.log(this.state.finished);
    alert('A new task was submitted: ' + this.state.text + ' this list contains the tasks: ' + this.state.selectedList);
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          New Entry:
            <input type="text" value={this.state.text} onChange = {this.handleText} />
        </label>
        <label>
            <select id='sections' name ='sections' onChange={this.handleSelect}>
              <option value=''></option>
              <option value={"somewhat"}>Somewhat Important</option>
              <option value={"very"}>Need to finish</option>
              <option value={"done"}>Finished</option>
            </select>
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
    const second_items = this.state.secondPriority.map(i => <li className='entry'>{i}</li>)
    const first_items =  this.state.firstPriority.map(i => <li className='entry'>{i}</li>)
    const finished_items =  this.state.finished.map(i => <li className='entry'>{i}</li>)
    return(
      <div>
        <div className='first'>
          {/* {this.state.secondPriority} */}
          {second_items}
        </div>
        <div className='second'>
          {/* {this.state.firstPriority} */}
          {first_items}
        </div>
        <div className='done'>
          {/* {this.state.finished} */}
          {finished_items}
        </div>
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





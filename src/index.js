import React from 'react';
import reactDOM from 'react-dom';
import './index.css';

function User(props) {
  return <h1>Hello, {props.name}</h1>;
}

class ListEntry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text : '',
      list: []
    };
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleText(event){
    this.setState({
      text : event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    alert("you submitted " + this.state.text)
    if (this.state.text.length === 0){
      return;
    }

    this.setState({
      list : this.state.list.concat(this.state.text),
      text: ''
    });
    console.log("List: " + this.state.text.toString())
  }

  render(){
    return(
        <form onSubmit = {this.handleSubmit}>
          <label>
            New Entry:
              <input type="text" value={this.state.text} onChange = {this.handleText} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }

}


class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : []
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(){
    this.setState({
      list : this.state.list.concat()
    });
  }

  render(){
    const items = this.props.list.map(i => <li className='entry'>{i}</li>)
    return(
      <div>
        <div>
          {items}
        </div>
        <div className = "entryform">
          <ListEntry handler = {this.updateList}/>
        </div>
      </div>
    );
  }
}

class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstPriority : [1],
      secondPriority : [2],
      finished : [3]
    };
  }

  render(){
    return(
      <div>
        <div className='first'>
          <List list = {this.state.firstPriority}/>
        </div>
        <div className='second'>
          <List list = {this.state.secondPriority}/>
        </div>
        <div className='done'>
          <List list = {this.state.finished}/>
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
  <ToDo />,
  document.getElementById('root')
);





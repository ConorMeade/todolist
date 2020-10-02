import React from 'react';
import reactDOM from 'react-dom';
import './index.css';

function User(props) {
  return <h1>Hello, {props.name}</h1>;
}


class List extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <div>
        <div>
          {this.props.list.map(i => <li className='entry'>{i}</li>)}
        </div>
      </div>
    );
  }
}

class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      secondPriority : [],
      firstPriority : [],
      finished : [],
      textSecond : '',
      textFirst : '',
      textFinished : ''
    };
    this.handleTextSecond = this.handleTextSecond.bind(this);
    this.handleTextFirst = this.handleTextFirst.bind(this);
    this.handleTextFinished = this.handleTextFinished.bind(this);
    this.handleSubmitSecond = this.handleSubmitSecond.bind(this);
    this.handleSubmitFirst = this.handleSubmitFirst.bind(this);
    this.handleSubmitFinished = this.handleSubmitFinished.bind(this);
  }


  handleTextSecond(event){
    // event.preventDefault();
    this.setState({
      textSecond : event.target.value
    });
  }

  handleTextFirst(event){
    // event.preventDefault();
    this.setState({
      textFirst : event.target.value
    });
  }

  handleTextFinished(event){
    // event.preventDefault();
    this.setState({
      textFinished : event.target.value
    });
  }

  handleSubmitSecond(event){
    event.preventDefault();
    alert("you submitted " + this.state.textSecond)
    if (this.state.textSecond.length === 0){
      return;
    }

    this.setState({
      list : this.state.secondPriority.push(this.state.textSecond),
      text: ''
    });
  }

  handleSubmitFirst(event){
    event.preventDefault();
    alert("you submitted " + this.state.textFirst)
    if (this.state.textFirst.length === 0){
      return;
    }

    this.setState({
      list : this.state.firstPriority.push(this.state.textFirst),
      text: ''
    });
  }

  handleSubmitFinished(event){
    event.preventDefault();
    alert("you submitted " + this.state.textFinished)
    if (this.state.textFinished.length === 0){
      return;
    }

    this.setState({
      list : this.state.finished.push(this.state.textFinished),
      text: ''
    });
  }

  render(){
    return(
      <div>
        <div className='second'>
          <List list = {this.state.secondPriority}/>
          <form onSubmit = {this.handleSubmitSecond}>
          <label>
            New Entry:
              <input type="text" value={this.state.textSecond} onChange = {this.handleTextSecond} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <div className='first'>
          <List list = {this.state.firstPriority}/>
          <form onSubmit = {this.handleSubmitFirst}>
          <label>
            New Entry:
              <input type="text" value={this.state.textFirst} onChange = {this.handleTextFirst} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <div className='done'>
          <List list = {this.state.finished}/>
          <form onSubmit = {this.handleSubmitFinished}>
          <label>
            New Entry:
              <input type="text" value={this.state.textFinished} onChange = {this.handleTextFinished} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}


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





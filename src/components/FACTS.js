import React, { Component } from 'react';
import Button from './Button';
import NavBar from './NavBar';

class Messages extends Component {
  state = {  
    id:1,
    animate:false,
    messages: [
      {
        id:1,
        active:false,
        title:"Who uses Random Cofffee?",
        content:"Anyone who feels lonely. Writers, programmers, nonprofits, cosplayers, you name it. More than 500,000 people and millions of aliens are on Random Cofffee."
      },
      {
        id:2,
        active:false,
        title:"Is there a fee to use Random Cofffee??",
        content:"We do not charge a monthly fee. All features including publishing and emails are free for everyone. We charge a 5% transaction fee, and creators keep 95% of the earnings. We make money only when you do. We'll never show ads and we'll never sell your data."
      },
      {
        id:3,
        active:false,
        title:"Is it a real service?",
        content:"I don't think so. But it doesn't mean you can't sing up fo free"
      },
    ]
  } 
  
  addClass = (id) => {
    const message = this.state.messages.find(message=> message.id==id)
    message.active=!message.active;
    this.setState({message})
  }  

  render() { 
    const {animate,messages,id} = this.state  
    return (
      <div className="page">
      <div className="flex">
        {messages.map(message=> 
          <div key={message.id} className="box">  
          <div onClick={()=>this.addClass(message.id)} className="title">
            <div className="titleText">{message.title}</div>
            <div className={message.active ? 'anime iconSquare' : 'iconSquare'}></div>
          </div>
          {message.active && <div className="content">{message.content}
          </div>}
          <div className={`line ${message.active ? 'lineAnima' : null}`}></div>
        </div>     
          )}
      </div>
      </div>
    );
  }
}
 
export default Messages;
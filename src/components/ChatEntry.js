import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';


const ChatEntry = (props) => {
// estragon are on the right
// vladimir are on the left 
let chatEntryClass = "";
  if (props.sender === "Estragon") {
    chatEntryClass = "chat-entry local";
  }
  else {
    chatEntryClass = "chat-entry remote";
  }

  return (
      <section className={chatEntryClass}>
        <p className="entry-name">{props.sender}</p>
        <p className="entry-bubble">
          {props.body}
          <Timestamp time={props.timeStamp}/>
        </p>
        
      </section>
  
  );
};

export default ChatEntry;
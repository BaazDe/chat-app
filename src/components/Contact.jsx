import React from 'react';
import './Contact.css';


function Contact(props) {
    return (
      <div className="Contact">
          <img src={props.avatar} alt={props.name} className="avatar" />
          <div className="Info">
              <h4>{props.name}</h4>
              <span className="PhoneNumber">{props.phone}</span>
              <p>{props.mail}</p>
              <div className="status">
                 <p>
                     <span className={props.status ? "status status-online":"status status-offline"}></span>{props.status ? "Online":"Offline"}
                </p>
                <hr/>
              </div>
          </div>
        
      </div>
      
    );
  }
  
  export default Contact;
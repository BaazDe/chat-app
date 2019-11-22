import React from 'react';
import Contact from './Contact';
import './Contact.css';

const contacts = [
    {
        name: 'Patrick Mitchelle',
        avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
        mail: 'patrick.mitchelle@example.com',
        phone: '(194)-236-8391',
        status: true
    },
    {
        name: 'Bobby Banks',
        avatar: 'https://randomuser.me/api/portraits/men/88.jpg',
        mail: 'bobby.banks@example.com',
        phone: '(731)-297-0247',
        status: false
    },
    {
        name: 'Sarah Grant',
        avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
        mail: 'sarah.grant@example.com',
        phone: '(138)-359-7179',
        status: true
    }
]

const ContactList = () => (
    <div>
        {contacts.map((item,index) =>(
            <Contact 
            key={index} 
            name = {item.name} 
            avatar = {item.avatar}
            mail = {item.mail}
            phone = {item.phone}
            status = {item.status}
            />
        )
        )}
    </div>
);


export default ContactList;
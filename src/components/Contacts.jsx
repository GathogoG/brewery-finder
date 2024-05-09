// Contact.jsx
import React from 'react';

function Contact() {
    const handleClick = () => {
        alert('You clicked on the Contact page!');
    };

    return (
        <div>
            <h2>Contact</h2>
            <p>Contact page content</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Contact;

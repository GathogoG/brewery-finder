// AboutUs.jsx
import React from 'react';

function AboutUs() {
    const handleClick = () => {
        alert('You clicked on the About Us page!');
    };

    return (
        <div>
            <h2>About Us</h2>
            <p>About Us page content</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default AboutUs;

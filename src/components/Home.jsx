// Home.jsx
import React from 'react';

function Home() {
    const handleClick = () => {
        alert('You clicked on the Home page!');
    };

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;

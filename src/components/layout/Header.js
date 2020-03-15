import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    margin: '1rem'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding:'10px',
    fontSize:'2em'
}

export default Header;

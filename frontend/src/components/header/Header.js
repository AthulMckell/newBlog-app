import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header(props) {
    return (
        <div>
            <nav className='header'>
                <h2>Athul's Blog</h2>
                <div className='articles'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/articlelist'>Articles</Link>
                </div>

            </nav>
        </div>
    );
}

export default Header;
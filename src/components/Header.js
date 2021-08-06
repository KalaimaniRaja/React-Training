import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
            <Link to="/">Streamy</Link>
            <div className="right menu">
            <Link to="/">All Streams</Link>
            </div>
                <GoogleAuth />
            </div>
        )
    }
}

export default Header;
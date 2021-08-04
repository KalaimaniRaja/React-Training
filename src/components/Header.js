import React from 'react';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <GoogleAuth />
            </div>
        )
    }
}

export default Header;
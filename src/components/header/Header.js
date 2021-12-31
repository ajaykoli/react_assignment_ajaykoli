import React from 'react';

const Header = (props) => {
    return (
        <div className="header-wrapper">
            <div className="welcome-text">
                FakeResrvations
            </div>
            <div className="logout" onClick={() => props.handleLogout()}>
                Logout
            </div>
        </div>
    )
}

export default Header;
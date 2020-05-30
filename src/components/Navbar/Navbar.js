import React from 'react';

import './Navbar.scss';

function Navigation() {
    return (
        <div className="navi">
            <div className="navi-container container">
                <div>
                    <span>Write a Review</span>
                    <span>Events</span>
                </div>
                <div>
                    <span>Log In</span>
                    <span>
                        <button>
                            Sign Up
                        </button>
                    </span>
                    
                </div>
            </div>
        </div>
    )
};

export default Navigation;
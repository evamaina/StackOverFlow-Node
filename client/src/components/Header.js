import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="navWrapper">
                    <a className="left brand-logo">StackOverFlow</a>
                    <ul className="right">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;

import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return "stiil deciding";
            case false:
                return "im logged out";
            default:
                return "im logged in";
        }
    }
    render() {
        return (
            <nav>
                <div className="navWrapper">
                    <a className="left brand-logo">StackOverFlow</a>
                    <ul className="right">
                        <li>{this.renderContent()}</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);

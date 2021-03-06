import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

class LoggingLink extends Component {
    constructor(props){
        super(props);
    }
    handleClick = () => {
        let urlParts = this.props.to.split('/');
        const eid = urlParts[urlParts.length-1];
        alert('Clicking the Link is Logging' + eid);
    }

    render() {
        return (
                <Link {...this.props}
                    onClick={this.handleClick}>
                {this.props.children}</Link>
        );
    }
}

LoggingLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default LoggingLink;
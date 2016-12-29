import React, {Component, PropTypes} from 'react';
import './style.less';

class Footer extends Component {
    render() {
        return (
            <div className="footer">{this.props.message}</div>
        )
    }
}
export default Footer;


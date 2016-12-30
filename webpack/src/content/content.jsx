import React, {Component, PropTypes} from 'react';
import './style.less';

class Content extends Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}
export default Content;

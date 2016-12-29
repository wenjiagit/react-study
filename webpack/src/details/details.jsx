import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Details extends Component {
    render() {
        return (
            <div className="details">
                我是详情
            </div>
        );
    }
}

ReactDOM.render(<Details/>, document.getElementById('main'));


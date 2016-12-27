import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Login extends Component {
    render() {
        return (
            <div className="login">
                我是登录
                <br/>
                <a href="./home.html">首页</a>
            </div>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('main'));


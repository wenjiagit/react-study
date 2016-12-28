import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class About extends Component {
    state = {
        title: '我是关于页面'
    };
    handleClick = (e) => {
        alert(this.state.title);
    }

    render() {
        console.log(this.state.title);
        return (
            <div className="about">
                <h1 onClick={this.handleClick}>{this.state.title}</h1>
                <div><a href="./home.html">返回首页</a></div>
            </div>
        );
    }
}

ReactDOM.render(<About />, document.getElementById('main'));


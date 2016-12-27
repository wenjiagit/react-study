import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Home extends Component {
    state = {
        title: '我是主页title'
    };
    handleClick = (e) =>{
        alert(this.state.title);

    }
    render() {
        console.log(this.state.title);
        return (
            <div className="home" onClick={this.handleClick}>{this.state.title}</div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('main'));


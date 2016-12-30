import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import Footer from '../footer/footer';
import Header from '../header/header';
import Left from '../left/left';
import Content from '../content/content';

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
                <Left/>
                <Footer/>
                <Header/>
                <Content>
                    <h1 onClick={this.handleClick}>{this.state.title}</h1>
                    <div><a href="./home.html">返回首页</a></div>
                </Content>
            </div>
        );
    }
}

ReactDOM.render(<About />, document.getElementById('main'));


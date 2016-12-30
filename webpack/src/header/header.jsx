import React, {Component, PropTypes} from 'react';
import './style.less';

class Header extends Component {
    render() {
        return (
            <div className="top-nav">
                <ul>
                    <li><a href="./home.html">首页</a></li>
                    <li>新闻</li>
                    <li>投资</li>
                    <li>产品</li>
                    <li>企业</li>
                    <li>顾问</li>
                    <li><a href="./about.html">关于</a></li>
                </ul>
            </div>
        )
    }
}
export default Header;


import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import Footer from '../footer/footer';
import Header from '../header/header';
import Left from '../left/left';

function GetRequest() {
    const url = location.search; //获取url中"?"符后的字串
    const theRequest = {};
    if (url.indexOf("?") != -1) {
        const str = url.substr(1);
        const strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
class Details extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        const {id} = GetRequest();
        // TODO 根据id 发ajax请求，获取user

        const data = [
            {id: 1, name: '张三', sex: '男', age: '22', job: '主播1'},
            {id: 2, name: '李四', sex: '女', age: '20', job: '主播2'},
            {id: 3, name: '王五', sex: '男', age: '23', job: '主播3'},
            {id: 4, name: '赵六', sex: '女', age: '20', job: '主播4'},
            {id: 5, name: '赵六', sex: '女', age: '20', job: '主播4'},
        ];
        const users = data.filter(user => user.id == id);
        if (users && users.length) {
            const user = users[0];
            this.setState({
                user
            });
        }
    }

    render() {
        const user = this.state.user;
        return (
            <div className="details">
                <Header/>
                <Left/>
                <div><span>用户id：</span><span>{user.id}</span></div>
                <div><span>姓名：</span><span>{user.name}</span></div>
                <div><span>性别：</span><span>{user.sex}</span></div>
                <div><span>年龄：</span><span>{user.age}</span></div>
                <div><span>工作：</span><span>{user.job}</span></div>
                <Footer message="详情页底部"/>
            </div>
        );
    }
}

ReactDOM.render(<Details/>, document.getElementById('main'));


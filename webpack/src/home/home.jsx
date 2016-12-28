import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Home extends Component {
    state = {
        title: '我是主页title',
        users: [],
    };

    handleClick = (e) => {
        alert(this.state.title);

    }

    componentDidMount() {
        // TODO 发送ajax请求，获取users数据
        const data = [
            {id: 1, name: '张三', sex: '男', age: '22', job: '主播1'},
            {id: 2, name: '李四', sex: '女', age: '20', job: '主播2'},
            {id: 3, name: '王五', sex: '男', age: '23', job: '主播3'},
            {id: 4, name: '赵六', sex: '女', age: '20', job: '主播4'},
            {id: 5, name: '赵六', sex: '女', age: '20', job: '主播4'},
        ];
        this.setState({
            users: data
        });
    }

    handleDelete = (id) => {
        const ok = confirm('确定删除此条记录吗？');
        if (ok) {
            alert(`发送ajax请求，删除id=${id}的用户名吗？`);
            // 假如ajax 成功了，前端要删除对应的用户
            const {users} = this.state;
            const newUsers = users.filter(user => user.id != id);
            /*
             const newUsers = [];
             for(let i = 0;i<users.length;i++){
             const user = users[i];
             if(user.id != id){
             nu.push(user);
             }
             }
             */
            this.setState({
                users: newUsers,
            });
        }
    }

    render() {
        console.log(this.state.title);
        return (
            <div className="home">
                <h1 onClick={this.handleClick}>{this.state.title}</h1>
                <div><a href="./about.html">关于我们</a></div>
                <table className="user-list" cellPadding="0" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>工作</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.sex}</td>
                            <td>{user.job}</td>
                            <td className="operator"><span onClick={() => this.handleDelete(user.id)}>删除</span>
                                <span>详情</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('main'));

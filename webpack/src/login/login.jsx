import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Login extends Component {
    state = {
        userName: '',
        userPassWord: '',
        nameError: '',
        passWordError: '',
    }
    handleUserNameChange = (e) => {
        let userName = e.target.value;
        this.setState({
            userName
        });
        if (!userName) {
            this.setState({
                nameError: '用户名不能为空',
            });
        } else {
            this.setState({
                nameError: '',
            });
        }
        // TODO 完善其他校验
    }

    handleUserPassWordChange = (e) => {
        const userPassWord = e.target.value;
        this.setState({
            userPassWord
        });
        if (!userPassWord) {
            this.setState({
                passWordError: '密码不能为空'
            });
        } else {
            this.setState({
                passWordError: ''
            });
        }

        // TODO 完善其他校验
    }
    handleLoginButtonClick = (e)=> {
        e.preventDefault();

        console.log(this.state.userName);
        const userName = this.state.userName;
        const userPassWord = this.state.userPassWord;

        if (!userName) {
            this.setState({
                nameError: '用户名不能为空',
            });
            return false;
        }

        if (!userPassWord) {
            this.setState({
                passWordError: '密码不能为空'
            });
            return false;
        }
        // TODO 完善校验
        // TODO this.loginForm.submit();
        location.href = './home.html'
        return false;
    }

    render() {
        return (
            <div className="login">
                <div className="title">登录</div>
                <form className="login-form" ref={ (a) => this.loginForm = a}>
                    <input type="text" placeholder="请输入用户名" onChange={this.handleUserNameChange}/>
                    <div className="error">{this.state.nameError}</div>
                    <input type="password" placeholder="请输入密码" onChange={this.handleUserPassWordChange}/>
                    <div className="error">{this.state.passWordError}</div>
                    <button className="login-button" onClick={this.handleLoginButtonClick}>登录</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('main'));


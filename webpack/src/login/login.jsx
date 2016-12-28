import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Login extends Component {
    state = {
        userName: '',
        userPassWord:'',
        nameError:'',
        passWordError:'',
    }
    handleUserNameChange = (e) =>{
        let name=e.target.value;
        this.setState({
            userName:name
        });
        if(!name){
            this.setState({
                nameError: '用户名不能为空',
            });
        }
    }
    handleUserPassWordChange = (e) =>{
        let passWord=e.target.value;
        this.setState({
            userPassWord:passWord
        });
        if(!passWord){
            this.setState({
                passWordError:"密码不能为空"
            });
        }
    }
    handleLoginButtonClick =()=>{
        this.loginForm.submit();
        console.log(this.state.userName);
    }
    render() {
        return (
            <div className="login">
                <div className="title">登录</div>
                <form className="login-form" ref={function(a){this.loginForm = a}.bind(this)}>
                    <input type="text" value={this.props.userName} onChange={this.handleUserNameChange}/>
                    <div className="error">{this.state.nameError}</div>
                    <input type="password" value={this.props.userPassWord} onChange={this.handleUserPassWordChange}/>
                    <div className="error">{this.state.passWordError}</div>
                    <button className="login-button" onClick={this.handleLoginButtonClick}>登录</button>
                </form>f
            </div>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('main'));


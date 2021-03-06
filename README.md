# react-study
react 学习项目

## 安装
1. 安装nodejs
1. 安装git

## 初始化项目常用命令
```
# 查看nodejs版本
node -v
node --version

# 查看npm版本（npm是一个包管理器，用来管理项目中用到的依赖）
npm -v

# 使用npm初始化项目
npm init
name:   // 项目名称
version://项目版本号
description: //项目描述
entry point: //项目入口
test command://测试命令
git repository://git 产库路径
keywords://关键字
author://作者
license:.// 项目协议

# 使用npm安装包
npm install jquery --save   // save参数，是将依赖保存到package.json文件的 dependencies 属性
npm install jquery --save-dev

# 使用npm删除依赖包
npm remove jquery --save

# 强制取消未执行玩的命令
ctrl + c
# 使用cnpm 提高下载依赖速度
npm install -g cnpm --registry=https://registry.npm.taobao.org  // -g 参数指的是全局安装cnpm，即：在任何目录下都能使用cnpm命令

# node_modules文件
这个文件夹是整个项目中用到的依赖包存放目录

# 进入D盘
d:

# 进入react-demo目录
cd react-demo

# 创建文件夹
mkdir react-demo

# 返回上层目录
cd ..
```
## npm install 作用
> 安装当前目录下 package.json配置文件中配置的所有依赖包。一般clone新的项目之后，会执行npm install 安装项目所有需要的依赖包。

## git 常用命令
```
git pull //获取最新的git代码
git add . // git add --all
git commit -m '提交的注释写到这里'
git push origin master
```

## 翻墙软件
https://lanterncn.cn/down

## 资源
[react 中文文档](http://reactjs.cn/react/docs/getting-started-zh-CN.html)

## 启动nodejs后端
```
node app.js
// 如果修改了后端相关代码，要重新执行此命令，进行node服务器重启
```

## 搭建webpack环境

### 全局安装webpack
```
cnpm install webpack -g
```

## WebStorm 或者 IDEA编辑器中 wabpack -w 不起作用解决办法
```
file -> settings -> Appearance&behavior -> System Settings
找到 Use "safe write" (save change to temporary file first)
将前面的钩去掉，不要选中这一项。
```

## 生成ssh证书，git提交不用密码
1. git bash 终端中输入：ssh-keygen -t rsa -C “wenjia@qq.com”  然后一路回车
1. 进入.ssh目录 cd ~/.ssh (~是根目录)
1. cat id_rsa.pub  复制里面的内容
1. 打开github网站，登录自己的账号，点击右上角头像，进入settins -> SSH and GPG keys 右上角的New SSH Key
 
## https 方式clone的库改成ssh方式：
```
git remote rm origin
git remote add origin git@github.com:wenjiagit/react-study.git
```
## 绑定click方法并传参写法
```jsx
...
// 传入用户id
handleDelete = (id) => {
    laert(id);
}

// 传入事件对象e 和 用户id
handleDetail = (e, id) {
    console.log(e);
    console.log(id);
}
...
{this.state.users.map(user => (
    <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.sex}</td>
        <td>{user.job}</td>
        <td className="operator">
            <span onClick={() => this.handleDelete(user.id)}>删除</span>
            <span onClick={(e) => this.handleDetail(e, user.id)}>详情</span>
        </td>
    </tr>
))}
...
```


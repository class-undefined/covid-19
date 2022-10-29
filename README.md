# 安装
## 后端
后端使用python的`flask`框架完成.
运行之前确保安装`flask`依赖项.
```bash
cd backend
pip install -r requirements.txt
```

## 前端
前端使用vue3+vite3+typescrpt
编译之前确保本机具有node环境
```bash
pnpm install
pnpm dev
```
### [安装pnpm](https://www.pnpm.cn/installation):
#### 通过脚本安装

You may install pnpm even if you don't have Node.js installed, using the following scripts.

##### On Windows

Using PowerShell:

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```



##### On POSIX systems

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```



如果没有安装 curl，可以使用 wget：

```sh
wget -qO- https://get.pnpm.io/install.sh | sh -
```



##### On Alpine Linux

```sh
curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;
```
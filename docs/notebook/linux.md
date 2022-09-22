# linux

## 1. 终端命令格式

```
command [-options] [parameter]
```

说明:

- command: 命令名, 相应功能的英文单词或单词的缩写
- `[-options]`: 选项, 可用来对命令进行控制, 也可以省略
- `parameter`：传给命令的参数，可以是 **零个**、**一个** 或者 **多个**

> *代表可选*

## 2. 查阅命令帮助信息

### 2.1 --help

```
command --help
```

说明:

- 显示 `command` 命令的帮助信息

### 2.2 man(manual)

```
man command
```

说明:

- 查阅 `command` 命令的使用手册

## 3. 查看目录内容

### 3.1 ls 命令说明

- `ls` 是英文单词 **list** 的简写, 其功能为列出目录的内容, 是用户最常用的命令之一, 类似于 **DOS** 下的 `dir` 命令

### 3.2 ls 常用选项

| 参数 | 含义                                         |      |      |
| ---- | -------------------------------------------- | ---- | ---- |
| -a   | 显示指定目录下所有子目录与文件, 包括隐藏文件 |      |      |
| -l   | 以列表方式显示文件的详细信息                 |      |      |
| -h   | 配合 -l 以人性化的方式显示文件大小           |      |      |

## 4. 切换目录

### 4.1 cd 命令说明

- `cd` 是英文单词 **change directory** 的简写, 其功能为更改当前的工作目录，也是用户最常用的命令之一

> 注意: Linux 所有的 **目录** *和* **文件名** *都是大小写敏感的*

| 命令  | 含义                                   |      |      |
| ----- | -------------------------------------- | ---- | ---- |
| cd    | 切换到当前用户的主目录(/home/用户目录) |      |      |
| cd ~  | 切换到当前用户的主目录(/home/用户目录) |      |      |
| cd .  | 保持在当前目录不变                     |      |      |
| cd .. | 切换到上级目录                         |      |      |
| cd -  | 可以在最近两次工作目录之间来回切换     |      |      |

### 4.2 相对路径和绝对路径

- **相对路径** 在输入路径时, 最前面不是 **/** 或者 **~**, 表示相对 **当前目录** 所在的目录位置
- **绝对路径** 在输入路径时, 最前面是 **/** 或者 **~**, 表示从 **根目录/家目录** 开始的具体目录位置

## 5. 创建和删除操作

### 5.1 touch

- 如果文件 **不存在**, 可以创建一个空白文件
- 如果文件 **已经存在**, 可以修改文件的末次修改日期

### 5.2 mkdir

- 创建一个新的目录

  | 选项 | 含义             |
    | ---- | ---------------- |
  | -p   | 可以递归创建目录 |

  > **新建目录的名称** *不能与当前目录中* **已有的目录或文件** *同名*

### 5.3 rm

- 删除文件或目录

> *使用* `rm` *命令要小心, 因为文件删除后不能恢复*

| 选项 | 含义                                                  |
| ---- | ----------------------------------------------------- |
| -f   | 强制删除, 忽略不存在的文件, 无需提示                  |
| -r   | 递归地删除目录下的内容, **删除文件夹** 时必须加此参数 |

## 6. 拷贝和移动文件

| 命令               | 对应英文 | 作用                                 |
| :----------------- | :------- | :----------------------------------- |
| tree [目录名]      | tree     | 以树状图列出文件目录结构             |
| cp 源文件 目标文件 | copy     | 复制文件或者目录                     |
| mv 源文件 目标文件 | move     | 移动文件或者目录／文件或者目录重命名 |

### 6.1 tree

- `tree` 命令可以以树状图列出文件目录结构

| 选项 | 含义       |
| :--- | :--------- |
| -d   | 只显示目录 |

### 6.2 cp

- `cp` 命令的功能是将给出的 **文件** 或 **目录** 复制到另一个 **文件** 或 **目录** 中, 相当于 **DOS** 下的 `copy` 命令

| 选项 | 含义                                                         |
| :--- | :----------------------------------------------------------- |
| -i   | 覆盖文件前提示                                               |
| -r   | 若给出的源文件是目录文件, 则 cp 将递归复制该目录下的所有子目录和文件,目标文件必须为一个目录名 |

### 6.3 mv

- `mv` 命令可以用来 **移动** **文件** 或 **目录**, 也可以给 **文件或目录重命名**

| 选项 | 含义           |
| :--- | :------------- |
| -i   | 覆盖文件前提示 |

## 7. 查看文件内容

| 命令                 | 对应英文    | 作用                                                 |
| :------------------- | :---------- | :--------------------------------------------------- |
| cat 文件名           | concatenate | 查看文件内容、创建文件、文件合并、追加文件内容等功能 |
| more 文件名          | more        | 分屏显示文件内容                                     |
| grep 搜索文本 文件名 | grep        | 搜索文本文件内容                                     |

### 7.1 cat

- `cat` 命令可以用来 **查看文件内容**、**创建文件**、**文件合并**、**追加文件内容** 等功能
- `cat` 会一次显示所有的内容, 适合 **查看内容较少** 的文本文件

| 选项 | 含义               |
| :--- | :----------------- |
| -b   | 对非空输出行编号   |
| -n   | 对输出的所有行编号 |

### 7.2 more

- `more` 命令可以用于分屏显示文件内容, 每次只显示一页内容
- 适合于 **查看内容较多**的文本文件

使用 `more` 的操作键:

| 操作键   | 功能                 |
| :------- | :------------------- |
| 空格键   | 显示手册页的下一屏   |
| Enter 键 | 一次滚动手册页的一行 |
| b        | 回滚一屏             |
| f        | 前滚一屏             |
| q        | 退出                 |
| /word    | 搜索 **word** 字符串 |

### 7.3 grep

- linux 系统中 `grep` 命令是一种强大的文本搜索工具
- `grep`允许对文本文件进行 **模式**查找

| 选项 | 含义                       |
| :--- | :------------------------- |
| -n   | 显示匹配行及行号           |
| -v   | 显示不包含匹配文本的所有行 |
| -i   | 忽略大小写                 |

- 常用的两种模式查找

| 参数 | 含义                         |
| :--- | :--------------------------- |
| ^a   | 行首，搜寻以 **a** 开头的行  |
| ke$  | 行尾，搜寻以 **ke** 结束的行 |

## 8. 其他

### 8.1 echo 文字内容

- `echo` 会在终端中显示参数指定的文字, 通常会和 **重定向** 联合使用

## 8.2 重定向 `>` 和 `>>`

- linux 允许将命令执行结果 **重定向** 到一个 **文件**
- 将本应显示在**终端上的内容** **输出／追加** 到**指定文件中**

其中

- `>` 表示输出, 会覆盖文件原有的内容

- `>>` 表示追加, 会将内容追加到已有文件的末尾

### 8.3 管道 |

- linux 允许将 **一个命令的输出** 可以 **通过管道** 做为 **另一个命令的输入**
- 可以理解现实生活中的管子, 管子的一头塞东西进去, 另一头取出来, 这里 `|` 的左右分为两端, 左端塞东西(写), 右端取东西(读)

常用的管道命令有:

- `more`: 分屏显示内容
- `grep`: 在命令执行结果的基础上查询指定的文本

### 8.4 pwd

- pwd 命令是 print work directory 的缩写, 打印当前工作目录

## 9. 关机/重启

| 命令               | 对应英文 | 作用           |
| :----------------- | :------- | :------------- |
| shutdown 选项 时间 | shutdown | 关机／重新启动 |

### 9.1 shutdown

- `shutdown` 命令可以 **安全** **关闭** 或者 **重新启动系统**

| 选项 | 含义     |
| :--- | :------- |
| -r   | 重新启动 |

> *提示:*
>
> - **不指定选项和参数**, 默认表示 **1 分钟**之后 **关闭电脑**
> - 远程维护服务器时, 最好不要关闭系统, 而应该重新启动系统

- 常用命令实例

```
# 重新启动操作系统, 其中 now 表示现在
shutdown -r now

# 立刻关机, 其中 now 表示现在
shutdown now

# 系统在今天的 20:25 会关机
shutdown 20:25

# 系统再过十分钟后自动关机
shutdown +10

# 取消之前指定的关机计划
shutdown -c
```

## 10. 查看或配置网卡信息

| 对应英文    | 作用                          |                                   |
| :---------- | :---------------------------- | --------------------------------- |
| ifconfig    | configure a network interface | 查看/配置计算机当前的网卡配置信息 |
| ping ip地址 | ping                          | 检测到目标 ip地址 的连接是否正常  |

### 10.1 ifconfig

- `ifconfig` 可以查看/配置计算机当前的网卡配置信息

```
# 查看网卡配置信息
ifconfig

# 查看网卡对应的 IP 地址
ifconfig | grep inet
```

### 10.2 ping

```
# 检测到目标主机是否连接正常
ping IP地址

# 检测本地网卡工作正常
ping 127.0.0.1
```

## 11. 远程登录

### 11.1 密码登录

```
sudo vim /etc/ssh/sshd_config

# 端口
Port 22
# 允许 root 用户登录
PermitRootLogin yes
# 密码登录
PasswordAuthentication yes

# 生成ssh密钥
ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key

# 重启 ssh 服务
sudo service ssh --full-restart
```

### 11.2 密钥登录

```
# 查看 ssh 服务是否启动
ps -e | grep ssh

# 生成密钥
ssh-keygen

# 在服务器上安装公钥
cd .ssh
cat id_rsa.pub >> authorized_keys
chmod 600 authorized_keys
chmod 700 ~/.ssh

sudo vim /etc/ssh/sshd_config

# 密钥登录 
PubkeyAuthentication yes

# 重启 ssh 服务
sudo service ssh --full-restart
```

> 注意: 将私钥  `id_rsa` 下载到客户端, 使用 xshell 连接时导入

## 12. apt 卸载

```
# 该命令将移除与`packagename`相关联的所有二进制文件
apt-get remove packagename
# 移除与包packagename相关联的所有文件, 这些文件包括二进制文件和全局配置文件
apt-get remove --purge packagename
# 卸载当前系统中的不被任何包依赖了的包
apt-get autoremove packagename
```

## 13. 安装 make

```
apt-get update
apt-get install make
```

## 14. git 源码编译安装

```
sudo apt update

sudo apt install dh-autoreconf libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev libghc-zlib-dev

# /usr/local/bin这个目录默认已经加入了PATH环境变量中
sudo make prefix=/usr/local all
sudo make prefix=/usr/local install
```

## 15. 配置环境变量

```
vim /etc/profile
# 在文件最后一行添加: export PATH=$PATH:/usr/git/bin/

source /etc/profile
```

## 16. 软件源更换

```
# 备份
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak

# 修改
sudo vim /etc/apt/sources.list

deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse

# 更新镜像源
sudo apt-get update
```

## 17. nginx 配置

```
# 安装
sudo apt-get install nginx
# 检查配置文件
sudo nginx -t

# 报依赖包错误
cp libpng12.so.0 /lib/x86_64-linux-gnu/

# 运行
sudo nginx
# 关闭
sudo nginx -s stop
# 重载
sudo nginx -s reload

# 配置虚拟主机
# 配置域名,映射IP
sudo vim /etc/hosts
127.0.0.1 www.saas.gzlle.com

# 创建 server 虚拟主机配置文件
sudo vim /etc/nginx/sites-avaiable/www.saas.gzlle.com

# server 配置
server {
  listen 80;
  listen [::]:80;

  server_name www.saas.gzlle.com; #域名
  root /home/night/www/saas; #项目入口

  index index.html index.htm; #默认入口文件

  location / {
    try_files $uri $uri/ =404;
  }
}

# 创建一个软链接到 /etc/nginx/sites-enabled/ 目录下, 使配置文件生效
sudo ln -s /etc/nginx/sites-available/www.saas.gzlle.com /etc/nginx/sites-enabled/

# 重启nginx
sudo nginx -s reload
```

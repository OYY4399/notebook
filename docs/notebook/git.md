# git

## 1. 配置用户信息

```
git config --global user.name "name"
git config --global user.email "youremail@example.com"
```

## 2. 生成 SSH Key

```
ssh-keygen -t rsa -C "youremail@example.com"
```

## 3. push 到 github

```
git remote add origin git@github.com:OYY4399/react-study.git
git branch -M master
git push -u origin master
```

## 4. 查看 remote

```
git remote -v

origin  git@github.com:OYY4399/lework.git (fetch)
origin  git@github.com:OYY4399/lework.git (push)
```

## 5. 删除 remote

```
git remote remove origin
```
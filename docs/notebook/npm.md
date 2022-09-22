# npm

## 1. 初始化一个新项目

```
npm init
```

## 2. 安装依赖包

```
npm install [package]
npm install [package]@[version]
```

## 3. 全局安装依赖

```
npm install -g [package]
```

## 4. 将依赖项添加到不同依赖项类别中

```
npm install [package]
npm install [package] --save-dev
```

## 5. 移除依赖包

```
npm uninstall [package]
```

## 6. 安装项目的全部依赖

```
npm install
```

## 7. 登录 npm registry

```
npm login
```

## 8. 退出 npm registry

```
npm logout
```

## 9. 发布 npm 包

```
npm publish
```

## 10. 使用淘宝源

```
npm config set registry https://registry.npmmirror.com
npm get registry
```

## 11. 改回 npm 源

```
npm config set registry https://registry.npmjs.org
```

## 12. 撤回 npm 包

```
npm unpublish [package] --force
```

## 13. 查看全局 npm 包

```
npm list -g
```

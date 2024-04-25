<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-25 13:36:58
 * @Description: 
-->
# VitePress部署github用户站的坑

## 问题1

> 按照VitePress的部署文档，部署到github用户站点后，链接总是username github.io/username
> 

### 原因

仓库的名字应该是`username.github.io`，我错误地创建为只有`username`，`username`仓库用于在个人github页面`https://github.com/username`显示信息，通过使用其README文件

### 解决方案

将仓库名称更改为`username.github.io`

## 问题2

> 使用github actions部署到github页面时，显示403权限错误
> 

### 原因

GITHUB_TOKEN默认设置为只有读取权限，因此无法写入github页面

### 解决方案

在工作流中添加写入权限

```
permissions:
  contents: write

```
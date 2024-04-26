<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-26 20:22:03
 * @Description: 
-->
# 浏览器指纹调研

> 一些商业模型需要唯一的ID进行欺诈检测，在应用程序上这很有效，因为我们可以获取Android设备的Android ID和IOS设备的UUID。至于网站，没有这样的唯一ID，如果我们想在网站上获取唯一ID，这给我们带来了巨大的挑战。

## 流行的解决方案

目前，有两个主要的库可以为Web生成一个一致且唯一的ID，fingerprintjs和clientjs

这是[npm趋势](<https://npmtrends.com/@fingerprintjs/fingerprintjs-vs-clientjs>)的简要比较

![图片 1](<https://cdn.jsdelivr.net/gh/hank619/pictureRepo@main/markdown/40a967d2004d4defab3bef116ed72921baf6a4ae9d28ed4ab0a0a95fb7a435f0.png>)

## 商业考虑

- fingerprintjs只有v3及以下的版本对商业用途免费，它声称准确率为40%-60%，付费版本从每月99美元开始，更多详情，你可以查看[定价](<https://fingerprint.com/pricing/>)
- clientjs可以无限制地免费使用

## 一致性比较

| 测试案例                                |      clientjs      |   fingerprintjs v3 |
| --------------------------------------- | :----------------: | -----------------: |
| 浏览器升级                              |        :x:         | :white_check_mark: |
| 分屏                                    |        :x:         |                :x: |
| 隐身模式                                | :white_check_mark: | :white_check_mark: |
| 调整窗口大小                            | :white_check_mark: | :white_check_mark: |
| 开发工具 - 移动视图                     |        :x:         |                :x: |
| 开发工具 - 移动视图 - 更改模型          |        :x:         |                :x: |
| 卸载浏览器扩展                          | :white_check_mark: | :white_check_mark: |
| 从Chrome切换到Safari                    |        :x:         |                :x: |
| 新建标签                                | :white_check_mark: | :white_check_mark: |
| 手机-桌面站点                           |        :x:         | :white_check_mark: |
| 关闭并重新打开浏览器                    | :white_check_mark: | :white_check_mark: |
| 清除应用数据 - 没有Google账户登录       |        :x:         |                :x: |
| 清除应用数据 - 使用Google账户登录       | :white_check_mark: | :white_check_mark: |
| 卸载和重新安装应用 - 没有Google账户登录 |        :x:         |                :x: |
| 卸载和重新安装应用 - 使用Google账户登录 | :white_check_mark: | :white_check_mark: |

## 唯一性比较

| 测试案例   |      clientjs      |   fingerprintjs v3 |
| ---------- | :----------------: | -----------------: |
| 不同的设备 | :white_check_mark: | :white_check_mark: |

## 结论

- Fingerprintjs可能会达到宣布的40%-60%的准确率
- Fingerprintjs在两个更多的测试案例`浏览器升级`和`手机-桌面站点`上表现得更好，而其他案例保持不变
- 对于免费使用，如果准确率对我们来说是可以接受的，那么我们更倾向于选择fingerprintjs v3，否则，我们最好选择fingerprintjs的付费版本
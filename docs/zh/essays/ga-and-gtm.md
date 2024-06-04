<!--
 * @Author: Hong.Zhang
 * @Date: 2024-05-31 13:52:56
 * @Description: 
-->
# GA和GTM

## GA

GA现在最新版本用的是GA4，GA4和GTAG等价，指的是一回事

通过[gtag.js](https://www.googletagmanager.com/gtag/js)来埋点


## GTM

GTM是辅助管理GA的，可以用来给事件二次加工或者打标，然后再传给GA。

通过[gtm.js](https://www.googletagmanager.com/gtm.js)来埋点

 ### 核心概念

- Variable，定义一些用到的变量。
  - 如果想要记录platform，可以用自定义函数。如果想要记录
  - 如果想要记录userId等需要和业务交互的数据，可以通过dataLayer.push({}), 把信息push进去，然后在variable的variable type选择dataLayer，填入网页端传入的值
  - dataLayer仅仅是一个数组，是给GA和GTAG约定好使用的，自己在window上挂一个window.dataLayer=[]就好，GA和GTM自己知道去取
- Trigger，定义触发时机，比如click，page load等。
- Tag，定义事件名，关联Trigger来定义触发时机，关联Variable来定义自定义时间参数
  
### 数据流

页面启动时先去GTM拉取配置，看需要汇报那些东西，然后在对应的时机进行上报给GTM，GTM处理后传给GA。最终数据还是存放在ga里面的，gtm只是相当于是在ga前面做了一个过滤器。

GTM比较容易记录点击事件，配置一个Tag，关联click text即可，不用每个点击的地方都去埋一次

gtm也可以记录page_view，但是没有默认实现页面停留时长统计，要统计时长，最好还是用GA。所以如果既要click，又要page_view，需要在headScript里可以同时引入GA和GTM。GA不需要再另外配置measurementId






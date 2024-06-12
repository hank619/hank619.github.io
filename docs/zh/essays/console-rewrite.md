<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-12 09:32:24
 * @Description: 
-->
# Console重写

```javascript
(function() {
    // 保存原始的console.log
    const originalLog = console.log;

    // 自定义日志级别分类
    const LogLevel = {
        DEBUG: 'DEBUG',
        INFO: 'INFO',
        WARN: 'WARN',
        ERROR: 'ERROR'
    };

    function getFormattedTimestamp() {
        const now = new Date();
        return now.toISOString();
    }

    function customLog(level, ...args) {
        const timestamp = getFormattedTimestamp();
        const logPrefix = `[${timestamp}] [${level}]`;

        // TODO: 其他的日志处理逻辑，比如调用react-native-native-log进行native的日志输出
        // 调用原始的console.log方法
        originalLog.apply(console, [logPrefix, ...args]);
    }

    // 重写console.log
    console.log = function(...args) {
        customLog(LogLevel.DEBUG, ...args);
    };

    // 添加其他日志级别方法
    console.info = function(...args) {
        customLog(LogLevel.INFO, ...args);
    };

    console.warn = function(...args) {
        customLog(LogLevel.WARN, ...args);
    };

    console.error = function(...args) {
        customLog(LogLevel.ERROR, ...args);
    };
})();

// 测试重写的console.log功能
console.log('This is a debug message');   // DEBUG 级别日志
console.info('This is an info message');  // INFO 级别日志
console.warn('This is a warn message');   // WARN 级别日志
console.error('This is an error message');// ERROR 级别日志
```
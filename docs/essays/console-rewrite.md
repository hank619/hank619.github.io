<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-12 10:04:50
 * @Description: 
-->
# Console rewrite

```javascript
(function() {
    // Save the original console.log
    const originalLog = console.log;

    // Custom log level categories
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

        // TODO: Other log handling logic, such as calling react-native-native-log for native log output
        // Call the original console.log method
        originalLog.apply(console, [logPrefix, ...args]);
    }

    // Rewrite console.log
    console.log = function(...args) {
        customLog(LogLevel.DEBUG, ...args);
    };

    // Add other log level methods
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

// Test the rewritten console.log functionality
console.log('This is a debug message');   // DEBUG level log
console.info('This is an info message');  // INFO level log
console.warn('This is a warn message');   // WARN level log
console.error('This is an error message');// ERROR level log
```

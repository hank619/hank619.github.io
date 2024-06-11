<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-11 16:06:59
 * @Description: 
-->
# Objective-C基础

## 消息传递

Objective-C里，与其说对象互相调用方法，不如说对象之间互相传递消息更为精确。

``` objective-c
[obj method: argument];
```

## 字符串

双引号包裹，是常量。在代码中通常使用NSString来包装使用，通过@""来创建。

``` objective-c
NSString *str = @"Hello, World!";
```

## 类

### 声明

![类声明图](https://cdn.jsdelivr.net/gh/hank619/pictureRepo@main/markdown/9ff4bf66723689917dadbe2cdf19d1033eb19cd11fb0ca4e1729de21b4a25188.png)  

定义部分，清楚定义了类的名称、数据成员和方法。 以关键字@interface作为开始，@end作为结束。

``` objective-c
@interface MyObject : NSObject {
    int memberVar1; // 实体变量
    id  memberVar2;
}

+(return_type) class_method; // 类方法

-(return_type) instance_method1; // 实例方法
-(return_type) instance_method2: (int) p1;
-(return_type) instance_method3: (int) p1 andPar: (int) p2;
@end
```

### 实现

实现区块则包含了公开方法的实现，以及定义私有（private）变量及方法。 以关键字@implementation作为区块起头，@end结尾。

``` objective-c
@implementation MyObject {
  int memberVar3; // 私有变量
}

+(return_type) class_method {
    .... //method implementation
}
-(return_type) instance_method1 {
     ....
}
-(return_type) instance_method2: (int) p1 {
    ....
}
-(return_type) instance_method3: (int) p1 andPar: (int) p2 {
    ....
}
@end
```

### 创建对象

``` objective-c
MyObject * my = [[MyObject alloc] init];
// 或者
MyObject * my = [MyObject new];
```

## 方法

![方法图](https://cdn.jsdelivr.net/gh/hank619/pictureRepo@main/markdown/2674aa3bf806ce6324d0059cbbe64afe837cb970ca5f491a1eb8fb174ee8f792.png)  


## 属性

- 属性是用来替代实例变量的，自动定义了getter和setter函数。直接通过obj.xxx的方式来调用，其实是调用了getter或者setter函数，相当于是objective-c的语法糖
- 属性默认是公开（public）的，类的成员方法也默认是公开（public）的
- 属性默认具有的特性： `@property NSString *name;`等价于`@property (atomic, strong, readwrite) NSString *name;`
- 也可以直接使用实例变量，不用自己另外定义getter和setter，内部使用直接引用，外部使用用obj->xxx，不过不符合封装的原则，不推荐。

``` objective-c
@interface MyObject : NSObject {
    int memberVar1; // 实例变量
    id  memberVar2;
}

@property (nonatomic, assign) int memberVar1; // 属性
@property (nonatomic, retain) id memberVar2;  // 属性
@end
```

## 协议

类似于java的interface，用来定义需要实现的接口

``` objective-c
@protocol Locking
- (void)lock;
- (void)unlock;
@end
```

``` objective-c
@interface SomeClass : SomeSuperClass <Locking>
@end
```

## 动态类型

> id，类似于js的any

``` objective-c
- setMyValue:(id) foo;
- setMyValue:(id <aProtocol>) foo;
```
  

## pragma mark

用于xcode中显示文件方法时，更好的做分割，方便开发者查看

``` objective-c
#pragma mark - Public Methods
```

## 类别

> 类似于kotlin的扩展函数

使用 Category 的场景
1. 扩展现有类的功能：在不修改类的源代码的情况下，为类添加新方法。
2. 组织代码：将类的实现分隔到多个文件中，使代码更易于管理和阅读。
3. 私有方法：为类添加内部使用（私有）的方法，不暴露在公共 API 中。

::: code-group

``` objective-c [NSString+Reverse.h]
#import <Foundation/Foundation.h>

@interface NSString (Reverse)

- (NSString *)reverseString;

@end
```

``` objective-c [NSString+Reverse.m]
#import "NSString+Reverse.h"

@implementation NSString (Reverse)

- (NSString *)reverseString {
    NSUInteger length = [self length];
    NSMutableString *reversedString = [NSMutableString stringWithCapacity:length];
    
    for (NSInteger i = length - 1; i >= 0; i--) {
        unichar character = [self characterAtIndex:i];
        [reversedString appendFormat:@"%C", character];
    }
    
    return reversedString;
}

@end
```

``` objective-c [main.m]
#import <Foundation/Foundation.h>
#import "NSString+Reverse.h"

int main(int argc, char *argv[]) {
    @autoreleasepool {
        NSString *originalString = @"Hello, World!";
        NSString *reversedString = [originalString reverseString];
        NSLog(@"Original: %@", originalString);
        NSLog(@"Reversed: %@", reversedString);
    }
    return 0;
}
```
:::
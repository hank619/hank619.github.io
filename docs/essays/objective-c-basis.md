<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-11 17:56:03
 * @Description: 
-->
# Objective-C Basics

## Message Passing

In Objective-C, it's more accurate to say that objects pass messages to each other rather than directly calling methods on each other.

```objective-c
[obj method: argument];
```

## Strings

Strings in Objective-C are surrounded by double quotes and are considered constants. In code, we typically use `NSString` to work with strings, created using `@""`.

```objective-c
NSString *str = @"Hello, World!";
```

## Classes

### Declaration

The declaration section clearly defines the class name, data members, and methods. It starts with the `@interface` keyword and ends with `@end`.

```objective-c
@interface MyObject : NSObject {
    int memberVar1; // instance variable
    id  memberVar2;
}

+(return_type) class_method; // class method

-(return_type) instance_method1; // instance method
-(return_type) instance_method2: (int) p1;
-(return_type) instance_method3: (int) p1 andPar: (int) p2;
@end
```

### Implementation

The implementation section contains the implementation of public methods and the definition of private variables and methods. It starts with `@implementation` and ends with `@end`.

```objective-c
@implementation MyObject {
  int memberVar3; // private variable
}

+(return_type) class_method {
    .... // method implementation
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

### Object Creation

```objective-c
MyObject * my = [[MyObject alloc] init];
// or
MyObject * my = [MyObject new];
```

## Methods

![Method Diagram](https://cdn.jsdelivr.net/gh/hank619/pictureRepo@main/markdown/2674aa3bf806ce6324d0059cbbe64afe837cb970ca5f491a1eb8fb174ee8f792.png)

## Properties

- Properties replace instance variables and automatically generate getter and setter methods. Accessing a property like `obj.xxx` actually calls the getter or setter method, acting as Objective-C syntax sugar.
- Properties are by default public, and class member methods are also by default public.
- Default property attributes: `@property NSString *name;` is equivalent to `@property (atomic, strong, readwrite) NSString *name;`.
- Directly using instance variables is also possible without manually defining getters and setters, but it violates encapsulation principles and is not recommended.

```objective-c
@interface MyObject : NSObject {
    int memberVar1; // instance variable
    id  memberVar2;
}

@property (nonatomic, assign) int memberVar1; // property
@property (nonatomic, retain) id memberVar2;  // property
@end
```

## Protocols

Similar to Java interfaces, protocols define interfaces that need to be implemented.

```objective-c
@protocol Locking
- (void)lock;
- (void)unlock;
@end
```

```objective-c
@interface SomeClass : SomeSuperClass <Locking>
@end
```

## Dynamic Typing

> `id`, similar to `any` in JavaScript

```objective-c
- setMyValue:(id) foo;
- setMyValue:(id <aProtocol>) foo;
```

## pragma mark

Used in Xcode to better organize method sections for developers' convenience.

```objective-c
#pragma mark - Public Methods
```

## Categories

> Similar to Kotlin extension functions

Usage scenarios for Categories:
1. Extending the functionality of existing classes: Adding new methods to a class without modifying its source code.
2. Organizing code: Splitting class implementation into multiple files for better management and readability.
3. Private methods: Adding internal (private) methods to a class, not exposed in the public API.

::: code-group

```objective-c [NSString+Reverse.h]
#import <Foundation/Foundation.h>

@interface NSString (Reverse)

- (NSString *)reverseString;

@end
```

```objective-c [NSString+Reverse.m]
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

```objective-c [main.m]
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
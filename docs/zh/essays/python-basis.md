<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-11 11:31:45
 * @Description: 
-->
# Python基础

## 缩进

> Python 使用缩进（whitespace indentation）来定义代码块，而不是像大多数其他编程语言使用花括号 {} 来划分代码块

1. 一致性：一个代码块内的所有缩进字符必须一致，如所有都使用空格或所有都使用制表符（Tab）。推荐使用空格进行缩进。
2. 推荐缩进量：PEP 8（Python的官方代码风格指南）推荐使用 4 个空格来进行缩进。
3. 混合缩进：不能混合使用制表符和空格进行缩进。即一个代码块内不能同时存在制表符和空格。
  
## 变量

1. Python变量不需要显式定义，直接通过赋值语句创建。
2. 变量的作用域决定了其可见性和生命周期，Python遵循LEGB规则来查找变量。读取直接用就可以，修改需要使用global或者nonlocal关键字
3. 使用`global`和`nonlocal`关键字可以在局部作用域内修改全局和嵌套作用域的变量。


## 动态特性

变量类型可以动态改变，对象可以在运行时进行修改

## 命名规范

1. 变量名和函数名：
    - 使用小写字母，单词之间使用下划线分隔。
    - 示例：`variable_name`, function_name
2. 常量：
    - 使用全大写字母，单词之间使用下划线分隔。
    - 示例：`CONSTANT_NAME`
3. 类名：
    - 使用首字母大写的驼峰风格。
    - 示例：`ClassName`, MyClass

## 继承

> `class Child(Parent)`

abc.ABCMeta, 在 Python 中，`abc` 模块提供了内置的 ABCMeta 元类，用于定义抽象基类（Abstract Base Class）。抽象基类不能被实例化，通常用于定义接口。如果一个类使用 ABCMeta 作为元类，它可以包含抽象方法，子类必须实现这些抽象方法，否则会引发错误。

``` python
import abc

# 定义一个抽象基类
class Animal(metaclass=abc.ABCMeta):
    def __init__(self, name):
        self.name = name
    
    @abc.abstractmethod  # 定义一个抽象方法
    def speak(self):
        pass

# 尝试实例化抽象基类会引发错误
try:
    animal = Animal("Some animal")
except TypeError as e:
    print(e)  # Output: Can't instantiate abstract class Animal with abstract method speak

# 派生类，继承自抽象基类，必须实现抽象方法
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# 创建对象并调用方法
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!
```

## 函数参数

- 参数类型放在参数名后面，用冒号 : 隔开。
- 返回类型放在函数定义后面，用箭头 -> 指示。
- 返回类型与函数体之间用 : 隔开。

``` python
def greeting(name: str) -> str:
    return f"Hello, {name}"

print(greeting("Alice"))
```

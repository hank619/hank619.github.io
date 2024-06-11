<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-11 13:15:06
 * @Description: 
-->
# Python Basics

## Indentation

> Python uses indentation to define code blocks, instead of using curly braces {} like most other programming languages.

1. Consistency: All indentation characters within a code block must be consistent, either all spaces or all tabs. It is recommended to use spaces for indentation.
2. Recommended indentation level: PEP 8 (Python's official code style guide) recommends using 4 spaces for indentation.
3. Mixing indentation: Mixing tabs and spaces for indentation is not allowed within the same code block.

## Variables

1. Python variables do not need to be explicitly defined; they are created directly through assignment statements.
2. Variable scope determines its visibility and lifetime. Python follows the LEGB rule to search for variables. Reading can be done directly, but modification requires using the `global` or `nonlocal` keywords.
3. Using the `global` and `nonlocal` keywords allows modifying global and nested scope variables within local scope.

## Dynamic Nature

Variable types can change dynamically, and objects can be modified during runtime.

## Naming Conventions

1. Variable and function names:
    - Use lowercase letters with words separated by underscores.
    - Example: `variable_name`, `function_name`
2. Constants:
    - Use all uppercase letters with words separated by underscores.
    - Example: `CONSTANT_NAME`
3. Class names:
    - Use camel case style with the first letter capitalized.
    - Example: `ClassName`, `MyClass`

## Inheritance

> `class Child(Parent)`

In Python, `abc.ABCMeta` from the `abc` module provides a built-in metaclass for defining abstract base classes (ABCs). Abstract base classes cannot be instantiated and are typically used for defining interfaces. If a class uses `ABCMeta` as its metaclass, it can contain abstract methods that must be implemented by subclasses; otherwise, an error will be raised.

``` python
import abc

# Define an abstract base class
class Animal(metaclass=abc.ABCMeta):
    def __init__(self, name):
        self.name = name
    
    @abc.abstractmethod  # Define an abstract method
    def speak(self):
        pass

# Attempting to instantiate an abstract base class will raise an error
try:
    animal = Animal("Some animal")
except TypeError as e:
    print(e)  # Output: Can't instantiate abstract class Animal with abstract method speak

# Derived classes inheriting from the abstract base class must implement abstract methods
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Create objects and call methods
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!
```

## Function Parameters

- Parameter types are specified after the parameter name, separated by a colon :.
- Return types are specified after the function definition, indicated by an arrow ->.
- A colon : separates the return type from the function body.

``` python
def greeting(name: str) -> str:
    return f"Hello, {name}"

print(greeting("Alice"))
```
<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-23 09:30:49
 * @Description: 
-->
# Go语言基础

## 配置
下载安装go，并配置GOPATH，默认为`~/go`

GPPATH/bin为二进制执行文件，go install xxx的时候会安装到这个目录

GOPATH/pkg为拉取的三方库的源码所在的目录，go get xxx的时候会下载到这个目录

## go mod
类似于npm的package.json，go mod的配置文件为go.mod，位于项目根目录

go使用绝对路径导入包，而不是相对路径，所以go.mod中需要配置当前项目的module

```go
go mod init xxx
go mod tidy
go mod verify
go mod graph
```

```go
module github.com/user/project

go 1.16

require (
    github.com/sirupsen/logrus v1.8.0
    golang.org/x/tools v0.1.5
)
```

## 变量
```go
var x int
var x, y int
x := 123
x, y := 123, 456
```

## 函数定义

函数定义与使用

```go
func divide(a int, b int) (int, int) {
    quotient := a / b
    remainder := a % b
    return quotient, remainder
}

func main() {
    q, r := divide(9, 4)
    fmt.Println("quotient:", q, "remainder:", r)
}
```

定义函数类型

```go
type operation func(int, int) int
type Calculator struct {
    Operation operation
}
```

## 结构体
类似于java中的类，不过结构体中只声明属性，方法放到外部
```go
type Parent struct {
	Name string
}

func (p *Parent) SayHello() {
	print("hello world")
}

type Child struct {
	// 嵌入匿名字段
	*Parent
	// 嵌入命名字段
	newParent *Parent
}

func main() {
	child := Child{
		Parent:    &Parent{Name: "parent"},
		newParent: &Parent{Name: "newParent"},
	}
	print(child.Name)
	print(child.newParent.Name)
}
```

## 类型断言/类型声明

- 类型断言，类似于类型强转，运行时动态判断，如果类型不匹配，会触发运行时panic。主要用来将接口转换为具体类型

  ```go
  appImpl := a.App.(*commonApp.EchoAppImpl)
  ```

- 类型声明，也类似于类型强转，不过是编译时检查，如果类型不匹配，会编译报错。主要用来判断一个struct是否实现了某个接口
  
  ```go
  var _ app.App = (*commonApp.EchoAppImpl)(nil)
  ```

## 接口

类似于java中的接口，只声明方法

```go
type Parent interface {
    SayHello()
}

type Child struct {
    Name string
}

func (c *Child) SayHello() {
    print("hello world")
}

func main() {
    child := Child{Name: "child"}
    var parent Parent
    parent = &child
    parent.SayHello()
}
```

编译器检查接口实现

```go
var _ MyInterface = (*MyStruct)(nil)
```

## 条件判断

```go
if err := c.Bind(req); err != nil {
    // 处理错误
}
```

## 协程

类似于java中的线程，go中使用goroutine实现并发

```go
go func() {
    // 处理逻辑
}()
```

## 通道

用于协程的数据通信，可以设置缓冲区大小

读取通道消息时一定会阻塞当前协程，直到通道中有消息。发送通道消息时，看缓冲区大小，如果缓冲区，会阻塞当前发送协程，直到通道有空闲位置。不配置缓冲区大小，默认为0，一定会阻塞发送协程

```go
ch := make(chan int, 1)
go func() {
    ch <- 1
}()
```

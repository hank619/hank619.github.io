<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-23 19:43:43
 * @Description: 
-->
# Go Language Basics

## Configuration
Download and install Go, and set the GOPATH, which is by default `~/go`.

The `GOPATH/bin` is the directory where binary executable files are stored. When you run `go install xxx`, it will be installed in this directory.

The `GOPATH/pkg` is the directory where third-party library source code is located. When you run `go get xxx`, it will be downloaded to this directory.

## go mod
Similar to npm's `package.json`, the configuration file for go mod is `go.mod`, located at the project's root directory.

Go uses absolute paths to import packages, not relative paths, so the go.mod file needs to configure the current project's module.

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

## Variables
```go
var x int
var x, y int
x := 123
x, y := 123, 456
```

## Function Definition

Function definition and usage

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

Defining function types

```go
type operation func(int, int) int
type Calculator struct {
    Operation operation
}
```

## Structs
Similar to classes in Java, but in structs, only properties are declared, and methods are placed outside.

```go
type Parent struct {
	Name string
}

func (p *Parent) SayHello() {
	print("hello world")
}

type Child struct {
	// Embedding an anonymous field
	*Parent
	// Embedding a named field
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

## Type Assertion

Similar to typecasting

```go
appImpl := a.App.(*commonApp.EchoAppImpl)
```

## Interfaces

Similar to interfaces in Java, only method signatures are declared

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

Compiler checks interface implementation

```go
var _ MyInterface = (*MyStruct)(nil)
```

## Conditional Statements

```go
if err := c.Bind(req); err != nil {
    // Handle error
}
```

## Goroutines

Similar to threads in Java, Go uses goroutines to achieve concurrency

```go
go func() {
    // Handle logic
}()
```

## Channels

Used for data communication between goroutines, and can have a buffer size.

Reading from a channel will always block the current goroutine until there is a message in the channel. When sending a message to a channel, it checks the buffer size. If the buffer is full, it will block the current sending goroutine until the channel has available space. If no buffer size is specified, it defaults to 0, and will always block the sending goroutine.

```go
ch := make(chan int, 1)
go func() {
    ch <- 1
}()
```
```


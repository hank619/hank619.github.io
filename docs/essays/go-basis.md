# Go Language Basics

## Configuration
Download and install Go, and configure GOPATH, which defaults to `~/go`.

GPPATH/bin is the directory for binary executable files, and go install xxx will install to this directory.

GOPATH/pkg is the directory where the source code of third-party libraries is pulled, and go get xxx will download to this directory.

## go mod
Similar to npm's package.json, the go mod configuration file is go.mod, located in the project root directory.

Go uses absolute paths to import packages, not relative paths, so the current project's module needs to be configured in go.mod.

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

Define function types

```go
type operation func(int, int) int
type Calculator struct {
    Operation operation
}
```

## Structs
Similar to classes in Java, but structs only declare properties, and methods are placed outside
```go
type Parent struct {
	Name string
}

func (p *Parent) SayHello() {
	print("hello world")
}

type Child struct {
	// Embedded anonymous field
	*Parent
	// Embedded named field
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

## Type Assertion/Type Declaration

- Type assertion, similar to type casting, dynamically checks at runtime, and triggers a runtime panic if the types do not match. Mainly used to convert interfaces to specific types

  ```go
  appImpl := a.App.(*commonApp.EchoAppImpl)
  ```

- Type declaration, similar to type casting, but checked at compile time, and will compile an error if the types do not match. Mainly used to determine if a struct implements a specific interface
  
  ```go
  var _ app.App = (*commonApp.EchoAppImpl)(nil)
  ```

## Interfaces

Similar to interfaces in Java, only declare methods

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

Similar to threads in Java, goroutines are used in Go to achieve concurrency

```go
go func() {
    // Handle logic
}()
```

## Channels

Used for data communication between goroutines, can set buffer size

When reading from a channel, it will block the current goroutine until there is a message in the channel. When sending a message to a channel, it will check the buffer size. If the buffer is full, it will block the current sending goroutine until there is an empty position in the channel. If no buffer size is configured, the default is 0, and the sending goroutine will always be blocked.

```go
ch := make(chan int, 1)
go func() {
    ch <- 1
}()
```
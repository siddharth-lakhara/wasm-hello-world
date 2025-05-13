package main

import (
	"fmt"
)

//go:wasmexport hello
func hello() *byte {
	msg := "Hello, WebAssembly!"
	return &[]byte(msg)[0]
}

func main() {
	fmt.Println("Hello from Go files")
}

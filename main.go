package main

import (
	"fmt"
)

// Entry point for web assembly
// Function can be empty, but definition is required
func main() {
	fmt.Println("Hello from Go files")
}

// Compiler directive for golang compiler
// syntax: go:wasmexport <export-name>
//
//go:wasmexport hello
func hello() *byte {
	msg := "Hello, WebAssembly!"
	return &[]byte(msg)[0]
}

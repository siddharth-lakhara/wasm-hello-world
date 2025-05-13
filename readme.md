# Go's wasm (For go version 1.24 and up)
Compile WASM from go:
`GOOS=js GOARCH=wasm go build -o main.wasm main.go`

Copy go's wasm helper
`cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" .`

# TinyGo wasm
Compile to wasm
`tinygo build -o main.wasm -target wasm ./main.go`

Copy tiny go's WASM helper
`cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js .`


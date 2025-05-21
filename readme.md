# Hello Web assembly
Simple "hello world" project of web assembly. This is the demo repo for talk I did at work. <br />

## Running the demo
- Use any static file server to serve the root folder. For eg, if you are using python, use:
```
python -m http.server 8000
```
- Navigate to the server URL, for eg: `http://loicalhost:8000`
- Open the 'developer console', browser will automatically pause after wasm module initialisation
- play with the wasm intialisation

## Building this project
There are two ways to build:
### Using Go's wasm module (For go version 1.24 and up)
Compile WASM from go:
`GOOS=js GOARCH=wasm go build -o main.wasm main.go`

Copy go's wasm helper
`cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" .`

### Using TinyGo wasm
Compile to wasm
`tinygo build -o main.wasm -target wasm ./main.go`

Copy tiny go's WASM helper
`cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js .`


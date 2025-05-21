# Hello Web assembly
Simple "hello world" project of web assembly. This is the demo repo for talk I did at work. <br />

## Running the demo
- Use any static file server to serve the root folder. For eg, if you are using python, use:
```
python -m http.server 8000
```
- Navigate to the server URL, for eg: `http://localhost:8000`
- Open the 'developer console', browser will automatically pause after wasm module initialisation
- play with the wasm intialisation

## Building this project
There are two ways to build, both has similar steps:

### 1. Using Go's wasm module (For go version 1.24 and up)
1.1 Compile WASM from go:
```
GOOS=js GOARCH=wasm go build -o main.wasm main.go
```

1.2 Copy go's wasm helper
```
cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" .
```

### 2. Using TinyGo wasm
2.1 Compile to wasm
```
tinygo build -o main.wasm -target wasm ./main.go
```

2.2 Copy tiny go's WASM helper
```
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js .
```


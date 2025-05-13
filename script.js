async function run() {
    try {
        const go = new Go();
        const result = await WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject);
        go.run(result.instance);

        debugger

        const messagePtr = result.instance.exports.hello(); // Call the exported Go function
        const mem = new DataView(result.instance.exports.mem.buffer);
        let message = "";
        let i = messagePtr;
        while (mem.getUint8(i) !== 0) {
            message += String.fromCharCode(mem.getUint8(i));
            i++;
        }

        document.getElementById("output").textContent = message;

    } catch (e) {
        console.error("Error loading or running WebAssembly:", e);
    }
}

run();
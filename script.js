let editor = CodeMirror(document.getElementById("code"), {
    lineNumbers: true,
    mode: "text/html",
    theme: "default",
});

function runCode() {
    const code = editor.getValue();
    const output = document.getElementById('output');
    output.contentWindow.document.open();
    output.contentWindow.document.write(code);
    output.contentWindow.document.close();
}

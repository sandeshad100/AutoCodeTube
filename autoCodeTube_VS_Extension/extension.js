const vscode = require("vscode");

function activate(context) {
  console.log("AutoCodeTube extension is active!");

  let disposable = vscode.commands.registerCommand(
    "auto-code-test.startCodeTyping",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        // Replace this example code with your code simulation logic
        const codeToType = 'console.log("Hello, World!");';
        const position = new vscode.Position(0, 0); // Replace with the desired position

        // Function to insert characters with a typing effect
        async function typeCode() {
          const reversedCode = codeToType.split("").reverse().join("");
          for (let i = 0; i < codeToType.length; i++) {
            await editor.edit((editBuilder) => {
              editBuilder.insert(position, reversedCode[i]);
            });

            await sleep(100); // Adjust typing speed (in milliseconds)
          }
        }

        typeCode();
      }
    }
  );

  context.subscriptions.push(disposable);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

const fnPipe = require('./pipe');

const logGreetings = fnPipe([
    (name: string) => name.trim(),
    (name: string) => `Hello, ${name}`,
    console.log
]);

logGreetings("   Williams");

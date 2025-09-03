# Demo ts-ls Intellisence with CommonJS

Require https://github.com/typescript-language-server/typescript-language-server

1. Setup project

    From scratch (You can skip this and clone the repository instead):

    ``` shell
    mkdir demo_intellisence_commonjs
    cd demo_intellisence_commonjs
    npm init -y
    npm i --save-dev typescript @types/node
    npx tsc --init
    # Add "node" to compilerOptions.types in tsconfig.json
    # Write some code, with a least one internal CommonJS import
    ```

    From repository:

    ``` shell
    git clone https://github.com/bbergeron0/demo_intellisence_commonjs.git
    ```

2. Compile and test code

    ``` shell
    npx tsc
    node src/index.js
    ```
    
3. Test Intellisence features

    Make sure you're using the typescript language server. In your editor, put
    your pointer on `fnPipe` on the first line of `src/index.ts` and trigger the
    "find definition" intellisence action.
    
    The goal is to at least get a reference to `pipe.ts`, or ideally, `_pipe`.

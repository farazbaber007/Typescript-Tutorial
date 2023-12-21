// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” 


// First Save All Setting (by using ctrl+s or File Menu check (Autosave) )
// goto folder add index.ts (tsc --init) for created file tsconfig.json and for javascript file use (tsc)

let personName: string = "Faraz"
let message: string = `Hello ${personName}, would you learn typescript today?`

console.log(message);

// First Step: run tsc command (for update in typescript to javascript)
// 2nd step: to run command (node index.js)
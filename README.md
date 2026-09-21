# Smart Utility Toolkit

A collection of small Node.js utilities built using only core modules (process, http, fs, crypto) as part of Web Dev III Unit-1 lab assignment.

## Files

- `calculator.js` - CLI calculator using process.argv
- `modules/isEven.js` - custom module to check even numbers
- `modules/logger.js` - custom module for logging with timestamp
- `app.js` - uses isEven and logger modules
- `server.js` - basic HTTP server with multiple routes
- `fileManager.js` - file CRUD operations using fs module
- `dice.js` - random dice generator using crypto module

## How to Run

### Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

### Custom Modules Demo
```
node app.js
```

### HTTP Server
```
node server.js
```
Then visit:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact

### File Manager
```
node fileManager.js
```

### Dice Generator
```
node dice.js
```

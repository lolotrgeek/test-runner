# Test-Runner
Run tests from a directory by spawning separate processes for each.

## Usage
1. create a directory with the test file(s)

2. Add the following to the test file(s)
```
// If the test passed
console.log("Pass:", true)

// If the test failed
console.log("Pass:", false)


```
3. Setup `test.js`
```
const {Run} = require('test-runner')

let test_dir = "/path/to/test/dir/

Run(test_dir)

```
4. run tests
```
node test
```

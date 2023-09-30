// requestSync.js
const request = require('sync-request');
const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
function requestSync(url) {
    // write code to request url synchronously
    let startTime = new Date().getTime();

    let res = request('GET', url);

    let endTime = new Date().getTime();
    let executionTime = endTime - startTime;
    console.log(executionTime + " ms");
}
requestSync(url) // would print out the execution time
requestSync(url)
requestSync(url)
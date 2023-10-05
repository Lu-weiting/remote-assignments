// requestAsync.js
const https = require('https');
//
const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
function requestCallback(url, callback) {
    // write code to request url asynchronously
    let startTime = new Date().getTime();
    let options = {
        method: 'GET',
        hostname: 'ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com',
        port: 443,
        path: '/delay-clock',
    };

    let req = https.request(options, function (res) {
        res.on('data', function (chunk) {
        });
        res.on('end', function () {
            var endTime = new Date().getTime();
            var executionTime = endTime - startTime;
            callback(executionTime + " ms");
        });
    });
    req.end();
}
function requestPromise(url) {
    // write code to request url asynchronously with Promise
    return new Promise((resolve, reject) => {
        let startTime = new Date().getTime();
        let options = {
            method: 'GET',
            hostname: 'ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com',
            port: 443,
            path: '/delay-clock',
        };
        let req = https.request(options, function (res) {
            res.on('data', function (chunk) {
            });
            res.on('end', function () {
                var endTime = new Date().getTime();
                var executionTime = endTime - startTime;
                resolve(executionTime + " ms");
            });
        });
        req.end();
    });
}
async function requestAsyncAwait(url) {
    // write code to request url asynchronously
    // you should call requestPromise here and get the result usingasync/await.
    try{
        const result=await requestPromise(url);
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log);
requestAsyncAwait(url);
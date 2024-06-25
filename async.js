"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE: please run along with tsconfig file && run only 1 part Question at a time for better results :)
// 1.
function fetchGreeting() {
    setTimeout(() => {
        console.log("Hi Sir.");
    }, 2000);
}
fetchGreeting();
// 2.
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
// 3.
function fetchData() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Data Fetched Successfully!");
        }, 1000);
    });
}
fetchData();
// 4.
function fetchWithError() {
    return new Promise((resolve, reject) => (setTimeout(() => {
        if (Math.random() > 0.5) {
            console.log("Data fetched Successfully");
            resolve("");
        }
        else {
            console.log("Data fetch failed.");
            reject();
        }
    }, 1000)));
}
fetchWithError()
    .then(() => {
    console.log("Promise Resolved.");
})
    .catch(() => {
    console.log("Promise Rejected.");
});
// 5.
function fetchDataSequentially() {
    return new Promise((resolve, reject) => (setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Data fetched Susuccessfully");
        }
        else {
            reject("Data fetch failed");
        }
    }, 1000)));
}
function processData() {
    return new Promise((resolve, reject) => (setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Data processed susuccessfully");
        }
        else {
            reject("Data processing failed");
        }
    }, 1000)));
}
function executeSequentially() {
    fetchDataSequentially()
        .then((result) => {
        console.log(result);
        return processData();
    })
        .then(result => {
        console.log(result);
    })
        .catch(error => {
        console.log(error);
    });
}
executeSequentially();

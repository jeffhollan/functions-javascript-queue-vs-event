// Stack Overflow FTW: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
module.exports = function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
const initPromise = () => {
  return new Promise(function(res, rej) {
    res("intial message");
  })
}

const sleep = (time, message) => {
  return new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve(message);
       }, time)
    })
}

initPromise()
  .then((result) => {
    console.log(result);
    return sleep(5000, 'this will come after delay')
  })
  .then((result) => {
    console.log(result);
    return sleep(5000, 'this will come again after delay')
  }).then((result) => {
    console.log(result)
  });
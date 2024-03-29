"use strict";

const url = require('url');

function nodeza (req, res) {

    let data = '';

    if (req.method === 'POST') {
    req.on('data', function(chunk) {
      data += chunk.toString();
    });
  }
  else {
    res.writeHead(501);
    res.end();
  }
}


function index (req, res, urls) {
  let data = "Monitoring the following websites: \n \n" + urls.join("\n");

  res.end(data);
}



module.exports = function (urls) {

  return function (req, res) {
    let path = url.parse(req.url).pathname, filename;

    switch (path) {
      case '/':
        index(req, res, urls);
      break;
// 
    //   case '/nodeza':
        // nodeza(req, res);
    //   break;
// 
      default:
        res.writeHead(401);
        res.end();
    }
  };
};

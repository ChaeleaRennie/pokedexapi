const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student'] == 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Test Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student']== 'eevee'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Eevee",
          status: "Normal type",
          currentOccupation: "#133"
        }
        res.end(JSON.stringify(objToJson));
      }//student = eevee
      else if(params['student']== 'jolteon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Jolteon",
          status: "Electric Type",
          currentOccupation: "#135"
        }
        res.end(JSON.stringify(objToJson));
      }//student = jolteon
      else if(params['student']== 'vaporeon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Vaporeon",
          status: "Water Type",
          currentOccupation: "#134"
        }
        res.end(JSON.stringify(objToJson));
      }//student = vaporeon
      else if(params['student']== 'flareon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Flareon",
          status: "Fire type",
          currentOccupation: "#136"
        }
        res.end(JSON.stringify(objToJson));
      }//student = flareon
      else if(params['student']== 'leafeon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Leafeon",
          status: "Grass Type",
          currentOccupation: "#470"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leafeon
      else if(params['student']== 'glacion'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Glacion",
          status: "Ice Type",
          currentOccupation: "#471"
        }
        res.end(JSON.stringify(objToJson));
      }//student = glacion
      else if(params['student']== 'espeon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Espeon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = espeon
      else if(params['student']== 'umbreon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Umbreon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = umbreon
      else if(params['student']== 'sylveon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Sylveon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = sylvian
      // else if(params['student'] != 'leon'){
        else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

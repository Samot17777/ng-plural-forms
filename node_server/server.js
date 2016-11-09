var http = require('http');
var formidable = require('formidable');
var util = require('util');

var server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if(req.method.toLowerCase() == 'post') {
        processForm(req, res)
        return;
    }
    res.end();
});

function processForm (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, data){
        res.writeHead(200, {
            'content-type': 'text/plain'
        })
        var dataReturn = JSON.stringify({
            data:data
        });
        res.end(dataReturn);
        console.log('posted data:\n');
        console.log(dataReturn);
    });

}

var port = 3100;
server.listen(port);
console.log('Server listening on port ' + port);
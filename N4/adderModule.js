add = function(req, res, val){
var sum = String(parseInt(val.first)+parseInt(val.second));
res.writeHead(200,{'Content-Type':'text/html'});
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adder Output</title>
</head>
<body>
<h3>
The sum is: ${sum}
</h3>
</body>
</html>`);
return res.end();

}

exports.add =add;
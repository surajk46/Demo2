var exp=require('express');
var bp=require('body-parser');
var path=require('path')
var app=exp();
app.use(exp.static('scripts'))
app.use(bp.urlencoded({extended: false }));
//app.use(exp.static(path.join(__dirname,'public')));

//server configuration
app.use(exp.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/form.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:43};
  res.send(person);
});
app.listen(9000,function(){
    console.log("running on the 9000");
});
app.get('/*',function(req,res){
    res.send("<h1>No page</h1>");
});

/*
app.get('/getform',function(req,res){
    res.sendFile(__dirname+'/form.html')
})

app.post('/getDataTable',function(req,res){
    var na = req.body.N;
    var bd = req.body.B;
    var em = req.body.E;
    var qu = req.body.Q;
    a="<table border=1>";
    a+="<tr><td> Name </td><td>"+na+"</td></tr>";
    a+="<tr><td> BDATE </td><td>"+Date(bd)+"</td></tr>";
    a+="<tr><td> email </td><td>"+em+"</td></tr>";
    a+="<tr><td> QUALIFICATION </td><td>"+qu+"</td></tr>";
    a+="</table>"
    res.send(a);

})*/

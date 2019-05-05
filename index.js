var express = require("express");
const jsonFile = require("jsonFile")
const url = require("url")
const querystring = require("querystring")

var app = express();

var filePath = "config.json"

var port = 3000

jsonFile.readFile(filePath, function(err, obj){
	if(err) console.error(err)
	
	port = obj.port
	obj.api.forEach(function(element) {
		if(element.method == "GET"){
			app.get(element.path, function(req, res){
				console.log("-------------------")
				console.log(url.parse(req.url).pathname)
				console.log("Query :")
				console.log(req.query)
				console.log("-------------------")
				console.log(element.response.contentType)
				res.status(element.response.code)
				
				if(element.response.result != null){
					res.send(element.response.result)
				}
				else if(element.response.resultFile != null){
					res.sendFile(element.response.resultFile)
				}
				else{
					res.end()
				}
			})
		}
		if(element.method == "POST"){
			app.post(element.path, function(req, res){
				console.log("-------------------")
				console.log(url.parse(req.url).pathname)
				console.log("Query :")
				console.log(req.query)
				console.log("Body :")
				console.log(req.body)
				console.log("-------------------")
				res.status(element.response.code)
				res.append('Content-Type', element.response.contentType)
				
				if(element.response.result != null){
					res.send(element.response.result)
				}
				else if(element.response.resultFile != null){
					res.sendFile(element.response.resultFile)
				}
				else{
					res.end()
				}
			})
		}
	})
	
	
	app.listen(port, function(){
		console.log(`Server running at http://localhost:${port}/`)
	});
})

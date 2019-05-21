# FakeServer

# Install
npm install express
npm install jsonfile

# Documentation

- *port* : Port number
- *api* : Array of all method of your fake server
- *api.path* : The path to request your method
- *api.method* : Method to request (GET,POST,...)
- *api.response* : Response send when your sever receive a request
- *api.response.code* : Result code (200,400,404,...)
- *api.response.contentType* : The type of the response send by the server (text/plain, ...)
- *api.response.result* : Body send by the fake server as String
- *api.response.resultFile* : The complete path file that contains the response sending by the fake server (usefull for json for example)

# Run 
node index.js

# Log
The console give you some information about the request receive by your fake server (Path, Query, Body)

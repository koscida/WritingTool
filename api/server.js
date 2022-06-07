const express = require("express")
const app = express()
const cors = require("cors")
const path = require('node:path');

app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/public')));


app.get("/api", function(req, res) {
  res.send({"name": "Jane Doe"}) // Should be json format
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});


app.listen(3000, () => {
  console.log("App listening on port 3000")
})
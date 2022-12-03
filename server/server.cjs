const express = require("express")
const app = express()

app.get("/", (req, res) => {
    var jsonData = { name: "jeko", surname: "ergemlidze" }
    res.set({"Contenty-type":"application/json"})
    res.send(JSON.stringify(jsonData))
})

app.listen(3000)
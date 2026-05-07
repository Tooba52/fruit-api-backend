//index.js is the entry point as it is the first file that is run 
const port = 3000
const app = require(`./app`)



app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`)
})
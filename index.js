//index.js is the entry point as it is the first file that is run 
//import .env
require(`dotenv`).config()
//access port through env
const port = process.env.PORT
const app = require(`./app`)



app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`)
})
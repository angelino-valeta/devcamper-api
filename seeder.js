const fs = require("fs")
const Bootcamp = require("./models/Bootcamp")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")



// Load env vars
dotenv.config({ path: "./config/.env" })

// Connect to mongo DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true, 
  useFindAndModify: false,
  useUnifiedTopology: true,
})

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// Import data
const importData = async () =>{
  try{
    await Bootcamp.create(bootcamps)
    console.log("Data imported...".green.inverse)
    process.exit(1)
  }catch(err){
    console.error(err)
  }
}

// Delete data
const deleteData = async () => {
  try{
    await Bootcamp.deleteMany()
    console.log("Data Destroyed...".red.inverse)
    process.exit(1)
  }catch(err){
    console.error(err)
  }
}

if(process.argv[2] === "-i"){
  importData()
}else if(process.argv[2] === "-d"){
  deleteData()
}
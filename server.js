const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const connectDb = require("./config/db")
const errorHandler = require("./middleware/error")

// Route files
const bootcamps = require("./routes/bootcamps")

const app = express();

app.use(express.json())

// Load env vars
dotenv.config({ path: "config/.env" })


// Connect to database
connectDb();

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
  app.use(morgan("dev"))
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps)




// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold ))


process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${ err.message}`.red);
  // Close server and   exit process
  server.close(() => process.exit(1))
})

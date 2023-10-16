import express from "express";
import appRoute from "./routes/route.js";
import cors from "cors";
import multer from "multer";
// var cors = require('cors')
const app = express();
const port = 8000;



app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
// app.use(express.bodyParser({limit: '50mb'}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));
app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors());

// Configure multer to save uploaded files to a specific directory
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // You should create an 'uploads' directory in your project
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// // POST route to handle the uploaded file
// app.post('/upload', upload.single('image'), (req, res) => {
//   const file = req.file; // The uploaded file
//   console.log(file);
//   // Handle the file as needed (e.g., save it to the database, process it, etc.)
//   res.send('File uploaded successfully');
// });
app.use("/api", appRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//import package
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// DB connection
mongoose.connect(
	"mongodb+srv://raed:MtGXTVTQc1j3r0v9@cluster0.lfyij.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("DB failed with err - ", err);
});

//import routes
const productRoutes = require("./routes/product.routes");
const categoryRoutes = require("./routes/category.routes");
const authRoutes = require("./routes/auth.routes");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes middleware
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/auth", authRoutes);
//server listen
const port = 8000;
app.listen(port, () => {
	console.log(`it's working fine ${port}`);
});

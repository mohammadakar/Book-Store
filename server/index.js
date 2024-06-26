const express=require("express");
const dotenv=require("dotenv");
const mongodb=require("./DB");
const cors=require("cors");
const cookieParser=require("cookie-parser")
const path=require("path")
mongodb();
const app=express();
app.use(express.json());
app.use(cors({
    origin:['https://book-store-4lc1.onrender.com'],
    credentials: true
}));

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "connect-src 'self' http://localhost:3500");
    next();
});
app.use(cookieParser());
dotenv.config();

app.use('/api/auth',require("./routes/auth"))
app.use("/api/student",require("./routes/studentRoute"))
app.use("/api/book",require("./routes/bookRoute"))
app.use("/api",require('./routes/dashboardRoute'))
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
    });

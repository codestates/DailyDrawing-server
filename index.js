const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//미들웨어
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
    credentials: true,
  })
);

//라우트 분기

//응답 잘가는 지 확인
app.get("/", (req, res) => {
  res.send("server connected");
});

app.listen(process.env.SERVER_PORT, () => {
  "server start";
});

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
    methods: ["GET", "PATCH", "POST", "OPTIONS", "DELETE"],
    credentials: true,
  })
);

app.use("/image/get", express.static("uploads/images"));
app.use("/profile/get", express.static("uploads/profileImgs"));

//파일 업로드
const uploadImage = require("./middlewares/getImage");
const uploadProfileImg = require("./middlewares/profileImg");

//라우트 분기
const signRouter = require("./routes/sign");
const drawingRouter = require("./routes/drawing");
const likeRouter = require("./routes/like");
const commentsRouter = require("./routes/comments");
const tagRouter = require("./routes/tag");
const drawingsTags = require("./routes/drawingsTags");
const userRouter = require("./routes/user");
const searchRouter = require("./routes/search");

app.use("/sign", signRouter);
app.use("/drawing", drawingRouter);
app.use("/like", likeRouter);
app.use("/comments", commentsRouter);
app.use("/tag", tagRouter);
app.use("/drawingsTags", drawingsTags);
app.use("/user", userRouter);
app.use("/search", searchRouter);

//응답 잘가는 지 확인
app.get("/", (req, res) => {
  res.send("server connected");
});

app.listen(process.env.SERVER_PORT, () => {
  "server start";
});

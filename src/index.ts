import Express from "express";

const app = Express();
const router = require("./Router");

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
});

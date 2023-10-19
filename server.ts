import { port } from "./utils/params";

const express = require('express');
const app = express();


app.get('/', (_, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
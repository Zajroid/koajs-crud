import "dotenv/config";

import Koa from "koa";
import router from "./routers/router.js";

/* Setting the port to the environment variable PORT or 3000 if the environment variable is not set. */
const PORT = process.env.PORT || 3000;

/* Creating a new instance of the Koa class. */
const app = new Koa();

/* Using the router.routes() function to route the requests to the correct route. */
app.use(router.routes());

/* Listening to the port that we set in the environment variable PORT or 3000 if the environment
variable is not set. */
app.listen(PORT, (err) => {
  if (err) console.log(`[-] Error: ${err}`);

  console.log(`[+] Server been started: http://localhost:${PORT}`);
});

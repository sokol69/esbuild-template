const ESBuild = require("esbuild");

const config = require('./esbuild-config');

const PORT = process.env.PORT || 3000;

ESBuild.serve({
  servedir: config.outdir,
  port: PORT,
}, {
  ...config,
}).then(() => {
  console.log('server started on http://localhost:' + PORT);
}).catch((error) => {
  console.log(error);
})
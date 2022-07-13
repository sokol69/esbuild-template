const ESBuild = require("esbuild");

const config = require('./esbuild-config');

ESBuild.build(config).catch(console.log)
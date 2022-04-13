#!/usr/bin/env node

// require = require("esm")(module /*, options*/);
(await import("../lib/cli")).cli(process.argv);

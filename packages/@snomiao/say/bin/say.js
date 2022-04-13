#!/usr/bin/env node

// require = require("esm")(module /*, options*/);

import { default as cli } from "../lib/cli";
cli(process.argv);

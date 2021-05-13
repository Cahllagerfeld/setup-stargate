#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();

program
  .version("0.0.1")
  .description("sets up local stargate container")
  .parse(process.argv);

if (process.argv.length < 3) {
  program.outputHelp();
}

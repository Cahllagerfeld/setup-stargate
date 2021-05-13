#!/usr/bin/env node
import { Command } from "commander";
import { cliOptions } from "./options.interface";
import { setup } from "./setup";
const program = new Command();

program
  .version("0.0.1")
  .description("sets up local stargate container")
  .option("-u, --username <username>", "username for stargate", "cassandra")
  .option("-p, --password <password>", "password for stargate", "cassandra")
  .option(
    "-a, --auth-url <authurl>",
    "stargate Authurl",
    "http://localhost:8081/v1/auth"
  )
  .option(
    "-n, --namespace-url <namespaceurl>",
    "stargate namespaceurl",
    "http://localhost:8082/v2/schemas/namespaces"
  )
  .option("-k, --keyspace <keyspace>", "stargate keyspace to create")
  .parse(process.argv);

if (process.argv.length < 3) {
  program.outputHelp();
}

const cliOptionsRaw: any = program.opts();

const options: cliOptions = cliOptionsRaw;

setup(options);

export * from "./setup";
export * from "./options.interface";

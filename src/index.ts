#!/usr/bin/env node
import { Command } from "commander";
import { setDefaults, setupDefault } from "./setupDefault";
const program = new Command();

program.version("0.0.2").description("sets up local stargate container");

program
  .command("advanced")
  .alias("a")
  .description("Advanced Setup")
  .action(() => console.log("advanced"));

program
  .command("default <keyspace> [username] [password] [authUrl] [namespaceUrl]")
  .alias("d")
  .description("Default Setup")
  .action(async (keyspace, username, password, authUrl, namespaceUrl) => {
    const options = setDefaults(
      username,
      password,
      authUrl,
      namespaceUrl,
      keyspace
    );
    await setupDefault(options);
  });

program.parse(process.argv);

if (process.argv.length < 3) {
  program.outputHelp();
}

export * from "./setupDefault";
export * from "./options.interface";

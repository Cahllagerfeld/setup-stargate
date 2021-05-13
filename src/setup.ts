import axios from "axios";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { cliOptions } from "./options.interface";

export async function setup(options: cliOptions) {
  if (!options.keyspace)
    throw new Error(chalk.red("please define keyspace name"));
  clear();
  console.log(
    chalk.cyan(figlet.textSync("setup-stargate", { horizontalLayout: "full" }))
  );
  try {
    const response = await axios.post(options.authUrl, {
      username: options.username,
      password: options.password,
    });
    const token = response.data.authToken;

    await axios.post(
      options.namespaceUrl,
      {
        name: options.keyspace,
      },
      {
        headers: {
          "X-Cassandra-Token": token,
        },
      }
    );
    console.log(chalk.green("stargate initialized successfully"));
  } catch {
    console.log(chalk.red("couldn't create stargate namespace"));
  }
}

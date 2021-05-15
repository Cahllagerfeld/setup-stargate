import axios from "axios";
import chalk from "chalk";
import { setupStargateOptions } from "./options.interface";

export async function setupDefault(options: setupStargateOptions) {
  if (!options.keyspace) {
    console.log(chalk.red("please define keyspace name"));
    return;
  }
  try {
    console.log(chalk.cyan("Initialization started"));
    const response = await axios.post(options.authUrl, {
      username: options.username,
      password: options.password,
    });
    const token = response.data.authToken;
    console.log(chalk.cyan("Authentication successfull"));
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
    console.log(
      chalk.green(
        `stargate for keyspace ${options.keyspace} initialized successfully`
      )
    );
  } catch {
    console.log(chalk.red("couldn't create stargate namespace"));
  }
}

export function setDefaults(
  username: string | undefined,
  password: string | undefined,
  authUrl: string | undefined,
  namespaceUrl: string | undefined,
  keyspace: string
): setupStargateOptions {
  return {
    username: username ? username : "cassandra",
    password: password ? password : "cassandra",
    authUrl: authUrl ? authUrl : "http://localhost:8081/v1/auth",
    namespaceUrl: namespaceUrl
      ? namespaceUrl
      : "http://localhost:8082/v2/schemas/namespaces",
    keyspace: keyspace,
  } as setupStargateOptions;
}

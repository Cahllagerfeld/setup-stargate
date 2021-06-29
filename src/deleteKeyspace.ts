import axios from 'axios';
import chalk from 'chalk';
import { StargateOptions } from './options.interface';

export async function deleteKeyspace(options: StargateOptions) {
  if (!options.keyspace) {
    console.log(chalk.red('please define keyspace name'));
    return;
  }
  try {
    console.log(chalk.cyan('Initialization started'));
    const response = await axios.post(options.authUrl, {
      username: options.username,
      password: options.password,
    });
    const token = response.data.authToken;
    console.log(chalk.cyan('Authentication successfull'));
    await axios.delete(`${options.namespaceUrl}/${options.keyspace}`, {
      headers: {
        'X-Cassandra-Token': token,
      },
    });
    console.log(chalk.green(`stargate for keyspace ${options.keyspace} deleted successfully`));
  } catch {
    console.log(chalk.red("couldn't delete stargate namespace"));
  }
}

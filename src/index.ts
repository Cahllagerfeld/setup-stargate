#!/usr/bin/env node
import chalk from 'chalk';
import { Command } from 'commander';
import clear from 'clear';
import figlet from 'figlet';
import { setDefaults, setupDefault } from './setupDefault';
import { setupAdvanced } from './setupAdvanced';
const program = new Command();

clear();
console.log(chalk.cyan(figlet.textSync('setup-stargate', { horizontalLayout: 'full' })));
program.version('0.0.2').description('sets up local stargate container');

program
  .command('advanced')
  .alias('a')
  .description('Advanced Setup')
  .action(async () => {
    await setupAdvanced();
  });

program
  .command('default <keyspace> [username] [password] [authUrl] [namespaceUrl]')
  .alias('d')
  .description('Default Setup')
  .action(async (keyspace, username, password, authUrl, namespaceUrl) => {
    const options = setDefaults(username, password, authUrl, namespaceUrl, keyspace);
    await setupDefault(options);
  });

program.parse(process.argv);

if (process.argv.length < 3) {
  program.outputHelp();
}

export * from './setupDefault';
export * from './options.interface';

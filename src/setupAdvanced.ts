import inquirer from 'inquirer';
import { questions } from './inquirer';
import { setupStargateOptions } from './options.interface';
import { setupDefault } from './setupDefault';

export async function setupAdvanced(): Promise<void> {
  const answersRaw: any = await inquirer.prompt(questions);
  const answers: setupStargateOptions = answersRaw;
  await setupDefault(answers);
}

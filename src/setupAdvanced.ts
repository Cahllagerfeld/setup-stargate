import inquirer from 'inquirer';
import { questions } from './inquirer';
import { StargateOptions } from './options.interface';
import { setupDefault } from './setupDefault';

export async function setupAdvanced(): Promise<void> {
  const answersRaw: any = await inquirer.prompt(questions);
  const answers: StargateOptions = answersRaw;
  await setupDefault(answers);
}

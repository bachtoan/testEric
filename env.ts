import {Environment} from '@/const/App.enum';

export const env: TEnv = {
  environment: Environment.Product,
  [Environment.Dev]: {
    Media: 'https://media.dev.monkeyuni.net/',
  },
  [Environment.Staging]: {
    Media: 'https://media.monkeyuni.net/',
  },
  [Environment.Product]: {
    Media: 'https://media.monkeyuni.net/',
  },
};

type TEnv = {
  environment: Environment;
  [Environment.Dev]: Record<string, any>;
  [Environment.Staging]: Record<string, any>;
  [Environment.Product]: Record<string, any>;
};

import {Environment} from '@/const/App.enum';

export const env: TEnv = {
  environment: Environment.Product,
  [Environment.Dev]: {
    Profile: 'https://rickandmortyapi.com/api/',
  },
  [Environment.Staging]: {
    Profile: 'https://rickandmortyapi.com/api/',
  },
  [Environment.Product]: {
    Profile: 'https://rickandmortyapi.com/api/',
  },
};

type TEnv = {
  environment: Environment;
  [Environment.Dev]: Record<string, any>;
  [Environment.Staging]: Record<string, any>;
  [Environment.Product]: Record<string, any>;
};

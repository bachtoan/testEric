import {env, getCurrentEnvironment} from '../../env';

const environment = getCurrentEnvironment();

export const urls = {
  urlProfile: env[environment].Profile,
};

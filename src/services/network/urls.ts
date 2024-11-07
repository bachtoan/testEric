import {env} from '../../../env';

const environment = 'dev';

export const urls = {
  urlProfile: env[environment].Profile,
};

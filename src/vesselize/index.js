import { createVesselize } from '@vesselize/vue';
import Constants from './config/constants';
import UserAPI from './api/UserAPI';
import UserService from './services/UserService';
import AuthService from './services/AuthService';

const providers = [
  { token: 'UserAPI', useClass: UserAPI },
  { token: 'UserService', useClass: UserService },
  {
    token: 'AuthService',
    useFactory() {
      const maxAdminUserId = 1;

      return new AuthService(maxAdminUserId);
    },
  },
  {
    token: 'AppConstants',
    useValue: Constants,
  },
];

const vesselize = createVesselize({
  providers,
});

export default vesselize;

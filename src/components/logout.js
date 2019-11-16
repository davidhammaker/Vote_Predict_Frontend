import Utils from './utils/generalUtils';
import { unsetCookie } from './utils/cookieFunctions';


export default function Logout() {
  unsetCookie('token');
  Utils.navigateTo('/');
}

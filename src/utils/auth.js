import Cookies from 'js-cookie';

/**
 * @param {string} TokenKey
 * Admin-Token: 登录请求的Token
 */
export function getToken(TokenKey) {
  return Cookies.get(TokenKey);
}

export function setToken(TokenKey, token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey);
}
/**
 *
 * @param {string} sessionKey
 * seesingKey操作
 */
export function getSession(sessionKey) {
  return sessionStorage.getItem(sessionKey);
}

export function setSession(sessionKey, sessionValue) {
  sessionStorage.setItem(sessionKey, sessionValue);
}

export function removeSession(sessionKey) {
  sessionStorage.removeItem(sessionKey);
}

export function clearSession() {
  sessionStorage.clear();
}


export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_STORED);
};

export const setAccessToken = (access_token) => {
  return localStorage.setItem(ACCESS_TOKEN_STORED, access_token);
};

export const removeAccessToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN_STORED);
};

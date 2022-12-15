/*
 * Base is the default environment.
 */
let baseApi;

if (process.env.NODE_ENV === 'production') {
  baseApi = window.location.origin;
} else {
  baseApi = process.env.REACT_APP_BASE_URL;
}

export const baseURL = baseApi;

export const baseEnv = {
  api: {
    getPosts: `${baseApi}/posts`,
  },
};

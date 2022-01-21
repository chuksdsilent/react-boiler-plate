import axios from "axios";

const BASE_URL = process.env.REACT_APP_DEV_BASE_URL;
const PHOTO_URL = process.env.REACT_APP_PHOTO_URL;

const post = (path, data) => {
  const new_url = `${BASE_URL}/${path}`;
  console.log(new_url);
  return axios.post(new_url, data || {});
};

/**
 *
 * @param {string} path
 * @returns {Observable<any>}
 */
const get = (path, token) => {
  const new_url = `${BASE_URL}${path}`;
  return axios.get(new_url, token || {});
};

/**
 *
 * @param {string} path
 * @param data
 * @returns {Observable<any>}
 */
const put = (path, data) => {
  const url = `${BASE_URL}${path}`;
  return axios.patch(url, data);
};

const single = (path) => {
  const new_url = `${BASE_URL}${path}`;
  return axios.get(new_url);
};

/**
 *
 * @param path
 * @param data
 */
const deletes = (path) => {
  const url = `${BASE_URL}${path}`;
  // const url = `${path}`;
  return axios.delete(url);
};

/**
 *
 * @param {string} path
 * @returns {Observable<any>}
 */
const getAll = (path) => {
  const new_url = `${BASE_URL}${path}`;
  return axios.get(new_url);
};

/**
 *
 * @param {string} path
 * @returns {Observable<any>}
 */
const photo = (path) => {
  const new_url = `${PHOTO_URL}${path}`;
  return new_url;
};

const publish = (id) => {
  const new_url = `${BASE_URL}${id}`;
  return axios.patch(new_url);
};

const RequestHandler = {
  post,
  get,
  getAll,
  publish,
  deletes,
  single,
  put,
  photo,
};
export default RequestHandler;

import sendRequest from './send-request';

const BASE_URL = '/api/packages';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addToProfile(packages) {
  console.log(packages)
  return sendRequest(`${BASE_URL}/addOrder`, 'POST', packages)
}
const BASE_URL = '/api/hurstons';

export function create(hurston) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(hurston)
  }).then(res => res.json());
}

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}
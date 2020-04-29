const ROOT_URL = 'https://wagon-garage-api.herokuapp.com/skibiak/cars';
const VIEW_URL = 'https://wagon-garage-api.herokuapp.com/cars';

export const FETCH_CARS = 'FETCH_CARS';
export const POST_CAR = 'POST_CAR';
export const VIEW_CAR = 'VIEW_CAR';

export function fetchCars() {
  const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function postCar(body) {
  const request = fetch(`${ROOT_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  return {
    type: POST_CAR,
    payload: request
  };
}

export function viewCar(id) {
  const promise = fetch(`${VIEW_URL}/${id}`)
    .then(response => response.json());
  return {
    type: VIEW_CAR,
    payload: promise
  }
}

// export function createPost(body, callback) {
// export function createPost(body) {
//   const request = fetch(`${ROOT_URL}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body)
//   }).then(response => response.json())
//     // .then(callback);

//   return {
//     type: POST_CAR,
//     payload: request
//   };
// }

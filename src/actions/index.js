const ROOT_URL = 'https://wagon-garage-api.herokuapp.com/skibiak/cars';

export const FETCH_CARS = 'FETCH_CARS';
// export const POST_CAR = 'POST_CAR';
// export const POST_CREATED = 'POST_CREATED';

export function fetchCars() {
  const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

// export function fetchPost(id) {
//   const promise = fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
//   .then(response => response.json());

//   return {
//     type: FETCH_POST,
//     payload: promise
//   };
// }

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

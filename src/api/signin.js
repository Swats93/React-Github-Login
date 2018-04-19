export function login(data) {

  console.log("successfully in api");

  const user = data;

  if (user) {
    return Promise.resolve(user);
  } else {
    return Promise.reject({err: 'User invalid'})
  }

}
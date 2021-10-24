const API_URL = "http://localhost:3333/cars";

const http = {
  get: async () => await fetch(API_URL),
};

const fetchData = async (method, params) => {
  const response = await http[method](params);
  if (response.status === 200) {
    const json = await response.json();
    return json;
  } else {
    return new Error(response.message);
  }
};

export const API = {
  getAllCars: () => fetchData("get"),
};

const API_URL = "http://localhost:3333/cars";

async function doFetch(params) {
  return await fetch(API_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...params,
  });
}

const fetchData = async (params) => {
  const response = await doFetch(params);
  const json = await response.json();
  if (response.status === 200) {
    return json;
  } else {
    throw new Error(json.message);
  }
};

export const API = {
  getAllCars: () => fetchData({ method: "get" }),
  createCar: (car) => fetchData({ method: "post", body: JSON.stringify(car) }),
};

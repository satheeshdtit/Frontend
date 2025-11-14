import axios from "axios";

const propertyUrl = import.meta.env.VITE_PROPERTY_BASE_URL;
const carUrl = import.meta.env.VITE_FOURWHEELER_BASE_URL;
const bikeUrl = import.meta.env.VITE_TWOWHEELER_BASE_URL;


export const getProperties = async () => {
  const response = await axios.get(propertyUrl);
  return response.data?.properties || [];
};

export const getCars = async () => {
  const response = await axios.get(carUrl);
  return response.data || [];
};


export const getBikes = async () => {
  const response = await axios.get(bikeUrl);
  return response.data || [];
};


export const getAllListings = async () => {
  const [properties, cars, bikes] = await Promise.all([
    getProperties(),
    getCars(),
    getBikes(),
  ]);

  return { properties, cars, bikes };
};

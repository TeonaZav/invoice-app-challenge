const URL = "https://countriesnow.space/api/v0.1/countries";

export const getCountries = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

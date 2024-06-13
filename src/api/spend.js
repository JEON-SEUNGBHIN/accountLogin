import axios from "axios";

const JSON_SERVER = "http://localhost:5110";

export const getSpends = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER}/spends`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("에러 발생");
  }
};

export const getSpend = async ({ queryKey }) => {
  try {
    const response = await axios.get(`${JSON_SERVER}/spends/${queryKey[1]}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching spend:", error);
    throw error;
  }
};

export const postSpends = async (newSpends) => {
  try {
    const response = await axios.post(`${JSON_SERVER}/spends`, newSpends);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("에러 발생");
  }
};

export const putSpend = async (updatedSpend) => {
  const { id, ...rest } = updatedSpend;
  try {
    const response = await axios.put(`${JSON_SERVER}/spends/${id}`, rest);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("에러 발생");
  }
};

export const deleteSpend = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER}/spends/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("에러 발생");
  }
};

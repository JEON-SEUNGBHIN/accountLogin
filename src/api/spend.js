import axios from "axios";

const JSON_SERVER = "http://localhost:5110";

export const getSpends = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER}/spends`);
    return response.data;
  } catch (error) {
    console.log(err);
    alert("에러 발생");
  }
};

export const postSpends = async (newSpends) => {
  try {
    const response = await axios.post(`${JSON_SERVER}/spends`, newSpends);
    return response.data;
  } catch (error) {
    console.log(err);
    alert("에러 발생");
  }
};

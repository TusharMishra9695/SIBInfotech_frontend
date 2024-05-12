import axios from "axios";
export async function getAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log("some thing went wrong", e);
  }
}

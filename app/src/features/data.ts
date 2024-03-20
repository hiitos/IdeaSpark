import { httpsCallable } from "firebase/functions";
import { functions } from "../service/firebase";

export const fetchTest = async (params:string) => {
  try {
    const callFunction = httpsCallable(functions, "test_handler");
    const result = await callFunction({ params: params});
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
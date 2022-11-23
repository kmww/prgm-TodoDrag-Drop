import { API_END_POINT } from "../../constants.js";

export const request = async (url, options) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("API 호출 실패");
    }

    return await res.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

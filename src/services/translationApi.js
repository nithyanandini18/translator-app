export async function translateText(text, sourceLang, targetLang) {
  if (!text || !text.trim()) {
    throw new Error("Please enter some text to translate.");
  }

  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost = import.meta.env.VITE_RAPIDAPI_HOST || "text-translator2.p.rapidapi.com";

  if (!apiKey || apiKey === "your_rapidapi_key_here" || apiKey.trim() === "") {
    throw new Error("RapidAPI key is not configured. Please add your VITE_RAPIDAPI_KEY in the .env file.");
  }

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", sourceLang);
  encodedParams.append("target_language", targetLang);
  encodedParams.append("text", text);

  try {
    const response = await fetch(`https://${apiHost}/translate`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-key": apiKey.trim(),
        "x-rapidapi-host": apiHost
      },
      body: encodedParams
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error("Authentication failed. Please verify that your RapidAPI key is valid in the .env file.");
      }
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Too many requests. Please wait a moment before trying again.");
      }
      if (response.status >= 500) {
        throw new Error("Translation service server is temporarily unavailable. Please try again later.");
      }
      throw new Error("Translation failed. Please try again.");
    }

    const data = await response.json();

    if (data?.data?.translatedText) {
      return data.data.translatedText;
    } else if (typeof data?.translatedText === "string") {
      return data.translatedText;
    } else if (data?.result?.translatedText) {
      return data.result.translatedText;
    } else {
      throw new Error("Translation failed. Please try again.");
    }
  } catch (err) {
    if (err.name === "TypeError" && err.message.includes("fetch")) {
      throw new Error("Network error. Please check your internet connection.");
    }
    throw err;
  }
}

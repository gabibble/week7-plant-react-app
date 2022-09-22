import React from "react";

export const imageSearch = async (keyword: string) => {

let pexelsApiKey = "563492ad6f91700001000001b62a330ce3614d619ebfc4f1d44c1cf3";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;


const response = await fetch(pexelsApiUrl, {
        method: "GET",
        headers: {'Authorization': `Bearer ${pexelsApiKey}` }
    })

    if (!response.ok) {
      throw new Error("Failed to fetch data from server");
    }

    let data = await response.json()

    return data.photos[0].url
}


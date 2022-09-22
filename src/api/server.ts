let token = `2d729023e09c79896b8608ffd365cec01bd63a8904e9ec60`;

export const serverCalls = {
    //function to get all plants
    get: async () => {
        const response = await fetch(`https://houseplant.herokuapp.com/api/plants`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer ${token}`,
            }
        })

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        return await response.json()
    }, 
    // add a new plant
    create: async (data: any) => {
        const response = await fetch(
        `https://houseplant.herokuapp.com/api/plants`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "x-access-token": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        }
        );

        if (!response.ok) {
        throw new Error("Failed to Create new data on server");
        }

        return await response.json();
    },
    //function to add existing plant
    update: async (id: string, data: any = {}) => {
        const response = await fetch(
        `https://houseplant.herokuapp.com/api/plants${id}`,
         {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "x-access-token": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        }
        );

    },
    //function to delete
    delete: async (id: string) => {
        const response = await fetch(
            `https://houseplant.herokuapp.com/api/plants${id}`,
            {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer ${token}`,
            },
            }
        );
    },
}





// https://houseplant.herokuapp.com/api/plants
// https://houseplant.herokuapp.com/api/plants
// https://houseplant.herokuapp.com/api/plants/JFCmW9hY7pc3hnQts7wJfFpi25e-qKAnz8Yt-jGWc8A
// https://houseplant.herokuapp.com/api/plants/JFCmW9hY7pc3hnQts7wJfFpi25e-qKAnz8Yt-jGWc8A
// https://rangers-drones.herokuapp.com/api/plants/XjTaE3DSZlxVTdZeKez83VV_VSV48Dqt7SHwOUQhH9M
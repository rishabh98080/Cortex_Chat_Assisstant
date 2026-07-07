const BASE_URL = "http://localhost:5000";

export async function sendMessage(message, image = null) {

    const formData = new FormData();

    formData.append("message", message);

    if (image) {
        formData.append("image", image);
    }

    // Debug
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }

    const response = await fetch(
        `${BASE_URL}/api/chat`,
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    if (!response.ok)
        throw new Error(data.message);

    return data;
}
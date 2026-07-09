const apiUrl = "https://0zsg79dge3.execute-api.us-east-1.amazonaws.com/prod/visitors";

async function getVisitorCount() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch visitor count");
        }

        const data = await response.json();

        document.getElementById("counter").textContent = data.visitors;

    } catch (error) {
        console.error(error);
        document.getElementById("counter").textContent = "Error";
    }
}

getVisitorCount();
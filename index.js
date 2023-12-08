document.addEventListener("DOMContentLoaded", function() {
    // Funktion, um ein zufälliges Happy-Birthday-GIF von Tenor zu laden
    function loadRandomGif() {
        const apiKey = "AIzaSyCv4aFPI73hfqnLaX34DmUXO-Bd0lalE14"; // Ersetze dies durch deinen Tenor API-Schlüssel
        const url = `https://api.tenor.com/v1/random?q=happy+birthday&key=${apiKey}&limit=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const gifUrl = data.results[0]?.media[0]?.gif.url;
                if (gifUrl) {
                    const happyBirthdayImage = document.getElementById("happyBirthdayImage");
                    happyBirthdayImage.src = gifUrl;
                }
            })
            .catch(error => console.error("Error fetching GIF:", error));
    }

    // Laden eines zufälligen GIFs beim Laden der Seite
    loadRandomGif();
});

const form = document.getElementById("musicForm");
const savedData = document.getElementById("savedData");

function tampilkanData() {
    const data = JSON.parse(localStorage.getItem("musicRecommendation"));

    if (data) {
        savedData.style.display = "block";

        savedData.innerHTML = `
            <h3>Rekomendasi Lagu Tersimpan</h3>
            <p><strong>Nama:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Judul Lagu:</strong> ${data.song}</p>
            <p><strong>Penyanyi:</strong> ${data.artist}</p>
            <p><strong>Genre:</strong> ${data.genre}</p>
            <p><strong>Alasan:</strong> ${data.reason}</p>
        `;

        document.getElementById("name").value = data.name;
        document.getElementById("email").value = data.email;
        document.getElementById("song").value = data.song;
        document.getElementById("artist").value = data.artist;
        document.getElementById("genre").value = data.genre;
        document.getElementById("reason").value = data.reason;
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        song: document.getElementById("song").value,
        artist: document.getElementById("artist").value,
        genre: document.getElementById("genre").value,
        reason: document.getElementById("reason").value
    };

    localStorage.setItem("musicRecommendation", JSON.stringify(data));

    alert("Rekomendasi berhasil disimpan!");

    tampilkanData();
});

window.onload = tampilkanData;
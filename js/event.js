function tampil(b) {
    a = document.querySelector("p").innerText = "Belajar event js " + b;
    // a.innerText = "Belajar event js";
    console.log("Belajar event js");
}

judul.onclick = function () {
    document.querySelector(".isi").innerHTML = "Belajar event js menggunakan id";
}
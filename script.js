// Fungsi untuk menampilkan detail mobil di modal
function showDetail(title, description, image) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal-img").src = image;
  document.getElementById("modal").style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

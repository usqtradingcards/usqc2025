document.getElementById("download-btn")
    .addEventListener("click", makeAndDownload);

document.getElementById("refresh-image")
  .addEventListener("click", clickRefreshImage);

document.getElementById("reset-btn")
  .addEventListener("click", resetForm);

document.getElementById("input-type")
  .addEventListener("change", cardTypeChanged);

document.getElementById("show-trim-line")
  .addEventListener("change", trimLineToggled);

document.getElementById("left-right")
  .addEventListener("change", adjustBackground);

document.getElementById("top-down")
  .addEventListener("change", adjustBackground);

document.getElementById("zoom")
  .addEventListener("change", adjustBackground);

function sanitize(input) {
  return input.replace(/[<>'"]/g, '');  // Remove <, >, ', ", /
}
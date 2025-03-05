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

document.getElementById("rotate")
  .addEventListener("change", adjustRotate);

document.getElementById("left-right-num")
  .addEventListener("input", adjustBackgroundNum);

document.getElementById("top-bottom-num")
  .addEventListener("input", adjustBackgroundNum);

document.getElementById("zoom-num")
  .addEventListener("input", adjustBackgroundNum);

function sanitize(input) {
  return input.replace(/[<>'"]/g, '');  // Remove <, >, ', ", /
}
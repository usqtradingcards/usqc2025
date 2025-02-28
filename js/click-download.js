function makeAndDownload() {
  // Use html2canvas to capture the div
  html2canvas(document.getElementById("card"), {
    allowTaint: false,
    useCORS: true,
    logging: true

  }).then(function(canvas) {
    // Convert the canvas to a data URL (image format)
    var imgData = canvas.toDataURL("image/png");

    // Create an anchor element to trigger the download
    var link = document.createElement('a');
    link.href = imgData;
    link.download = "card-image.png"; // Set the filename for the image
    link.click(); // Trigger the download
  })
}
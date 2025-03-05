function makeAndDownload() {
  const card = document.getElementById("card");
  html2canvas(card, {
    useCORS: true
  }).then(function(canvas) {
    const imageData = canvas.toDataURL('image/png');
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "card.png";
    link.click();
  })
}
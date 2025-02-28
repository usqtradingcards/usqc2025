function resetForm() {
  $('#card-type').empty()
  $('#card-options').empty()

  $('#card-type')
    .append($('<label>', { for: "input-type", text: "Card Type: " }))
  $('#card-type')
    .append($('<select>', {id: "input-type"}))
  $('#input-type')
    .append($('<option>', { value: "", text: "Select an option",
      selected: true, disabled: true }))
  $('#input-type')
    .append($('<option>', { value: "player", text: "Player Card" }))
  $('#input-type')
    .append($('<option>', { value: "rare", text: "Rare Card" }))
  $('#input-type')
    .append($('<option>', { value: "staff", text: "Tournament Staff Card" }))
  document.getElementById("input-type")
    .addEventListener("change", cardTypeChanged);
}
function resetForm() {
  let cardType = $('#card-type');
  cardType.empty()
  $('#card-options').empty()

  cardType.append($('<label>', { for: "input-type", text: "Card Type: " }))
  cardType.append($('<select>', {id: "input-type"}))
  let inputType = $('#input-type');
  inputType.append($('<option>', { value: "", text: "Select an option",
      selected: true, disabled: true }))
  inputType.append($('<option>', { value: "player", text: "Player Card" }))
  inputType.append($('<option>', { value: "team-staff", text: "Team Staff Card" }))
  inputType.append($('<option>', { value: "official", text: "Official Card" }))
  inputType.append($('<option>', { value: "staff", text: "Tournament Staff Card" }))
  inputType.append($('<option>', { value: "rare", text: "Rare Card" }))
  document.getElementById("input-type")
    .addEventListener("change", cardTypeChanged);
}
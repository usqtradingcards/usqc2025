function cardTypeChanged() {
  let type = $('#input-type').val();

  if (type === "player") {
    playerType()
  } else if (type === "rare") {
    rareType()
  } else if (type === "staff") {
    staffType()
  }
}

function playerType() {
  $('#card-options').empty()

  // team
  $('#card-options')
    .append($('<label>', { for: "input-team", text: "Team: " }))
  $('#card-options')
    .append($('<select>', { id: "input-team", required: true }))
  $('#card-options').append($('<br>'))
  fillInputTeam()

  // position
  $('#card-options')
    .append($('<label>', { for: "input-position", text: "Position: " }))
  $('#card-options')
    .append($('<select>', { id: "input-position", required: true }))
  $('#card-options').append($('<br>'))
  fillPositions()

  // first & last name, jersey number
  $('#card-options')
    .append($('<label>', { for: "input-first-name", text: "First Name: " }))
  $('#card-options')
    .append($('<input>', { type: "text", id: "input-first-name", required: true }))
  $('#card-options').append($('<br>'))
  $('#card-options')
    .append($('<label>', { for: "input-last-name", text: "Last Name: " }))
  $('#card-options')
    .append($('<input>', { type: "text", id: "input-last-name", required: true }))
  $('#card-options').append($('<br>'))
  $('#card-options')
    .append($('<label>', { for: "input-jersey-number", text: "Jersey Number: " }))
  $('#card-options')
    .append($('<input>', { type: "text", id: "input-jersey-number" }))
  $('#card-options').append($('<br>'))

  // image url & photographer
  $('#card-options')
    .append($('<label>', { for: "input-image-url", text: "Image Url: " }))
  $('#card-options')
    .append($('<input>', { type: "text", id: "input-image-url", required: true }))
  $('#card-options')
    .append($('<div>', { id: "hint-image-url", text: "Dropbox and Imgur urls recommended" }))
  $('#card-options')
    .append($('<label>', { for: "input-photographer", text: "Photographer: " }))
  $('#card-options')
    .append($('<input>', { type: "text", id: "input-photographer", required: true }))
  $('#card-options').append($('<br>'))
}

function fillInputTeam() {

}

function fillPositions() {

}

function rareType() {
  $('#card-options').empty()
}

function staffType() {
  $('#card-options').empty()
}
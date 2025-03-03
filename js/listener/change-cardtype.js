function cardTypeChanged() {
  let type = $('#input-type').val();

  $('#errors').empty()

  if (type === "player") {
    playerType()
  } else if (type === "team-staff") {
    teamStaffType()
  } else if (type === "official") {
    officialType()
  } else if (type === "rare") {
    rareType()
  } else if (type === "staff") {
    staffType()
  }
}

function playerType() {
  let cardOption = $('#card-options');
  cardOption.empty()
  // team
  cardOption.append($('<label>', { for: "input-team", text: "Team: " }))
  cardOption.append($('<select>', { id: "input-team", required: true }))
  cardOption.append($('<br>'))
  fillTeam()
  // position
  cardOption.append($('<label>', { for: "input-position", text: "Position: " }))
  cardOption.append($('<select>', { id: "input-position", required: true }))
  cardOption.append($('<br>'))
  fillPositions()
  // first & last name, jersey number
  cardOption.append($('<label>', { for: "input-first-name", text: "First Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-first-name", required: true }))
  cardOption.append($('<br>'))
  cardOption.append($('<label>', { for: "input-last-name", text: "Last Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-last-name", required: true }))
  cardOption.append($('<br>'))
  cardOption.append($('<label>', { for: "input-jersey-number", text: "Jersey Number: " }))
  cardOption.append($('<input>', { type: "text", id: "input-jersey-number", pattern: "[0-9]{1,2}" }))
  cardOption.append($('<br>'))
  // image url & photographer
  cardOption.append($('<label>', { for: "input-image-url", text: "Image Url: " }))
  cardOption.append($('<input>', { type: "text", id: "input-image-url", required: true }))
  cardOption.append($('<div>', { class: "hint-image-url", text: "Dropbox and Imgur urls recommended" }))
  cardOption.append($('<div>', { class: "hint-image-url", text: "Do not use: Facebook, Squarespace" }))
  cardOption.append($('<label>', { for: "input-photographer", text: "Photographer: " }))
  cardOption.append($('<input>', { type: "text", id: "input-photographer", required: true }))
  cardOption.append($('<br>'))

  fillPositions("player")
}

function teamStaffType() {
  let cardOption = $('#card-options');
  cardOption.empty()
  // team
  cardOption.append($('<label>', { for: "input-team", text: "Team: " }))
  cardOption.append($('<select>', { id: "input-team", required: true }))
  cardOption.append($('<br>'))
  fillTeam()
  // position
  cardOption.append($('<label>', { for: "input-position", text: "Position: " }))
  cardOption.append($('<select>', { id: "input-position", required: true }))
  cardOption.append($('<br>'))
  fillPositions()
  // first & last name, jersey number
  cardOption.append($('<label>', { for: "input-first-name", text: "First Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-first-name", required: true }))
  cardOption.append($('<br>'))
  cardOption.append($('<label>', { for: "input-last-name", text: "Last Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-last-name", required: true }))
  cardOption.append($('<br>'))
  // image url & photographer
  cardOption.append($('<label>', { for: "input-image-url", text: "Image Url: " }))
  cardOption.append($('<input>', { type: "text", id: "input-image-url", required: true }))
  cardOption.append($('<div>', { id: "hint-image-url", text: "Dropbox and Imgur urls recommended" }))
  cardOption.append($('<div>', { class: "hint-image-url", text: "Do not use: Facebook, Squarespace" }))
  cardOption.append($('<label>', { for: "input-photographer", text: "Photographer: " }))
  cardOption.append($('<input>', { type: "text", id: "input-photographer", required: true }))
  cardOption.append($('<br>'))

  fillPositions("team-staff")
}

function fillTeam() {
  let $inputTeam = $("#input-team")
  $inputTeam.empty()
  $inputTeam.append($('<option>', { text: "Select a team", selected: true, disabled: true }))
  let keys = Object.keys(Teams).sort();
  $.each(keys, function(index, key) {
    $inputTeam.append($('<option>', { value: key, text: Teams[key].name, id: key }))
  })
}

function officialType() {
  let cardOption = $('#card-options');
  cardOption.empty()
  // position
  cardOption.append($('<label>', { for: "input-position", text: "Position: " }))
  cardOption.append($('<select>', { id: "input-position", required: true }))
  cardOption.append($('<br>'))
  fillPositions()
  // first & last name, jersey number
  cardOption.append($('<label>', { for: "input-first-name", text: "First Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-first-name", required: true }))
  cardOption.append($('<br>'))
  cardOption.append($('<label>', { for: "input-last-name", text: "Last Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-last-name", required: true }))
  cardOption.append($('<br>'))
  // image url & photographer
  cardOption.append($('<label>', { for: "input-image-url", text: "Image Url: " }))
  cardOption.append($('<input>', { type: "text", id: "input-image-url", required: true }))
  cardOption.append($('<div>', { id: "hint-image-url", text: "Dropbox and Imgur urls recommended" }))
  cardOption.append($('<div>', { class: "hint-image-url", text: "Do not use: Facebook, Squarespace" }))
  cardOption.append($('<label>', { for: "input-photographer", text: "Photographer: " }))
  cardOption.append($('<input>', { type: "text", id: "input-photographer", required: true }))
  cardOption.append($('<br>'))

  fillPositions("official")
}

function rareType() {
  $('#card-options').empty()

  let cardOption = $('#card-options');
  cardOption.empty()
  // first & last name, jersey number
  cardOption.append($('<label>', { for: "input-rare-title", text: "Card Title: " }))
  cardOption.append($('<input>', { type: "text", id: "input-rare-title", required: true }))
  cardOption.append($('<br>'))
  cardOption.append($('<label>', { for: "input-rare-caption", text: "Card Caption: " }))
  cardOption.append($('<input>', { type: "text", id: "input-rare-caption", required: true }))
  cardOption.append($('<br>'))
  // image url & photographer
  cardOption.append($('<label>', { for: "input-image-url", text: "Image Url: " }))
  cardOption.append($('<input>', { type: "text", id: "input-image-url", required: true }))
  cardOption.append($('<div>', { id: "hint-image-url", text: "Dropbox and Imgur urls recommended" }))
  cardOption.append($('<div>', { class: "hint-image-url", text: "Do not use: Facebook, Squarespace" }))
  cardOption.append($('<label>', { for: "input-photographer", text: "Photographer: " }))
  cardOption.append($('<input>', { type: "text", id: "input-photographer", required: true }))
  cardOption.append($('<br>'))
}

function staffType() {
  let cardOption = $('#card-options');
  cardOption.empty()
  // position
  cardOption.append($('<label>', { for: "input-position", text: "Position: " }))
  cardOption.append($('<select>', { id: "input-position", required: true }))
  cardOption.append($('<br>'))
  fillPositions()
  // first & last name, jersey number
  cardOption.append($('<label>', { for: "input-first-name", text: "First Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-first-name", required: true }))
  cardOption.append($('<br>'))
  cardOption.append($('<label>', { for: "input-last-name", text: "Last Name: " }))
  cardOption.append($('<input>', { type: "text", id: "input-last-name", required: true }))
  cardOption.append($('<br>'))
  // image url & photographer
  cardOption.append($('<label>', { for: "input-image-url", text: "Image Url: " }))
  cardOption.append($('<input>', { type: "text", id: "input-image-url", required: true }))
  cardOption.append($('<div>', { id: "hint-image-url", text: "Dropbox and Imgur urls recommended" }))
  cardOption.append($('<div>', { class: "hint-image-url", text: "Do not use: Facebook, Squarespace" }))
  cardOption.append($('<label>', { for: "input-photographer", text: "Photographer: " }))
  cardOption.append($('<input>', { type: "text", id: "input-photographer", required: true }))
  cardOption.append($('<br>'))

  fillPositions("staff")
}

function fillPositions(type) {
  let $inputPositions = $("#input-position")
  $inputPositions.empty()
  $inputPositions.append($('<option>', { text: "Select a position", selected: true, disabled: true }))
  $.each(Positions[type], function(index, item) {
    $inputPositions.append($('<option>', { value: item, text: item }))
  })
}
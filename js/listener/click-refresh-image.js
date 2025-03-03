function clickRefreshImage() {
  image()
  topLeft()
  mainText()
  bottomLeft()
  bottomRight()
}

function image() {
  let imageUrl = "https://i.imgur.com/tJueYge.jpeg"
  $("#card-image").css('background-image', `url(${imageUrl})`)
}

// Top Left: Logo + Name
function topLeft() {
  const cardType = $('#input-type').val()
  let logoUrl = ""
  let name = ""

  if (cardType === "official") {
    logoUrl = "./assets/usq-logos/usquadball.png"
    name = "Official"
  } else if (cardType === "player" || cardType === "team-staff") {
    const selected = $('#input-team').val()
    const details = Teams[selected]
    logoUrl = details["image"]
    name = details["name"]
  } else if (cardType === "staff" || cardType === "rare") {
    logoUrl = "./assets/usq-logos/usqc25.png"
    name = "Tournament Staff"
  }

  let topLeft = $('#topLeft');
  topLeft.empty()
  topLeft
    .append(
      $('<img>', {
        id: "team-logo",
        src: logoUrl
      })
        .add('<span>', {
          id: "team-name",
          text: name
        })
    )
}

// Main Text: Name
// For rare cards: description
function mainText() {
  const type = $('#input-type').val()
  if (type === "player") {
    let topLine = $('#input-first-name').val();
    let bottomLine = $('#input-last-name').val();
    let $player = $('#player');
    $player.empty()
    $player
      .append(
        $('<div>', {
          id: "top-line",
          text: topLine
        }))
    $player
      .append(
        $('<div>', {
          id: "bottom-line",
          text: bottomLine
        }))
  }
}

// Bottom Left: photographer credit
function bottomLeft() {
  const photog = $('#input-photographer').val()
  let $bottom = $('#bottom-left');
  $bottom.empty()
  $bottom
    .append(
      $('<img>', {
        src: "./assets/icons/camera.png"
      })
      .add('<span>', {
        class: 'text',
        text: photog
      })
    )
}

// Bottom Right:
//    Player: position, number (optional), quadball
//    Media: (photographer, commentator, livestream), polaroid
//    Referee: Referee, card
//    Tournament Staff: Tournament Staff, trophy
//    Rare Card: Rare Card, star
function bottomRight() {
  const type = $('#input-type').val()
  let position = ''
  let number = ''
  let image = ''

  position = $('#input-position').val()
  if ($('#input-jersey-number').length) {
    number = $('#input-jersey-number').val()
  }

  if (type === "player" || type === "team-staff") {
    image = "./assets/icons/quadball.png"
  } else if (type === "official") {
    image = "./assets/icons/referee.png"
  } else if (type === "staff") {
    image = "./assets/icons/trophy.png"
  } else if (type === "rare") {
    image = "./assets/icons/star.png"
  }

  let $bottom = $('#bottom-right');
  $bottom.empty()
  $bottom
    .append(
      $('<div>', {
        class: 'text',
        text: position
      }))
  if (number !== '') {
    $bottom
      .append($('<div>', {
        class: 'text',
        text: `#${number}`
      }))
  }
  $bottom
    .append(
      $('<img>', {
      src: image
    }))
}
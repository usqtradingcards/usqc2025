function clickRefreshImage() {
  $('#errors').empty();

  topLeft()
  bottomRight()
  mainText()
  image()
  bottomLeft()
}

function image() {
  // let imageUrl = "https://i.imgur.com/tJueYge.jpeg"
  let imageUrl = sanitize($('#input-image-url').val())
  // set background image
  if (imageUrl === '' || !imageUrl) {
    $('#errors').append($('<div>', { text: "!! image url required" }))
    return
  }
  $("#card-image").css('background-image', `url(${imageUrl})`)
  // determine min size percent
  const image = new Image();
  image.src = imageUrl;
  image.onload = function() {
    const width = image.width;
    const height = image.height;
    const aspect = width / height
    const divWidth = 694;
    const divHeight = 936;
    const divAspect = divWidth / divHeight;

    let $zoom = $('#zoom');
    let minWidthZoom;
    if (divAspect > aspect) {
      // cover width, height overflow
      minWidthZoom = 100
    } else {
      // cover height, width overflow
      let widthScale = width / divWidth
      let heightScale = height / divHeight
      minWidthZoom = 100 * widthScale / heightScale;
    }
    $zoom.attr('min', minWidthZoom)
    $zoom.attr('value', minWidthZoom)
    $zoom.attr('max', minWidthZoom * 5)
    adjustBackground();
  }
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

    if (selected === '' || !selected) {
      $('#errors').append($('<div>', { text: "!! team required" }))
      return
    }

    const details = Teams[selected]
    logoUrl = details["image"]
    name = details["name"]
  } else if (cardType === "staff") {
    logoUrl = "./assets/usq-logos/usqc25.png"
    name = "Tournament Staff"

  } else if (cardType === "rare") {
    logoUrl = "./assets/usq-logos/usqc25.png"
    name = "Rare Card"
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
  if (type === "rare") {
    let title = sanitize($('#input-rare-title').val());
    let caption = sanitize($('#input-rare-caption').val());

    if (title === '' || !title) {
      $('#errors').append($('<div>', { text: "!! card title required" }))
      return
    }

    let $player = $('#player');
    $player.empty()
    $player
      .append(
        $('<div>', {
          id: "rare-title",
          text: title
        }))
    $player
      .append(
        $('<div>', {
          id: "rare-caption",
          class: "lato",
          text: caption
        }))
  } else {
    let topLine = sanitize($('#input-first-name').val());
    let bottomLine = sanitize($('#input-last-name').val());

    if ((topLine === '' || !topLine) && (bottomLine === '' || !bottomLine)) {
      $('#errors').append($('<div>', { text: "!! name required" }))
      return
    }

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
  const photog = sanitize($('#input-photographer').val());

  if (photog === '' || !photog) {
    $('#errors').append($('<div>', { text: "!! photographer required" }))
    return
  }

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
  if (type !== "rare" && (position === '' || !position)) {
    $('#errors').append($('<div>', { text: "!! position required" }))
    return
  }

  if ($('#input-jersey-number').length) {
    number = sanitize($('#input-jersey-number').val())
  }

  if (type === "player" || type === "team-staff") {
    image = "./assets/icons/quadball.png"
  } else if (type === "official") {
    image = "./assets/icons/referee.png"
  } else if (type === "staff") {
    image = "./assets/icons/trophy.png"
  } else if (type === "rare") {
    position = "rare"
    image = "./assets/icons/rare.png"
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
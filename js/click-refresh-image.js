function clickRefreshImage() {
  image()
  topLeft()
  mainText()
  bottomLeft()
  bottomRight()
}

function image() {

}

// Top Left: Logo + Name
function topLeft() {
  const selected = $('#input-team').val()
  const details = DataTeams[selected]

  $('#topLeft').empty()
  $('#topLeft')
    .append(
      $('<img>', {
        id: "team-logo",
        src: details["image"]
      })
        .add('<span>', {
          id: "team-name",
          text: details["name"]
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
    $('#player').empty()
    $('#player')
      .append(
        $('<div>', {
          id: "top-line",
          text: topLine
        }))
    $('#player')
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
  $('#bottom-left').empty()
  $('#bottom-left')
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
  const position = $('#input-position').val()
  const number = $('#input-jersey-number').val()

  $('#bottom-right').empty()
  $('#bottom-right')
    .append(
      $('<span>', {
        class: 'text',
        text: position
      }))
  if (number !== '') {
    $('#bottom-right')
      .append($('<span>', {
        class: 'text',
        text: `#${number}`
      }))
  }
  $('#bottom-right')
    .append(
      $('<img>', {
      src: "./assets/icons/quadball.png"
    }))
}
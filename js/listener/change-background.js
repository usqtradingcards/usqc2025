function adjustBackground() {
  let lr = $('#left-right').val()
  let tb = $('#top-down').val()
  let z = $('#zoom').val()

  $('#card-image').css('background-position', `${lr}% ${tb}%`)
  $('#card-image').css('background-size', `${z}%`)
}
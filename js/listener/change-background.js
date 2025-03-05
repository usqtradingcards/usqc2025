function adjustBackground() {
  let lr = $('#left-right').val()
  let tb = $('#top-down').val()
  let z = $('#zoom').val()
  let r = $('#rotate').is(':checked')

  $('#left-right-num').val(lr)
  $('#top-bottom-num').val(tb)
  $('#zoom-num').val(z)

  if (r) {
    $('#card-image').css('background-position', `${tb}% ${lr}%`)
  } else {
    $('#card-image').css('background-position', `${lr}% ${tb}%`)
  }
  $('#card-image').css('background-size', `${z}%`)
}

function adjustBackgroundNum() {
  let lr = $('#left-right-num').val()
  let tb = $('#top-bottom-num').val()
  let z = $('#zoom-num').val()
  let z_min = $('#zoom').attr('min');
  let z_max = $('#zoom').attr('max');
  let r = $('#rotate').is(':checked')
  let update = true

  if (lr < 0) {
    $('#left-right-num').val('0')
    lr = 0
    update = false
  } else if (lr > 100) {
    $('#left-right-num').val('100')
    lr = 100
    update = false
  }
  if (tb < 0) {
    $('#top-bottom-num').val(0)
    tb = 0
    update = false
  } else if (tb > 100) {
    $('#top-bottom-num').val(100)
    tb = 100
    update = false
  }
  if (z < z_min) {
    z = z_min
    update = false
  } else if (z > z_max) {
    z = z_max
    update = false
  }
  $('#left-right').val(lr)
  $('#top-bottom').val(tb)
  $('#zoom').val(z)

  if (update) {

    if (r) {
      $('#card-image').css('background-position', `${tb}% ${lr}%`)
    } else {
      $('#card-image').css('background-position', `${lr}% ${tb}%`)
    }
    $('#card-image').css('background-size', `${z}%`)
  }
}

function adjustRotate() {
  let lr = $('#left-right').val()
  let tb = $('#top-down').val()
  let r = $('#rotate').is(':checked')
  if (r) {
    $('#card-image').addClass('rotate')
    $('#card-image').css('background-position', `${tb}% ${lr}%`)
  } else {
    $('#card-image').removeClass('rotate')
    $('#card-image').css('background-position', `${lr}% ${tb}%`)
  }
  imageZoom()
}
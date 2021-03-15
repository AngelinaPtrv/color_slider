const BUTTON_BG = $('.buttons__bgcolor'),
      BUTTON_TEXT = $('.buttons__color'),
      RED = $('.red'),
      GREEN = $('.green'),
      BLUE = $('.blue'),
      BLOCK = $('.block__wrap'),
      TEXT = $('.block__text');

let state = 'box';

$( function() {
  function hexFromRGB(r, g, b) {
    let hex;
    hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ];
    $.each(hex, function(nr, val) {
      if (val.length === 1) {
        hex[nr] = '0' + val;
      }
    });
    return hex.join('').toUpperCase();
  }

  function refreshColor() {
    let red = RED.slider('value'),
        green = GREEN.slider('value'),
        blue = BLUE.slider('value'),
        hex = hexFromRGB(red, green, blue);
    if (state === 'box') {
      BLOCK.css('background-color', '#' + hex);
    } else {
      TEXT.css('color', '#' + hex);
    }
  }

  BUTTON_TEXT.click(function () {
    state = 'text';
    refreshColor();
    return state;
  });

  BUTTON_BG.click((function () {
    state = 'box';
    refreshColor();
    return state;
  }));

  $('.slider__item').slider({
    orientation: 'horizontal',
    range: 'min',
    max: 255,
    value: 127,
    slide: refreshColor,
    change: refreshColor
  });

  RED.slider('value', 220);
  GREEN.slider('value', 220);
  BLUE.slider('value', 220);
} );
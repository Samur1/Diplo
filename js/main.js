/*=====BUBBLES ANIMATION=====*/
jQuery(document).ready(function() {
    $('.one').addClass('oneani');
    $('.two').addClass('twoani');
})

/*ACCORDION*/
var acc = document.getElementsByClassName("features__button");
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;
       	if (content.style.maxHeight) {
       		content.style.maxHeight = null;
       	}
       	else{
       		content.style.maxHeight = content.scrollHeight + "px";
       	}
    });
}

/*SMOOTH SCROLLING*/
$('a[href^="#"]').click(function() {
    var $root = $('.features-properties');
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });

    return false;
});

/*BACKGROUND-COLOR*/
var r       = document.querySelector('#background-color__r'),
    g       = document.querySelector('#background-color__g'),
    b       = document.querySelector('#background-color__b'),
    r_out   = document.querySelector('#background-color__r_out'),
    g_out   = document.querySelector('#background-color__g_out'),
    b_out   = document.querySelector('#background-color__b_out'),
    hex_out = document.querySelector('#background-color__hex');
function setColor() {
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  hex_out.style.background = hex; 
  hex_out.value = hex;
}

function pad(n) {
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
  r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);

/*BACKGROUND-IMAGE*/
$("input").change(function(e) {
    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
        img.style.width        = "200px";
        img.style.height       = "200px";
        img.style.marginLeft   = "30%";
        document.getElementById("back_img__block").before(img);
    }
});

/*BORDER-COLOR*/
var border_r       = document.querySelector('#border-color__r'),
    border_g       = document.querySelector('#border-color__g'),
    border_b       = document.querySelector('#border-color__b'),
    border_r_out   = document.querySelector('#border-color__r_out'),
    border_g_out   = document.querySelector('#border-color__g_out'),
    border_b_out   = document.querySelector('#border-color__b_out'),
    border_hex_out = document.querySelector('#border-color__hex');
function setBorderColor() {
  var border_r_hex = parseInt(border_r.value, 10).toString(16),
      border_g_hex = parseInt(border_g.value, 10).toString(16),
      border_b_hex = parseInt(border_b.value, 10).toString(16),
      border_hex = "#" + pad(border_r_hex) + pad(border_g_hex) + pad(border_b_hex);
  border_hex_out.style.borderColor = border_hex; 
  border_hex_out.value = border_hex;
}

function borderPad(n) {
  return (n.length<2) ? "0"+n : n;
}

border_r.addEventListener('change', function() {
  setBorderColor();
  border_r_out.value = border_r.value;
}, false);

border_r.addEventListener('input', function() {
  setBorderColor();
  border_r_out.value = border_r.value;
}, false);

border_g.addEventListener('change', function() {
  setBorderColor();
  border_g_out.value = border_g.value;
}, false);

border_g.addEventListener('input', function() {
  setBorderColor();
  border_g_out.value = border_g.value;
}, false);

border_b.addEventListener('change', function() {
  setBorderColor();
  border_b_out.value = border_b.value;
}, false);

border_b.addEventListener('input', function() {
  setBorderColor();
  border_b_out.value = border_b.value;
}, false);

/*BORDER-RADIUS*/
function borderRadius() {
  top_left     = document.getElementById('ranges__top-left'),
  top_right    = document.getElementById('ranges__top-right'),
  bottom_left  = document.getElementById('ranges__bottom-left'),
  bottom_right = document.getElementById('ranges__bottom-right'),
  block        = document.getElementById('ranges__block');

  block.style.borderRadius = top_left.value + 'px ' + top_right.value + 'px ' + bottom_right.value + 'px ' + bottom_left.value + 'px';
}

/*BORDER-STYLE*/
function borderStyle() {
  dotted = document.getElementById('style__dotted'),
  dashed = document.getElementById('style__dashed'),
  solid  = document.getElementById('style__solid'),
  double = document.getElementById('style__double'),
  groove = document.getElementById('style__groove'),
  ridge  = document.getElementById('style__ridge'),
  inset  = document.getElementById('style__inset'),
  outset = document.getElementById('style__outset'),
  text   = document.getElementById('style__text');

  if (dotted.checked) {
    text.style.borderStyle = "dotted";
  }
  else if (dashed.checked) {
    text.style.borderStyle = "dashed";
  }
  else if (solid.checked) {
    text.style.borderStyle = "solid";
  }
  else if (double.checked) {
    text.style.borderStyle = "double";
  }
  else if (groove.checked) {
    text.style.borderStyle = "groove";
  }
  else if (ridge.checked) {
    text.style.borderStyle = "ridge";
  }
  else if (inset.checked) {
    text.style.borderStyle = "inset";
  }
  else if (outset.checked) {
    text.style.borderStyle = "outset";
  }
  else {
    alert('Oops, something going wrong');
  }
}

/*BORDER-WIDTH*/
function borderWidth() {
  top_left     = document.getElementById('width__top-left'),
  top_right    = document.getElementById('width__top-right'),
  bottom_left  = document.getElementById('width__bottom-left'),
  bottom_right = document.getElementById('width__bottom-right'),
  text         = document.getElementById('width__text');

  text.style.borderWidth = top_left.value + 'px ' + top_right.value + 'px ' + bottom_right.value + 'px ' + bottom_left.value + 'px';
}

/*BOX-SHADOW*/
function boxShadow() {
  x_offset = document.getElementById('x-offset'),
  y_offset = document.getElementById('y-offset'),
  blurring = document.getElementById('blurring'),
  block    = document.getElementById('shadow-block');

  block.style.boxShadow = x_offset.value + 'px ' + y_offset.value + 'px ' + blurring.value + 'px ' + "white";
}

/*COLOR*/
var color_r       = document.querySelector('#color__r'),
    color_g       = document.querySelector('#color__g'),
    color_b       = document.querySelector('#color__b'),
    color_r_out   = document.querySelector('#color__r_out'),
    color_g_out   = document.querySelector('#color__g_out'),
    color_b_out   = document.querySelector('#color__b_out'),
    color_hex_out = document.querySelector('#color__hex');

function setTextColor() {
  var color_r_hex = parseInt(color_r.value, 10).toString(16),
      color_g_hex = parseInt(color_g.value, 10).toString(16),
      color_b_hex = parseInt(color_b.value, 10).toString(16),
      color_hex = "#" + pad(color_r_hex) + pad(color_g_hex) + pad(color_b_hex);
  
  color_hex_out.style.color = color_hex; 
  color_hex_out.value = color_hex;
}

function textColorPad(n) {
  return (n.length<2) ? "0"+n : n;
}

color_r.addEventListener('change', function() {
  setTextColor();
  color_r_out.value = color_r.value;
}, false);

color_r.addEventListener('input', function() {
  setTextColor();
  color_r_out.value = color_r.value;
}, false);

color_g.addEventListener('change', function() {
  setTextColor();
  color_g_out.value = color_g.value;
}, false);

color_g.addEventListener('input', function() {
  setTextColor();
  color_g_out.value = color_g.value;
}, false);

color_b.addEventListener('change', function() {
  setTextColor();
  color_b_out.value = color_b.value;
}, false);

color_b.addEventListener('input', function() {
  setTextColor();
  color_b_out.value = color_b.value;
}, false);

/*CURSOR*/
function textCursor() {
  c_default   = document.getElementById('cursor__default'),
  c_crosshair = document.getElementById('cursor__crosshair'),
  c_help      = document.getElementById('cursor__help'),
  c_move      = document.getElementById('cursor__move'),
  c_pointer   = document.getElementById('cursor__pointer'),
  c_progress  = document.getElementById('cursor__progress'),
  c_text      = document.getElementById('cursor__text'),
  c_wait      = document.getElementById('cursor__wait'),
  c_block     = document.getElementById('cursor__block');

  if (c_default.checked) {
    c_block.style.cursor = "default";
  }
  else if (c_crosshair.checked) {
    c_block.style.cursor = "crosshair";
  }
  else if (c_help.checked) {
    c_block.style.cursor = "help";
  }
  else if (c_move.checked) {
    c_block.style.cursor = "move";
  }
  else if (c_pointer.checked) {
    c_block.style.cursor = "pointer";
  }
  else if (c_progress.checked) {
    c_block.style.cursor = "progress";
  }
  else if (c_text.checked) {
    c_block.style.cursor = "text";
  }
  else if (c_wait.checked) {
    c_block.style.cursor = "wait";
  }
  else {
    alert('Oops, something going wrong');
  }
}

/*FLOAT*/
function float() {
  left     = document.getElementById('float__left'),
  right    = document.getElementById('float__right'),
  none     = document.getElementById('float__none'),
  f_square = document.getElementById('block__square');

  if (left.checked) {
    f_square.style.float = "left";
  }
  else if (right.checked) {
    f_square.style.float = "right";
  }
  else if (none.checked) {
    f_square.style.float = "none";
  }
  else {
    alert('Oops, something going wrong');
  }
}

/*FONT-FAMILY*/
function fontFamily() {
  okruglizm = document.getElementById('family__okruglizm'),
  roboto    = document.getElementById('family__roboto'),
  roman     = document.getElementById('family__roman'),
  exo       = document.getElementById('family__exo'),
  text      = document.getElementById('family__text');

  if (okruglizm.checked) {
    text.style.fontFamily = "Okruglizm";
  }
  else if (roboto.checked) {
    text.style.fontFamily = "Roboto";
  }
  else if (roman.checked) {
    text.style.fontFamily = "Times New Roman";
  }
  else if (exo.checked) {
    text.style.fontFamily = "Exo";
  }
  else {
    alert('Oops, something going wrong');
  }
}

/*FONT-SIZE*/
function fontSize() {
  size = document.getElementById('size__value'),
  text = document.getElementById('size__text');

  text.style.fontSize = size.value + 'px ';
}

/*FONT-STYLE*/
function fontStyle() {
  cursive = document.getElementById('style__cursive'),
  normal  = document.getElementById('style__normal'),
  oblique = document.getElementById('style__oblique'),
  text    = document.getElementById('font_style__text');

  if (cursive.checked) {
    text.style.fontStyle = "italic";
  }
  else if (normal.checked) {
    text.style.fontStyle = "normal";
  }
  else if (oblique.checked) {
    text.style.fontStyle = "oblique";
  }
  else {
    alert('Oops, something going wrong');
  }
}

/*FONT-WEIGHT*/
function fontWeight() {
  size = document.getElementById('weight__value'),
  text = document.getElementById('weight__text');

  text.style.fontWeight = size.value;
}

/*HEIGHT*/
function heightBlock() {
  height = document.getElementById('height__value'),
  block = document.getElementById('height__block');

  block.style.height = height.value + 'px';
}

/*LETTER-SPACING*/
function letterSpacing() {
  letter = document.getElementById('letter__value'),
  text = document.getElementById('letter__text');

  text.style.letterSpacing = letter.value + 'px';
}

/*LINE-HEIGHT*/
function lineHeight() {
  line = document.getElementById('line__value'),
  text = document.getElementById('line__text');

  text.style.lineHeight = line.value;
}

/*LIST-STYLE-TYPE*/
function listType() {
  circle  = document.getElementById('list__circle'),
  disk    = document.getElementById('list__disk'),
  square  = document.getElementById('list__square'),
  decimal = document.getElementById('list__decimal'),
  l_alpha = document.getElementById('list__lower_alpha'),
  u_alpha = document.getElementById('list__upper_alpha'),
  l_roman = document.getElementById('list__lower_roman'),
  u_roman = document.getElementById('list__upper_roman'),
  none    = document.getElementById('list__none'),
  list    = document.getElementById('list__ul');

  if (circle.checked) {
    list.style.listStyleType = 'circle';
  }
  else if(disk.checked) {
    list.style.listStyleType = 'disc';
  }
  else if(square.checked) {
    list.style.listStyleType = 'square';
  }
  else if(decimal.checked) {
    list.style.listStyleType = 'decimal';
  }
  else if(l_alpha.checked) {
    list.style.listStyleType = 'lower-alpha';
  }
  else if(u_alpha.checked) {
    list.style.listStyleType = 'upper-alpha';
  }
  else if(l_roman.checked) {
    list.style.listStyleType = 'lower-roman';
  }
  else if(u_roman.checked) {
    list.style.listStyleType = 'upper-roman';
  }
  else if(none.checked) {
    list.style.listStyleType = 'none';
  }
  else {
    alert('Oops, something going wrong');
  }
}

/*MARGIN*/
function margin() {
  m_top    = document.getElementById('margin-top'),
  m_left   = document.getElementById('margin-left'),
  block    = document.getElementById('margin__square');

  block.style.margin = m_top.value + 'px ' + m_left.value + 'px ';
}

/*OPACITY*/
function opacity(){
  var opacity = document.getElementById('opacity__value'),
  block = document.getElementById('opacity__block');

  block.style.opacity = opacity.value;
}

/*PADDING*/
function padding() {
  p_top    = document.getElementById('padding-top'),
  p_left   = document.getElementById('padding-left'),
  block    = document.getElementById('padding__square');

  block.style.padding = p_top.value + 'px ' + p_left.value + 'px ';
}

/*TEXT-ALIGN*/
function textAlign() {
  a_justify = document.getElementById('align__justify'),
  a_center  = document.getElementById('align__center'),
  a_left    = document.getElementById('align__left'),
  a_right   = document.getElementById('align__right'),
  text      = document.getElementById('text-align__text');

  if (a_justify.checked) {
    text.style.textAlign = "justify";
  }
  else if (a_center.checked) {
    text.style.textAlign = "center";
  }
  else if (a_left.checked) {
    text.style.textAlign = "left";
  }
  else if (a_right.checked) {
    text.style.textAlign = "right";
  }
  else {
     alert('Oops, something going wrong');
  }
}

/*TEXT-DECORATION*/
function textDecoration() {
  d_line_through  = document.getElementById('decoration__line-through'),
  d_overline      = document.getElementById('decoration__overline'),
  d_underline     = document.getElementById('decoration__underline'),
  d_none          = document.getElementById('decoration__none'),
  text            = document.getElementById('decoration__text');

  if (d_line_through.checked) {
    text.style.textDecoration = "line-through";
  }
  else if (d_overline.checked) {
    text.style.textDecoration = "overline";
  }
  else if (d_underline.checked) {
    text.style.textDecoration = "underline";
  }
   else if (d_none.checked) {
    text.style.textDecoration = "none";
  }
  else {
     alert('Oops, something going wrong');
  }
}

/*TEXT-SHADOW*/
function textShadow() {
  x_offset = document.getElementById('x-offset-text'),
  y_offset = document.getElementById('y-offset-text'),
  blurring = document.getElementById('blurring-text'),
  text     = document.getElementById('text-shadow__text');

  text.style.textShadow = x_offset.value + 'px ' + y_offset.value + 'px ' + blurring.value + 'px ' + "white";
}

/*TEXT-TRANSFORM*/
function textTransform() {
  t_capitalize = document.getElementById('transform__capitalize'),
  t_lowercase  = document.getElementById('transform__lowercase'),
  t_uppercase  = document.getElementById('transform__uppercase'),
  t_none       = document.getElementById('transform__none'),
  text         = document.getElementById('text-transform__text');

  if (t_capitalize.checked) {
    text.style.textTransform = "capitalize";
  }
  else if (t_lowercase.checked) {
    text.style.textTransform = "lowercase";
  }
  else if (t_uppercase.checked) {
    text.style.textTransform = "uppercase";
  }
  else if (t_none.checked) {
    text.style.textTransform = "none";
  }
  else {
     alert('Oops, something going wrong');
  }
}

/*VISIBILITY*/
function visibilityBlock() {
  b_visible = document.getElementById('visibility__yes'),
  b_hidden  = document.getElementById('visibility__no'),
  block     = document.getElementById('visibility__block');

  if (b_visible.checked) {
    block.style.visibility = 'visible';
  }
  else if (b_hidden.checked) {
    block.style.visibility = 'hidden';
  }
  else {
     alert('Oops, something going wrong');
  }
}

/*WIDTH*/
function widthBlock() {
  width = document.getElementById('width__value'),
  block = document.getElementById('width__block');

  block.style.width = width.value + 'px';
}

/*WORD-SPACING*/
function wordSpacing() {
  spacing = document.getElementById('spacing__value'),
  text    = document.getElementById('spacing__text');

  text.style.wordSpacing = spacing.value + 'px';
}

/*=====CSS & HTML CODE=====*/
var open_tag       = document.getElementById('open-tag'),
    css_text       = document.getElementById('css-text'),
    open_html_tag  = document.getElementById('open-html-tag'),
    close_bracket  = document.getElementById('close-bracket-html'),
    class_name  = document.getElementById('class-name'),
    class_close  = document.getElementById('tag-class-close'),
    close_html_tag = document.getElementById('close-html-tag'),
    lorem = document.getElementById('lorem-text'),
    tag_class = document.getElementById('tag-class');


/*BACKGROUND-COLOR*/
open_tag.innerText = '.diploBlock';
css_text.innerText = 'width : 250px; \n height : 250px; \n background-color : #666ccc;';
open_html_tag.innerText = '<div ';
tag_class.innerText = 'class="';
class_name.innerText = 'diploBlock';
class_close.innerText = '"';
close_bracket.innerText = '>'; 
close_html_tag.innerText = ' </div>';

function cssBackColor() {
  open_tag.innerText = '.diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n background-color : #666ccc;';
  open_html_tag.innerText = '<div ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploBlock';
  class_close.innerText = '"';
  close_bracket.innerText = '>'; 
  close_html_tag.innerText = ' </div>';
}

/*BACKGROUND-IMAGE*/
function cssBackImage() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n background-image : url(img/diplo.jpg);';
}

/*BORDER-COLOR*/
function cssBorderColor() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n border-width : 2px; \n border-style : solid; \n border-color : #666ccc;';
}

/*BORDER-RADIUS*/
function cssBorderRadius() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n border : 2px solid #666ccc; \n border-radius : 20px 10px 5px 10px;';
}

/*BORDER-STYLE*/
function cssBorderStyle() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n border-width : 2px; \n border-color : #666ccc; \n border-style : solid;';
}

/*BORDER-WIDTH*/
function cssBorderWidth() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n border-color : #666ccc; \n border-style : solid; \n border-width : 1px 3px 4px 2px;';
}

/*BOX-SHADOW*/
function cssBoxShadow() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n box-shadow : 4px 4px 20px white;';
}

/*COLOR*/
function cssColor() {
  open_tag.innerText = '.diploText';
  css_text.innerText = 'color : #666ccc';
  open_html_tag.innerText = '<p ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploText';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'Далеко-далеко за словесными горами' 
  close_html_tag.innerText = ' </p>';
}

/*CURSOR*/
function cssCursor() {
  open_tag.innerText = '.diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n cursor : pointer;';
  open_html_tag.innerText = '<div ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploBlock';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = ''; 
  close_html_tag.innerText = ' </div>';
}

/*FLOAT*/
function cssFloat() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n background : #666ccc \n float : right;';
}

/*FONT-FAMILY*/
function cssFontFamily() {
  open_tag.innerText = '.diploText';
  css_text.innerText = 'font-family : Roboto;';
  open_html_tag.innerText = '<p ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploText';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'Далеко-далеко за словесными горами' 
  close_html_tag.innerText = ' </p>';
}

/*FONT-SIZE*/
function cssFontSize() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'font-size : 20px;';
}

/*FONT-STYLE*/
function cssFontStyle() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'font-style : cursive;';
}

/*FONT-WEIGHT*/
function cssFontWeight() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'font-weight : 600;';
}

/*HEIGHT*/
function cssHeight() {
  open_tag.innerText = '.diploBlock';
  css_text.innerText = 'width : 250px; \n height : 150px;';
  open_html_tag.innerText = '<div ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploBlock';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = ''; 
  close_html_tag.innerText = ' </div>';
}

/*LETTER-SPACING*/
function cssLetterSpacing() {
  open_tag.innerText = '.diploText';
  css_text.innerText = 'letter-spacing : 10px;';
  open_html_tag.innerText = '<p ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploText';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'SPACE' 
  close_html_tag.innerText = ' </p>';
}

/*LINE-HEIGHT*/
function cssLineHeight() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'line-height : 10px;';
  lorem.innerText = 'Далеко-далеко за словесными горами';
}

/*LIST-STYLE-TYPE*/
function cssListStyle() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'list-style-type : square;';
  open_html_tag.innerText = '<ul ';
  class_close.innerText = '"';
  close_bracket.innerText = '> \n <li>';
  lorem.innerText = 'Element #1'; 
  close_html_tag.innerText = '</li> \n </ul>';
}

/*MARGIN*/
function cssMargin() {
  open_tag.innerText = '.diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n margin : 200px 100px 24px 52px;';
  open_html_tag.innerText = '<div ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploBlock';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = ''; 
  close_html_tag.innerText = ' </div>'; 
}

/*OPACITY*/
function cssOpacity() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n background : #666ccc; \n opacity : 0.4;';
}

/*PADDING*/
function cssPadding() {
  open_tag.innerText = '.diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n background : #666ccc; \n padding : 20px 10px 5px 10px;';
  open_html_tag.innerText = '<div ';
  tag_class.innerText = 'class="';
  class_name.innerText = 'diploBlock';
  class_close.innerText = '"';
  close_bracket.innerText = '> \n <p>';
  lorem.innerText = 'Далеко-далеко за словесными горами'; 
  close_html_tag.innerText = ' </p> \n </div>'; 
}

/*TEXT-ALIGN*/
function cssTextAlign() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'text-align : right;';
  open_html_tag.innerText = '<p ';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'Далеко-далеко за словесными горами'; 
  close_html_tag.innerText = '</p>';
}

/*TEXT-DECORATION*/
function cssTextDecoration() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'text-decoration : underline;';
  open_html_tag.innerText = '<p ';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'DECORATION'; 
  close_html_tag.innerText = '</p>';
}

/*TEXT-SHADOW*/
function cssTextShadow() {
   open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'text-shadow : 4px 4px 20px white';
  open_html_tag.innerText = '<p ';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'SHADOW'; 
  close_html_tag.innerText = '</p>';
}

/*TEXT-TRANSFORM*/
function cssTextTransform() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'text-transform : uppercase;';
  open_html_tag.innerText = '<p ';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'Далеко-далеко за словесными горами'; 
  close_html_tag.innerText = '</p>';
}

/*VISIBILITY*/
function cssVisibility() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 250px; \n height : 250px; \n background : #666ccc; \n visibility : visible;';
}

/*WIDTH*/
function cssWidth() {
  open_tag.innerText = '.diploBlock';
  class_name.innerText = 'diploBlock';
  css_text.innerText = 'width : 450px; \n height : 250px; \n background : #666ccc;';
}

/*WORD-SPACING*/
function cssWordSpacing() {
  open_tag.innerText = '.diploText';
  class_name.innerText = 'diploText';
  css_text.innerText = 'word-spacing : 14px;';
  open_html_tag.innerText = '<p ';
  class_close.innerText = '"';
  close_bracket.innerText = '>';
  lorem.innerText = 'Далеко-далеко за словесными горами'; 
  close_html_tag.innerText = '</p>';
}

/*ANIMATE PAGE*/
var  img    = document.getElementById("anim__img"),
     bounce = document.getElementById("anim__bounce");
 

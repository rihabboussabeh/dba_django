// Change active class on product sizes.


// Change image on thumbnail click.
var thumbs = $(".icon-images").find("img");
thumbs.click(function() {
  var src = $(this).attr("src");
  var dp = $(".display-img");
  dp.attr("src", src);
});

/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)

function letterHover(item) {
  $(item).hover(function() {
    $(item + ' a .letter').css("background-color", "#2677B6");
  }, function() {
    $(item + ' a .letter').css("background-color", "#469BDC");
  });
}

letterHover("#a")
letterHover("#b")
letterHover("#c")
letterHover("#d")

function isCorrect() {
  $('.question').css("background-color", "#2ecc71");
  $('.question h3').css("color", "#fff");
}

function isWrong() {
  $('.question').css("background-color", "#E23F35");
  $('.question h3').css("color", "#fff");
}
    
function answer(item, bool) {
  if (bool === "true") {
    $(item).click(function() {
      isCorrect();
    });
    
  } else if (bool === "false") {
    $(item).click(function() {
      isWrong();
    });
  }
}

answer("#a", "true")
answer("#b", "false")
answer("#c", "false")
answer("#d", "false")
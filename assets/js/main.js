// loader js
$(window).on("load", function () {
    $(".loader-container").delay(300).fadeOut(1000);
});

// Header Fixed
let header = document.querySelector('.page-navbar');
header.classList.toggle('shadow', window.scrollY > 110);

window.addEventListener('scroll', function(){
    header.classList.toggle('shadow', window.scrollY > 110);
});

// Active Link
$(".page-navbar .links .link").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).addClass("active");
    }
});

// Show And Hide Search Navbar
$('.nav-search-ic').on('click', function(){
  $('.nav-search').toggleClass('open');
});


// SideBar
$('.side-open').on('click', function(){
  $('.links').addClass('active');
  $('.overlay-m').fadeIn(600);
});

$('.close').on('click', function(){
  $('.links').removeClass('active');
  $('.overlay-m').fadeOut(500);
});

$('.overlay-m').on('click', function(){
  $('.links').removeClass('active');
  $(this).fadeOut(500);
});


// dropDown stopPropagation
$(".dropdown-menu").click(function(e){
    e.stopPropagation();
});


// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll('.pass-icon');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('.input-me');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){

  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }
}

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});



// Heart
$(document).on('click', '.heart' ,function(){
  if($(this).find('i').hasClass('fa-regular')){
    $(this).find('i').addClass('fa-solid yellow')
    $(this).find('i').removeClass('fa-regular')
  } else{
    $(this).find('i').removeClass('fa-solid yellow')
    $(this).find('i').addClass('fa-regular')
  }
})



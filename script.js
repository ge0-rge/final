$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,

});

  let navigation = document.getElementById('navigation');
  let burgericon = document.getElementById('burger');
  burgericon.addEventListener('click',function(){
    navigation.classList.toggle('active');
  })

document.getElementById('button2').addEventListener('click',function(){
  alert('registered');
})
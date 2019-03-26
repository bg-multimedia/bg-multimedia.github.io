 //BurguerButton
  var burguerButton = document.getElementById('burguer-button');
  
  burguerButton.addEventListener('touchstart', function(){
    var burguerMenu = document.getElementById('burguer-menu');
    burguerMenu.classList.toggle('active');
    burguerButton.classList.toggle('sliders');
    burguerButton.classList.toggle('close');
    burguerButton.classList.toggle('active-icon');
  });
  
  //Over Sections
   // function showText(header){
   //  header.parentElement.getElementsByTagName('p')[0].classList.toggle('open');
   // };

$(document).ready(function() {
  $(".menu-icon").click(function() {
      $("ul").animate( {
          height: 'toggle'
      });
  });
});

document.getElementsByClassName("img-des").addEventListener("click", function() {
  this.style.backgroundColor = "red";
});

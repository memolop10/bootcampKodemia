
   

   var color = document.getElementsByTagName("div");  

   var  $change= $color.getElementsByClassName('');

   for (var i = 0; i < $change.length; i++) {
    $change[i].addEventListener("click", function() {
      var _activar = document.getElementsByClassName("active");
      _activar[0].className = _activar[0].className.replace(" active", "");
      this.className += " active";
    });
  }



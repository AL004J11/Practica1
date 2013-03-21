$(document).ready(function(e) {
	//alert("Listo!!")
	document.addEventListener("deviceready", function(){
		$(".btn").tap (function(){
			var boton=(($(this).attr("class")).split (' '))[1];
			switch (boton)
			{
				case 'b1':
				navigator.notipication.beep(1);
				break;
				case 'b2':
				navigator.notipication.beep(2);
				break;
				case 'b3':
				navigator.notipication.beep(5);
				break;
				case 'v1':
				navigator.notipication.vibrate(500);
				break;
				case 'v2':
				navigator.notipication.vibrate(500);
				navigator.notipication.vibrate(500);
				break;
			}	
			


 $('#izquierda').swipeleft(function(){
   navigator.notificaion.confirm('¿que desea hacer?', function(option){
  switch(option){
    case 1
    alert( "izkierda")
      navigator.notification.beep(1)
   break;
    case 2:
    alert( "derecha")
      navigator.notification.vibrate(500);
  } //switch
 }, "practica 1","beep,vibrate,cancelar"); //function confirm
 }); //function swipe






			$('#derecha').swiperight(function(){
				navigator.notification.alert("deslizó a la derecha", function(){},"Practica 1", "Aceptar");
			});
		});		
	
}, false);



	});
	

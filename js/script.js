window.onload = function() {
  $("#table td").on('mouseover',function(){
  	var col = $(this).index();
  	var row = $(this).parent().index();

  	var colClass=$("#table tr:first-child th:nth-child("+(col+1)+")").attr("class");
  	var rowClass=$("#table tr:nth-child("+(row+1)+") th").attr("class");

  	$("#table td").removeClass();
  	$("#table tr:nth-child("+(row+1)+") td").not(this).addClass(rowClass);
  	$("#table tr td:nth-child("+(col+1)+")").not(this).addClass(colClass);
  	$(this).addClass("crosshair");
  });
  $("#table").on('mouseleave',function(){
  	$("#table td").removeClass();
  });
};

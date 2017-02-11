$('#pp').click(function(){
if($(this).html()=='hello world'){
  $(this).css('background','red');
  $(this).html('bye world');
}else{
  $(this).css('background','blue');
  $(this).html('hello world');
}
})

/*var ht = document.getElementById("pp").innerHTML;
function lk(){
  if( ht == "hello world" )
  {
  document.all.pp.style.background="#dd0000";
  document.all.pp.innerHTML="bye world";
  }
  else
  {
  document.all.pp.style.background="#fafafa";
  document.all.pp.innerHTML="hello world";
  }
}*/

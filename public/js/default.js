var buttons = {"options":[
{"name":"Customer Service"},
{"name":"Wait Time"},
{"name":"Quality"},
{"name":"Environment"},
{"name":"Other"}],
status:0,
temp:0
};
var eventToUse = 'tap';
$(document).ready(function(){
	makeTemplates();
	$.tmpl("top", buttons).appendTo(".buttons");
	bind(".happy", checkStatus);
	bind(".sad", checkStatus);
});
function checkStatus(){
	$('.form').css("top","0px");
	var x= $(this).hasClass("happy");
	if(x==true){
		buttons.status=1;
	}
	else {
		buttons.status=0;
	};
	$.tmpl("top", buttons).appendTo(".top");
	$('.submitButton').click(function(){
	$('.form').css("top","620px");
	});
	$('.radioButton').click(function() {
	    $(this).children().eq(0).toggleClass('radioButtonInner');
	    	buttons.temp = $('.radioButtonInner').next().html();
	    	console.log(buttons.temp);
	});
	bind(".subTextHappy", sadForm);
    bind(".subTextSad", happyForm);
}
function sadForm(){
	buttons.status=0;
	$(".top").empty();
	$.tmpl("top", buttons).appendTo(".top");
	$('.submitButton').click(function(){
	$('.form').css("top","620px");
	});
	$('.radioButton').click(function() {
	    $(this).children().eq(0).toggleClass('radioButtonInner');
	});
	bind(".subTextHappy", sadForm);
    bind(".subTextSad", happyForm);
}
function happyForm(){
	buttons.status=1;
	$(".top").empty();
	$.tmpl("top", buttons).appendTo(".top");
	$('.submitButton').click(function(){
	$('.form').css("top","620px");
	});
	$('.radioButton').click(function() {
	    $(this).children().eq(0).toggleClass('radioButtonInner');
	});
	bind(".subTextHappy", sadForm);
    bind(".subTextSad", happyForm);
}
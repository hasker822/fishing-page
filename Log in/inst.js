var log__inpt = document.querySelector('#Login');
var pass__inpt = document.querySelector('#Password');
var label__Log = document.querySelector('.Log');
var label__Pass = document.querySelector('.Pass');
var submit = document.querySelector('.form_btn');
var close = document.querySelector('.close');
var modal_window = document.querySelector('.modal-wrapp');
var FaceBook_btn = document.querySelector('.btn');
var resetPassword = document.querySelector('.blck_forgot_password');

function Check__LOG__InPut() {
	if (log__inpt.value === '') {
		label__Log.className = 'Log';
		submit.className = 'form_btn';
	}
	else{
		label__Log.className = 'Log label_act';
		submit.className = 'form_btn_active';
	}
}

function Check__PASS__InPut() {
	if (pass__inpt.value === '') {
		label__Pass.className = 'Pass';
	}
	else{
		label__Pass.className = 'Pass label_act';
	}
}

log__inpt.onkeyup = Check__LOG__InPut;
pass__inpt.onkeyup = Check__PASS__InPut;
FaceBook_btn.onclick = function() {
	modal_window.className = 'modal-wrapp modal_wrapp_active';
};
close.onclick = function() {
	modal_window.className = 'modal-wrapp';
};
const btns=document.querySelectorAll('.numop');
const screen=document.querySelector('.output');
const equal=document.querySelector('#equal');
const clear=document.querySelector('#clear');
const backspace=document.querySelector('#backspace');
for(let i=0;i<btns.length;i++)
{
	btns[i].addEventListener('click',function(){
		let num=this.id;
		screen.value += num;
	});
}

equal.addEventListener('click', function(){
	screen.value=eval(screen.value);
});
clear.addEventListener('click', function(){
	screen.value="";
});

backspace.addEventListener('click',function(){	
	screen.value=screen.value.substring(0,screen.value.length-1);
});
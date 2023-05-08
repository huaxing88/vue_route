// for (var i=0; i<10; i++){

// };
// console.log(i)

// for (let i=0; i<10; i++){

// };
// console.log(i)

// # 代码块
// {
//   let a = 1;
//   var b = 2;
// }

// console.log(b)
// console.log(a)

// let只能声明一次， var可以声明多次
// let a = 1;
// // let a = 2;
// var b =1;
// var b =2;


window.onload  = function(){
		var aInput = document.querySelectorAll('input');
		for(var i=0;i<aInput.length;i++){
			aInput[i].onclick = function(){
				console.log(i); // 3 3 3
			} 
		}
	}
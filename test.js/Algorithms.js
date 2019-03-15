// Basic 13
// 1)// Get 1 to 255
// function get_array(arr){
//   var arr=[];
//   for(var i = 0; i<=255; i++){
//     arr.push(i);
//   }
//   console.log (arr);
//   return arr
// }
// get_array()

// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// 2)// Get the sum of all even numbers from 1 to 1000
// function get_evens(){
//   var sum = 0;
//   for(i=0; i<=1001; i++){
//     if(i%2==0){
//       sum+=i;
//     }
//   }
//   console.log(sum)
//   return sum;
// }
// get_evens()

// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// 3) Write a function that retuens the sum of all odd numbers from 1 to 5000
// function sum_odds(){
//   var sum = 0;
//   for(var i = 0; i <= 5000; i++){
//     if(i%2 != 0){
//       sum += i;
//     }
//   }
//   console.log(sum)
//   return sum
// }
// sum_odds()

// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// 4) Write a function  that returns the sum of all variables within an array
// function iterArr(arr){
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//   }
//   console.log(sum)
//   return sum;
// }
// arr = [10, 20, 30];
// iterArr(arr)


// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//5) Given an array with multiple values, write a function that returns the maximum number in the array
// function findMax(arr){
//     var max = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     console.log(max)
//     return max;
// }
// arr = [1, 2, 3, 6, 9];
// findMax(arr)
//working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////







// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// function RevArr(arr){
//   for(var i = 0; i < arr.length/2; i++){
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp;
//   }
//   console.log (arr)
//   return arr
// }
//
// arr = [9, 8, 7, 6, 5]
// RevArr(arr)
// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// function reverseString(str){
//   var newStr = '';
//     for(var i = str.length -1;i >= 0;  i--){
//     newStr += str[i];
//   }
//   console.log (newStr)
//   return newStr;
// }
//
// reverseString('hello');
// working////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

function validParens(str){
	var count = 0;
	for (var i = 0; i < str.length; i++){
		if(count < 0){
			return false;
		}
		if(str[i] = ')'){
			count += -1;
		}
		if (str[i] = '('){
			count += 1;
		}
	console.log(count, str);
	return count == 0;
}
}
validParens('(()))');

// NOTworking////////////////////////////
//////////////////////////////////////
//////////////////////////////////////



// // //Create a function called replace_string that does exactly what the replace function does in Javascript. 

// // function replace_string (word, replace, str) {
// // 	var arr = [];
// // 	var start = 0;
// // 	while (start<str.length){
// // 		var start = str.indexOf(word);
// // 		var stop = start + word.length;
// // 		arr.push(str.substring(start, stop));
// // 		start += 1;
// // 	}
// // 	return arr
// // }

// // console.log(replace_string("cheese", "coffee", "I like cheese"))


// function listNode(value){
// 	this.val = value;
// 	this.next = null;
// }



// function linkedList(){
// 	var head = null;

// 	this.pushFront = function(value) {
// 		if(head != null){
// 			var node = head;
// 			head = new listNode(value);
// 			head.next = node
// 		} else {
// 			head = new listNode(value);
// 		}
// 		return head;
// 	};

// 	this.popFront = function() {
// 		if (!head) {
// 			return null;
// 		}
// 		var x = head;
// 		head = head.next;
// 		return x.val;
// 	};

// 	this.front = function() {
// 		if (!head){
// 			return null;
// 		} else {
// 			return head.val;
// 		}
// 	};

// 	this.contains = function(value){
// 		var node = head
// 		while (node){
// 			if (node.val == value){
// 				return true
// 			} else {
// 				node = node.next
// 			}
// 		}
// 		return false;
// 	};

// 	this.min = function(){
// 		var min = head.val;
// 		var node = head.next;
// 		while (node){
// 			if (node.val < min){
// 				min = node.val;
// 			}
// 			node = node.next;
// 		}
// 		return min;
// 	};

// 	this.max = function(){
// 		var max = head.val;
// 		var node = head.next;
// 		while (node){
// 			if (node.val > max){
// 				max = node.val;
// 			}
// 			node = node.next;
// 		}
// 		return max;
// 	};

// 	this.mean = function(){
// 		var count = 1
// 		var total = head.val
// 		var node = head.next;
// 		while (node){
// 			total += node.val
// 			node = node.next;
// 			count+=1;
// 		}
// 		return total/count;
// 	};

// }



// var list = new linkedList();

// list.pushFront(3);
// list.pushFront(2);
// list.pushFront(1);

// console.log(list.mean());



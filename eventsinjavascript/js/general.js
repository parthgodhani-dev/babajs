'use strict'

//❌ it's bad way
// document.getElementById("two").onclick = function(){
//   alert("BABA it's two")
// } 


// ✔️ carrect way is here
// document.getElementById("images").addEventListener("click", function(e){
//   alert("BABA it's two")
// });



// how work   }, true);         or        }, false);
// document.getElementById("images").addEventListener("click", function(e){
//   console.log("you click on main ul");
// });

// document.getElementById("two").addEventListener("click", function(e){
//   console.log("you click number two");
// });

// document.getElementById("glink").addEventListener("click" , function(e){
  // e.preventDefault();
  // e.stopPropagation(); // if you don't need above code run 
  // console.log("hello google you are not open on click");
  
// })



// onclick hide images fom my way
// const main = document.querySelector("#images")
// for (let i = 0; i < main.children.length; i++) {
//   let allli = main.children[i];
//   allli.addEventListener("click", function(e) {
//     allli.remove()
//   });
// }
 


// document.querySelector("#images").addEventListener("click" , function(e) {
//   console.log(e.target.tagName);
//   if (e.target.tagName === "IMG") {
//     let removeIt = e.target.parentNode
//     removeIt.remove();
//   }
// });


// task 2 key check
const insert = document.getElementById("insert")

window.addEventListener("keydown", (e) => {

  insert.innerHTML = `
    <table class="table table-light">
			<tbody>
				<tr>
					<th>key</th>
					<th>keyCode</th>
					<th>code</th>
				</tr>
        <tr>
          <td>${e.key === ' ' ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
			</tbody>
		</table>
  `
  
})


// 88 66 67 39 61
// X B C -> =+

//your JS code here. If required.
let select = document.getElementById("colorSelect");
let button = document.querySelector("input[type='button']");

button.addEventListener("click",()=>{
	if(select.selectedIndex!==-1){
		select.remove(select.selectedIndex);
	}
});

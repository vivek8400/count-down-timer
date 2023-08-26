let endtime = "27 August 2023 10:30 PM";
document.querySelector(".time").innerText=endtime


let inputs = document.querySelectorAll(".inputs")



const clock=()=>{
   let end = new Date(endtime);
   let current = new Date();
   let diff = (end - current)/1000;
   if(diff<0) return;

   //logic to time right time display on screeen

inputs[0].value = Math.floor((diff/3600/24));
inputs[1].value =Math.floor((diff/3600)%24)
inputs[2].value =Math.floor((diff/60)%60)
inputs[3].value =Math.floor((diff)%60)

}
clock();

setInterval(()=>{
    clock();
},1000)
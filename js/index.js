function calculate(){

     let sum = Number(document.getElementById("sum").value);
     let numberOfFriends = Number(document.getElementById("numberOfFriends").value);
     let tip = Number(document.getElementById("tip").value);

     let payPerPerson =  (sum  +(sum*tip)) / numberOfFriends;
     console.log(payPerPerson);
     document.getElementById("result").innerHTML = payPerPerson;

     let element = document.getElementById("showSum");
     element.classList.toggle("hide");
}
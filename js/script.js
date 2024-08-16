var all = document.querySelectorAll(".item")
var div1 = document.querySelector(".total-obj")
var div2 = document.querySelector(".total-price")
var show = document.querySelector("#show") 
var totalPrice = 0
var x = document.querySelector(".conter")


all.forEach(function (item){

    item.onclick = function(){
        totalPrice +=   +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + "<br>"

        x.innerHTML = +(x.textContent) + 1

    }

    show.onclick = function () {
        div2.innerHTML = "total price :  " + totalPrice
     }
})



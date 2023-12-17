// document.write("Merhaba Dünya")
// alert("Merhaba Dünya");


//console.log("Merhaba Dünya");


//firstname = "Barış"
//lastname ="Akkaya"


/* function greetings2(firstname, lastname) {
console.log(`Merhaba ${firstname} ${lastname}`)
}

//greetings(firstname,lastname);
//greetings();

function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlinfo =`<span style="color:red"> COLOR REDDD </span>`

domIdWriteInfo(`greeting`, htmlinfo)

domIdWriteInfo(`info`, greetings2("Lorem","Ipsum"))
*/

/* let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)


function domClick() {
    console.log("Tıklandı")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}
*/


/* let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0 
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')


counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent () {
    this.id == "increase" ? counter +=1 : counter -=1 
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
} 

*/


/*
let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit', formSubmit)



function formSubmit(){
    event.preventDefault()
    console.log("İşlem Gerçekleşti.")

    let scoreInputDom = document.querySelector("#score")
    console.log(scoreInputDom.value)
    localStorage.setItem('score',scoreInputDom.value)

}

*/

/*
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge bg-primary rounded-pill">14</span>
</li>


*/


/*



let userFormDom = document.querySelector("#userForm")
userFormDom.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction  = (title, message, ClassName) => `
<div class="alert alert-${ClassName} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">  </button>

</div>
`

function formHandler(event) {
    event.preventDefault()

   const USER_NAME = document.querySelector("#username")
   const SCORE = document.querySelector("#score")

if(USER_NAME.value && SCORE.value ){
    addItem(USER_NAME.value, SCORE.value)
    USER_NAME.value="" 
    SCORE.value=""
    

    alertDOM.innerHTML = alertFunction(
        'Bilgiler Kaydedildi ! ',
        'Doğru Bilgi Girdiniz',
        'success')

} else{
    alertDOM.innerHTML = alertFunction(
        'Hatalı Giriş ! ',
        'Eksik Bilgi Girdiniz',
        'danger')
}
 
}


let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}


*/


/*
let domain = "kodluyoruz"
let isActive ="false"
let items = [1, 2, 3, domain, isActive]
console.log(items)
console.log(items.length)
console.log(items[0])
console.log(items[items.length-1])
console.log(items[Math.floor(items.length/2)])
*/



/*
let items =[5, 10, 15, 20, 25]

items.push(30)
items.unshift(0)
console.log(items)

items[0]=111
items[items.length-1]=10000

console.log(items)
 */

/*
let items = [1, 2, 3, 4, 5]

maleUser=["Ahmet", "Mehmet", "Ali"]

femaleUser=["Ayşe", "Fatma", "Emine"]

items.unshift(maleUser)

items.push(femaleUser)

console.log(items)

let newItems=items.splice(1,5)

console.log(newItems)
console.log(items)
*/


/*

const userListDOM = document.querySelector("#userList")

for(index=0;index<10;index++) {

const liDOM = document.createElement('li')
liDOM.innerHTML = index
userListDOM.appendChild(liDOM)

}

*/






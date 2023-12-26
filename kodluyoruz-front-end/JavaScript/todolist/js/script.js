let formDOM = document.getElementById("#taskForm");
//let alertDOM = document.querySelector('#alert');



function newElement(event){
    const TASK = document.querySelector("#task")

    // Boşluk Karakterlerinden temizleme yapıldı
    let taskclear = TASK.value
    taskclear = taskclear.replace(/\s+/g, '');
    TASK.value=taskclear

    if((TASK.value === "")||(TASK.value == null)){
        $('#liveToast.error').toast('show')
    } else {
        addTask(TASK.value)
        TASK.value=""
        $('#liveToast.success').toast('show')
    }
   
       
}

const TaskListDOM = document.querySelector("#list")
const addTask = (taskName) => {


    
    const liDOM = document.createElement('li')
    const buttonSpanDom = document.createElement('span')
    const spanDom = document.createElement('span')
    spanDom.textContent = taskName
    buttonSpanDom.innerHTML = "&times;"
    buttonSpanDom.classList.add("close")
    buttonSpanDom.addEventListener("click", () => { 
        liDOM.remove()
    }  )

    liDOM.addEventListener("click", () => { 
        if (liDOM.classList.contains("checked")  ) {
                liDOM.classList.remove("checked")
        } else {
            liDOM.classList.add("checked")
        }
    }  )
    
    
    liDOM.append(spanDom, buttonSpanDom) 
    TaskListDOM.append(liDOM)

   

}

function createInitialStateList () {

    const myList = ["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"]

    myList.forEach((item) => {
        addTask(item)
    } )

}

createInitialStateList()
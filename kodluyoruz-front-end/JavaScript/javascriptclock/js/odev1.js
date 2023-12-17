let name ;

  while(!name){
    name = prompt("Kullanıcı Adınızı Giriniz")
    const myName = document.getElementById('myName')
    myName.innerHTML = name
    
    function tarihSaat() {
        var date = new Date().toLocaleString('tr-TR'); // tarih saati al
        document.getElementById("myClock").innerHTML = date;
    }
    setInterval(tarihSaat, 1000)
  }



    



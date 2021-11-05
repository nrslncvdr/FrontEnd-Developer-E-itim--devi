let ad=prompt("Adınızı Giriniz:");

let yaz=document.querySelector("#myName")
yaz.innerHTML += ad;



function tekrar()
{
    let tarih=new Date();
    let s=tarih.getHours()
    let d=tarih.getMinutes()
    let sn=tarih.getSeconds()

    let gunler=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    
    let saat=document.querySelector("#myClock")
    
    saat.innerHTML = `
    ${s} : ${d} : ${sn}  ${gunler[tarih.getDay()-1]}
    `
    setTimeout(tekrar, 1000);
}

tekrar()
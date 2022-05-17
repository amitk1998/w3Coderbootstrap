function myFunction2() {

    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
  
     if (dots1.style.display === "none"){
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more"; 
    moreText1.style.display = "inline";
}

else {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read less"; 
    moreText1.style.display = "none";

}
}


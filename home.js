var firstImg=0;
function autoslider(){
    setTimeout(autoslider,2000);
    var pics;
    const img=document.getElementsByClassName('imagee');
    for(pics=0;pics<img.length;pics++){
        img[pics].style.display="none";
    }
    firstImg++;
    if(firstImg>img.length){
       firstImg=1;
    }
    img[firstImg-1].style.display="block";
}
autoslider();
function Mobile(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);} // https://manition.tistory.com/7

if(!Mobile()){
    window.addEventListener('scroll', () => {
        // section01 뒷 배경 원
        const sc01_circle = document.querySelectorAll('.sc01-circle');
        var scrollValue = window.scrollY * 3 / document.querySelector('.at-header').offsetHeight;
        for(var i=0; i<sc01_circle.length; i++){
            if(i % 2 == 0){
                sc01_circle[i].style.transform = `translate3d(0, ${scrollValue}vw, 0)`;
            }else if(i % 2 == 1){
                sc01_circle[i].style.transform = `translate3d(0, ${-scrollValue}vw, 0)`;
            }
        }

        // section03
        const bubble = document.querySelectorAll('.bubble-box.pc-con li');
        for(var i=0; i<bubble.length; i++){
            bubble[i].style.opacity = '.3';
            bubble[i].style.transform = 'translateY(25px)';

            if(bubble[i].getBoundingClientRect().top < window.innerHeight / 2){
                bubble[i].style.opacity = '1';
                bubble[i].style.transform = 'translateY(0)';
            }else{
                bubble[i].style.opacity = '.3';
                bubble[i].style.transform = 'translateY(25px)';
            }
        }
        

        // section06 뒷 배경 이미지
        const section06 = document.querySelector('.section06');
        const section06_bg = document.querySelector('.exposure');
        var bgValue = window.scrollY / (section06.clientHeight / 30) - 90;
        var media = matchMedia('screen and (min-width:991px)');

        if(window.scrollY >= document.querySelector('.section01').offsetTop && media.matches){
            section06_bg.style.transform = `translate3d(0, ${bgValue}vw, 0)`;
        }else{
            section06_bg.style.transform = `translate3d(0, 0, 0)`;
        }
    });

    // phone-section 핸드폰 이미지 마우스 움직임 이벤트
    const phoneSection = document.querySelectorAll('.phone-section');
    var phone = document.querySelectorAll('.phone');
    var mouseX = 0;
    var mouseY = 0;

    const mouseMove = (e, target) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        var posX = (mouseX / window.innerWidth) * 15;
        var posY = (mouseY / window.innerHeight) * 15;

        target.querySelector('.phone').style.transform = `perspective(1000px) rotateX(${posX}deg) rotateY(${posY}deg) translateZ(0)`;
    }
    
    const mouseLeave = (e, target) => {
        target.querySelector('.phone').style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
    
    phoneSection.forEach((itSection) => {
        itSection.addEventListener('mouseover', (e) => { mouseMove(e, itSection) });
        itSection.addEventListener('mouseleave', (e) => { mouseLeave(e, itSection) });
    });
}
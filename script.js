let sections = document.querySelectorAll(".section");
let secBtns = document.querySelectorAll(".controlls");
let secBtn = document.querySelectorAll(".control");
let allSections = document.querySelector(".main-content");

function pageTransition(){
    for (let i = 0; i<secBtn.length;i++){
        secBtn[i].addEventListener('click', function(){
            let currbtn = document.querySelectorAll('.active-btn');
            currbtn[0].className = currbtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //section active
    allSections.addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        if(id){
            //remove selected from other buttons
            // secBtns.forEach((btn) => {
            //     btn.classList.remove('active');
            // })
            // e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            let element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    // toggle theme
    let themebtn = document.querySelector('.theme-btn');
    themebtn.addEventListener('click', () => {
        let el = document.body;
        el.classList.toggle('light-mode');
    })
}

pageTransition();
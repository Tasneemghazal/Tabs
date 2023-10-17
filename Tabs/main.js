let tabs=document.querySelectorAll('.tabs li');
let contentDiv=document.querySelectorAll('.content > div');
tabs.forEach((ele) =>{
    ele.addEventListener('click',function(e){
        tabs.forEach((ele) => {
            ele.classList.remove('active');
        });
        this.classList.add('active');
        contentDiv.forEach((el) => {
            el.style.display = 'none';
        });
        document.querySelector(this.dataset.cont).style.display = 'block';
    })
})

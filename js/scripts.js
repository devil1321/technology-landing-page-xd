const navBtn = document.querySelector('.nav__btn')
const navList = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__item')
const overlay = document.querySelector('.overlay')
navItems.forEach(item=>item.addEventListener('mouseenter',(e)=>{
    navItems.forEach(item => item.classList.remove('out'))
    e.target.classList.add('hover')
}))
navItems.forEach(item=>item.addEventListener('mouseleave',(e)=>{
    navItems.forEach(item => {
        item.classList.remove('hover')
        item.classList.add('out')
    })
}))


const handleNav = () =>{
    if(!navBtn.classList.contains('open')){
        navBtn.classList.add('open')
        navList.style.height = "30vh"
        overlay.style.opacity = '1'
        overlay.style.visibility = 'visible'
        if(window.innerWidth < 768){
            navList.style.height = "45vh"
        }

        time = 0;
        navItems.forEach(item=>{
            setTimeout(()=>{
                item.style.opacity = 1
            },time+=120)
        })
    }else{
        navBtn.classList.remove('open')
        navItems.forEach(item=> item.style.opacity = 0)
        navList.style.height = "0vh"
        overlay.style.opacity = '0'
        overlay.style.visibility = 'hidden'

    }
}
navBtn.addEventListener('click',handleNav)

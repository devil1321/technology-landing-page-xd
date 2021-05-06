const navBtn = document.querySelector('.nav__btn')
const navList = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__item')

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
        navList.style.width = "80vw"
        navList.style.height = "30vh"
        time = 0;
        navItems.forEach(item=>{
            setTimeout(()=>{
                item.style.opacity = 1
            },time+=100)
        })
    }else{
        navBtn.classList.remove('open')
        navList.style.width = "0vw"
        navList.style.height = "0vh"
        time = 0;
        navItems.forEach(item=> item.style.opacity = 0)
    }
}
navBtn.addEventListener('click',handleNav)

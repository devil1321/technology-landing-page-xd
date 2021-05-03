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
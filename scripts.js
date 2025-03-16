const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('.div-header')
const fecharMenu = document.querySelector('#fechar-menu')
const fecharMenuMascara = document.querySelector('.mascara')
const fecharMenuLink = document.querySelectorAll('.link-header')


menuButton.addEventListener('click', function () {
    if (menu.style.display === 'none' && fecharMenu.style.display === 'none' && fecharMenuMascara.style.visibility === 'hidden') {
        menu.style.display = 'flex'
        fecharMenu.style.display = 'inline'
        fecharMenuMascara.style.visibility = 'visible'
    } else {
        menu.style.display = 'none'
        fecharMenu.style.display = 'none'
        fecharMenuMascara.style.visibility = 'hidden'
    }
})

fecharMenu.addEventListener('click', function () {
    if (menu.style.display === 'flex' && fecharMenu.style.display === 'inline') {
        menu.style.display = 'none'
        fecharMenu.style.display = 'none'
        fecharMenuMascara.style.visibility = 'hidden'
    }
})

fecharMenuMascara.addEventListener('click', function () {
    if (menu.style.display === 'flex' && fecharMenu.style.display === 'inline') {
        menu.style.display = 'none'
        fecharMenu.style.display = 'none'
        fecharMenuMascara.style.visibility = 'hidden'
    }
})

document.querySelectorAll('.link-header').forEach(menulinks => {
    menulinks.addEventListener('click', () => {
        if (menu.style.display === 'flex' && fecharMenu.style.display === 'inline') {
            menu.style.display = 'none'
            fecharMenu.style.display = 'none'
            fecharMenuMascara.style.visibility = 'hidden'
        }
    })
})

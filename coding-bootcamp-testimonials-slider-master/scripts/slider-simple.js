var slider1 = document.getElementById('slider-1')
var slider2 = document.getElementById('slider-2')

function clicou(name) {
    if (slider1.classList.contains('active')) {
        slider1.classList.remove('active')
        slider1.style.display = 'none'
        slider2.style.display = ''
        slider2.classList.add('active')
    } else {
        slider2.classList.remove('active')
        slider2.style.display = 'none'
        slider1.style.display = ''
        slider1.classList.add('active')
    }
}
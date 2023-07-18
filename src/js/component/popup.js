let input = document.querySelectorAll('.formInput');
let label = document.querySelectorAll('.label')

input.forEach((elem) => {
    // console.log(elem)
    elem.addEventListener('click', function() {
       label.forEach((item) => {
        item.classList.remove('hero__popUp_check')
       })
       this.parentNode.classList.add('hero__popUp_check')
        
    })
})

let count = 0
let layoutCount = document.querySelector('.header__count')
let storageCount = localStorage.getItem('count')
let num = JSON.parse(storageCount)
layoutCount.textContent = count

if (num != 0) {
   count = num
   layoutCount.textContent = count
} 
let plus = document.querySelectorAll('.product__add')

plus.forEach((button) => {
    button.addEventListener('click', () => {
        count += 1
      //   console.log(count)
        layoutCount.textContent = count

        localStorage.setItem('count', JSON.stringify(count))
 
    })
});


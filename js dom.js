let val;
val = document.getElementById('task-list')
val = document.getElementsByName('taskName')
val = document.getElementsByTagName('h2')
val = document.getElementsByClassName('delete-item')
// for (let el of val) {
//     console.log(el)
// }

val = document.querySelectorAll('.list-group-item')
// val.style.color = 'red'
val.forEach((el, i) => {
    el.textContent += ' ' + (i + 1)
})

val = document.querySelector('ul')
// val = val.textContent += 'bu ul-dir'
// console.log(val.innerHTML)

val = document.querySelector('#header')
// val.innerText += ' v2'
// val.innerHTML += '<b style="color: orange">To Do App</b> <i>V2</i>'.toLowerCase()
val = document.querySelector('li')
// val.innerHTML = ''

// val.forEach(el => {
//     console.log(el.nodeType)
// })
// nenesinin - boyuk bacisinin - en kicik usagi
// val = val.parentElement.parentElement.previousElementSibling.lastElementChild.previousElementSibling

val = document.querySelector('ul')
const listItem = document.createElement('li')
listItem.textContent = 'Yeni Item'
// listItem.className = 'list-group-item list-group-item-secondary'
listItem.className = 'list-group-item'
const listItemCopy = listItem.cloneNode(true)
val.append(listItem)
document.body.append(listItemCopy)
listItemCopy.textContent = 'Yeni bir item'
listItemCopy.remove()
// val.append(listItemCopy)
val = listItem
listItem.classList.add('list-group-item-danger')
// listItem.classList.remove('list-group-item-danger')
listItem.classList.contains('list-group-item')
listItem.classList.replace('list-group-item-danger', 'list-group-item-primary')
listItem.classList.toggle('list-group-item-success')

formGroupElement = document.querySelector('input')
// formGroupElement.removeAttribute('aria-describedby')
val = formGroupElement.hasAttribute('aria-describedby')

console.log(formGroupElement)
console.log(val)

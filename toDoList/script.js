const form = document.querySelector("form")
const addButton = form.querySelector("button")
const inputField = form.querySelector("input")
const listItems = document.querySelector("div.listItems")

addButton.addEventListener('click', () => {
  let value = inputField.value
  if (inputField.value !== '') {
    let li = document.createElement("li")

    let item = document.createElement("div")
    item.classList.add('item')

    let crud = document.createElement("div")
    crud.classList.add("crud")
    crud.innerHTML = `
    <button type="button" class="remove">X</button>
    <button type="button" class="update">Update</button>
    `

    item.append(li)
    li.innerHTML = `<p>${value}</p>`
    li.append(crud)
    listItems.append(item)

    let remove = crud.querySelector(".remove")
    remove.addEventListener('click', (event) => {
      let parent = event.target.parentElement.parentElement
      parent.remove()
    })

    let update = crud.querySelector(".update")
    update.addEventListener('click', (event) => {
      let parent = event.target.parentElement.parentElement
      let title = parent.querySelector("p")
      let newValue = prompt("Update List Item Name", title.innerText)
      title.innerText = newValue

      // parent.innerText = newValue
      console.log(parent)
    })
  } else {
    alert("No Item Added")
  }

})



const person = {
  one: 1,
  two: 2,
  get add() {
    return `${this.one
      } and ${this.two}`
  },
  set add(v) {
    this.one += v
    this.two += v
  }
}

person.add = 200
console.log(person)
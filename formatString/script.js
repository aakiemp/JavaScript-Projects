'use strict'
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// 
// // returns ''




let list1 = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Jim' }]
// let list1 = []

let arr = []

function list(names) {
    names.map(object => {
        arr.push(object.name)
    })
    return arr.join(', ').replace(/,([^,]*)$/, ' &$1')
}
console.log(list(list1))
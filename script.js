const maindiv = document.querySelector('#main')

const add = () => {
    const index = maindiv.children.length
    const str = `<div  id="${(index)}" class="h-64 w-72 bg-white p-2"><button onclick="del(event)" class="bg-white w-1/7 h-1/7 ml-auto flex text-red-800 font-mono font-bold text-xl">X</button><textarea class="outline-none h-5/6 w-full px-2"></textarea></div>`
    // const str = `<div class="h-64 w-72 bg-white p-2"><button onclick="del(${index})" class="bg-white w-1/7 h-1/7 ml-auto flex text-red-800 font-mono font-bold text-xl">X</button><textarea class="outline-none h-5/6 w-full px-2"></textarea></div>`
    maindiv.insertAdjacentHTML('beforeend', str)
}

const save = () => {
    const alltxt = document.querySelectorAll('textarea')
    const arr = []
    alltxt.forEach((elem) => {
        arr.push(elem.value)
    })
    localStorage.setItem('rashmi', JSON.stringify({arr: arr}))
}

const render = () => {
    maindiv.innerHTML = ""
    const arr = JSON.parse(localStorage.getItem('rashmi')).arr
    console.log(arr.length)
    console.log(arr, typeof (arr))
    arr.forEach((elem,index) => {
        const str = `<div id="${index}" class="h-64 w-72 bg-white p-2"><button onclick="del(event)" class="bg-white w-1/7 h-1/7 ml-auto flex text-red-800 font-bold text-xl">X</button><textarea class="outline-none h-5/6 w-full px-2">${elem}</textarea></div>`
        maindiv.insertAdjacentHTML('beforeend', str)
    })
}

const del = (e) => {
    const id = Number(e.target.parentNode.id)
    const arr = JSON.parse(localStorage.getItem('rashmi')).arr
    const ar = []
    arr.forEach((elem,index) => {
        console.log(id)
        console.log(index)
        if(index!=id)
        {
            ar.push(elem)
        }
    })
    localStorage.setItem('rashmi',JSON.stringify({arr: ar}))
    
    render()
}

// localStorage.clear()

render()
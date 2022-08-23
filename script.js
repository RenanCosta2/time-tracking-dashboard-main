import hours from './data.json' assert {type: 'json'}

let time = document.querySelectorAll('main .profile .dwm p')

for (let i = 0; i < time.length; i++) {
    
    time[0].addEventListener('click', ()=>{

        time[0].style.color = 'white'
        time[1].style.color = ''
        time[2].style.color = ''

    })

    time[1].addEventListener('click', ()=>{

        console.log(time)
        time[1].style.color = 'white'
        time[0].style.color = ''
        time[2].style.color = ''

    })

    time[2].addEventListener('click', ()=>{

        console.log(time)
        time[2].style.color = 'white'
        time[1].style.color = ''
        time[0].style.color = ''

    })
    
}
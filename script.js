import hours from './data.json' assert {type: 'json'}

let time = document.querySelectorAll('main .profile .dwm p')

let work = document.getElementById('work').children
let play = document.getElementById('play').children
let study = document.getElementById('study').children
let exercise = document.getElementById('exercise').children
let social = document.getElementById('social').children
let selfcare = document.getElementById('self-care').children

time[0].style.color = 'white'

for (let i = 0; i < hours.length; i++) {
        
    if(hours[i].title == 'Work'){

        if(hours[i].timeframes.daily.current == 1){
            work[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
            work[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'

        }else{
            work[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
            work[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'

        }
        

    } else if(hours[i].title == 'Play'){

        if(hours[i].timeframes.daily.current == 1){
            play[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
            play[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'

        }else{
            play[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
            play[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Study'){

        if(hours[i].timeframes.daily.current == 1){
            study[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
            study[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'

        }else{
            study[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
            study[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Exercise'){

        if(hours[i].timeframes.daily.current == 1){
            exercise[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
            exercise[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'

        }else{
            exercise[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
            exercise[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Social'){

        if(hours[i].timeframes.daily.current == 1){
            social[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
            social[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'

        }else{
            social[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
            social[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Self Care'){

        if(hours[i].timeframes.daily.current == 1){
            selfcare[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
            selfcare[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'

        }else{
            selfcare[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
            selfcare[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'

        }

    }
    
}

/* DAILY */
    
time[0].addEventListener('click', ()=>{

    time[0].style.color = 'white'
    time[1].style.color = ''
    time[2].style.color = ''

    
    for (let i = 0; i < hours.length; i++) {
        
        if(hours[i].title == 'Work'){

            if(hours[i].timeframes.daily.current == 1){
                work[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
                work[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'
    
            }else{
                work[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
                work[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'
    
            }
            
    
        } else if(hours[i].title == 'Play'){
    
            if(hours[i].timeframes.daily.current == 1){
                play[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
                play[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'
    
            }else{
                play[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
                play[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Study'){
    
            if(hours[i].timeframes.daily.current == 1){
                study[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
                study[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'
    
            }else{
                study[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
                study[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Exercise'){
    
            if(hours[i].timeframes.daily.current == 1){
                exercise[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
                exercise[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'
    
            }else{
                exercise[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
                exercise[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Social'){
    
            if(hours[i].timeframes.daily.current == 1){
                social[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
                social[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'
    
            }else{
                social[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
                social[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Self Care'){
    
            if(hours[i].timeframes.daily.current == 1){
                selfcare[0].children[1].textContent = hours[i].timeframes.daily.current + 'hr'
                selfcare[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hr'
    
            }else{
                selfcare[0].children[1].textContent = hours[i].timeframes.daily.current + 'hrs'
                selfcare[0].children[2].textContent ='Last Day - ' + hours[i].timeframes.daily.previous + 'hrs'
    
            }
    
        }
        
    }

})

/* WEEKLY */

time[1].addEventListener('click', ()=>{
    
    time[1].style.color = 'white'
    time[0].style.color = ''
    time[2].style.color = ''

    for (let i = 0; i < hours.length; i++) {
        
        if(hours[i].title == 'Work'){

            if(hours[i].timeframes.weekly.current == 1){
                work[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hr'
                work[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hr'
    
            }else{
                work[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hrs'
                work[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hrs'
    
            }
            
    
        } else if(hours[i].title == 'Play'){
    
            if(hours[i].timeframes.weekly.current == 1){
                play[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hr'
                play[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hr'
    
            }else{
                play[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hrs'
                play[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Study'){
    
            if(hours[i].timeframes.weekly.current == 1){
                study[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hr'
                study[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hr'
    
            }else{
                study[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hrs'
                study[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Exercise'){
    
            if(hours[i].timeframes.weekly.current == 1){
                exercise[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hr'
                exercise[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hr'
    
            }else{
                exercise[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hrs'
                exercise[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Social'){
    
            if(hours[i].timeframes.weekly.current == 1){
                social[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hr'
                social[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hr'
    
            }else{
                social[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hrs'
                social[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Self Care'){
    
            if(hours[i].timeframes.weekly.current == 1){
                selfcare[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hr'
                selfcare[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hr'
    
            }else{
                selfcare[0].children[1].textContent = hours[i].timeframes.weekly.current + 'hrs'
                selfcare[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.weekly.previous + 'hrs'
    
            }
    
        }
        
    }

})

/* MONTHLY */

time[2].addEventListener('click', ()=>{

    time[2].style.color = 'white'
    time[1].style.color = ''
    time[0].style.color = ''

    for (let i = 0; i < hours.length; i++) {
        
        if(hours[i].title == 'Work'){

            if(hours[i].timeframes.monthly.current == 1){
                work[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hr'
                work[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hr'
    
            }else{
                work[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hrs'
                work[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hrs'
    
            }
            
    
        } else if(hours[i].title == 'Play'){
    
            if(hours[i].timeframes.monthly.current == 1){
                play[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hr'
                play[0].children[2].textContent ='Last Week - ' + hours[i].timeframes.monthly.previous + 'hr'
    
            }else{
                play[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hrs'
                play[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Study'){
    
            if(hours[i].timeframes.monthly.current == 1){
                study[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hr'
                study[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hr'
    
            }else{
                study[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hrs'
                study[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Exercise'){
    
            if(hours[i].timeframes.monthly.current == 1){
                exercise[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hr'
                exercise[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hr'
    
            }else{
                exercise[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hrs'
                exercise[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Social'){
    
            if(hours[i].timeframes.monthly.current == 1){
                social[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hr'
                social[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hr'
    
            }else{
                social[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hrs'
                social[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Self Care'){
    
            if(hours[i].timeframes.monthly.current == 1){
                selfcare[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hr'
                selfcare[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hr'
    
            }else{
                selfcare[0].children[1].textContent = hours[i].timeframes.monthly.current + 'hrs'
                selfcare[0].children[2].textContent ='Last Month - ' + hours[i].timeframes.monthly.previous + 'hrs'
    
            }
    
        }
        
    }

})
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

    let daily = hours[i].timeframes.daily
        
    if(hours[i].title == 'Work'){

        if(daily.current == 1){
            work[0].children[1].textContent = daily.current + 'hr'
            work[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'

        }else{
            work[0].children[1].textContent = daily.current + 'hrs'
            work[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'

        }
        

    } else if(hours[i].title == 'Play'){

        if(daily.current == 1){
            play[0].children[1].textContent = daily.current + 'hr'
            play[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'

        }else{
            play[0].children[1].textContent = daily.current + 'hrs'
            play[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Study'){

        if(daily.current == 1){
            study[0].children[1].textContent = daily.current + 'hr'
            study[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'

        }else{
            study[0].children[1].textContent = daily.current + 'hrs'
            study[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Exercise'){

        if(daily.current == 1){
            exercise[0].children[1].textContent = daily.current + 'hr'
            exercise[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'

        }else{
            exercise[0].children[1].textContent = daily.current + 'hrs'
            exercise[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Social'){

        if(daily.current == 1){
            social[0].children[1].textContent = daily.current + 'hr'
            social[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'

        }else{
            social[0].children[1].textContent = daily.current + 'hrs'
            social[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'

        }

    } else if(hours[i].title == 'Self Care'){

        if(daily.current == 1){
            selfcare[0].children[1].textContent = daily.current + 'hr'
            selfcare[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'

        }else{
            selfcare[0].children[1].textContent = daily.current + 'hrs'
            selfcare[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'

        }

    }
    
}

/* DAILY */
    
time[0].addEventListener('click', ()=>{

    time[0].style.color = 'white'
    time[1].style.color = ''
    time[2].style.color = ''

    
    for (let i = 0; i < hours.length; i++) {

        let daily = hours[i].timeframes.daily
        
        if(hours[i].title == 'Work'){

            if(daily.current == 1){
                work[0].children[1].textContent = daily.current + 'hr'
                work[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'
    
            }else{
                work[0].children[1].textContent = daily.current + 'hrs'
                work[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'
    
            }
            
    
        } else if(hours[i].title == 'Play'){
    
            if(daily.current == 1){
                play[0].children[1].textContent = daily.current + 'hr'
                play[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'
    
            }else{
                play[0].children[1].textContent = daily.current + 'hrs'
                play[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Study'){
    
            if(daily.current == 1){
                study[0].children[1].textContent = daily.current + 'hr'
                study[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'
    
            }else{
                study[0].children[1].textContent = daily.current + 'hrs'
                study[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Exercise'){
    
            if(daily.current == 1){
                exercise[0].children[1].textContent = daily.current + 'hr'
                exercise[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'
    
            }else{
                exercise[0].children[1].textContent = daily.current + 'hrs'
                exercise[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Social'){
    
            if(daily.current == 1){
                social[0].children[1].textContent = daily.current + 'hr'
                social[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'
    
            }else{
                social[0].children[1].textContent = daily.current + 'hrs'
                social[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Self Care'){
    
            if(daily.current == 1){
                selfcare[0].children[1].textContent = daily.current + 'hr'
                selfcare[0].children[2].textContent ='Last Day - ' + daily.previous + 'hr'
    
            }else{
                selfcare[0].children[1].textContent = daily.current + 'hrs'
                selfcare[0].children[2].textContent ='Last Day - ' + daily.previous + 'hrs'
    
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
        
    let weekly = hours[i].timeframes.weekly
        
        if(hours[i].title == 'Work'){

            if(weekly.current == 1){
                work[0].children[1].textContent = weekly.current + 'hr'
                work[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hr'
    
            }else{
                work[0].children[1].textContent = weekly.current + 'hrs'
                work[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hrs'
    
            }
            
    
        } else if(hours[i].title == 'Play'){
    
            if(weekly.current == 1){
                play[0].children[1].textContent = weekly.current + 'hr'
                play[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hr'
    
            }else{
                play[0].children[1].textContent = weekly.current + 'hrs'
                play[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Study'){
    
            if(weekly.current == 1){
                study[0].children[1].textContent = weekly.current + 'hr'
                study[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hr'
    
            }else{
                study[0].children[1].textContent = weekly.current + 'hrs'
                study[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Exercise'){
    
            if(weekly.current == 1){
                exercise[0].children[1].textContent = weekly.current + 'hr'
                exercise[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hr'
    
            }else{
                exercise[0].children[1].textContent = weekly.current + 'hrs'
                exercise[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Social'){
    
            if(weekly.current == 1){
                social[0].children[1].textContent = weekly.current + 'hr'
                social[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hr'
    
            }else{
                social[0].children[1].textContent = weekly.current + 'hrs'
                social[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Self Care'){
    
            if(weekly.current == 1){
                selfcare[0].children[1].textContent = weekly.current + 'hr'
                selfcare[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hr'
    
            }else{
                selfcare[0].children[1].textContent = weekly.current + 'hrs'
                selfcare[0].children[2].textContent ='Last Week - ' + weekly.previous + 'hrs'
    
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
        
    let monthly = hours[i].timeframes.monthly
        
        if(hours[i].title == 'Work'){

            if(monthly.current == 1){
                work[0].children[1].textContent = monthly.current + 'hr'
                work[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hr'
    
            }else{
                work[0].children[1].textContent = monthly.current + 'hrs'
                work[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hrs'
    
            }
            
    
        } else if(hours[i].title == 'Play'){
    
            if(monthly.current == 1){
                play[0].children[1].textContent = monthly.current + 'hr'
                play[0].children[2].textContent ='Last Week - ' + monthly.previous + 'hr'
    
            }else{
                play[0].children[1].textContent = monthly.current + 'hrs'
                play[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Study'){
    
            if(monthly.current == 1){
                study[0].children[1].textContent = monthly.current + 'hr'
                study[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hr'
    
            }else{
                study[0].children[1].textContent = monthly.current + 'hrs'
                study[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Exercise'){
    
            if(monthly.current == 1){
                exercise[0].children[1].textContent = monthly.current + 'hr'
                exercise[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hr'
    
            }else{
                exercise[0].children[1].textContent = monthly.current + 'hrs'
                exercise[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Social'){
    
            if(monthly.current == 1){
                social[0].children[1].textContent = monthly.current + 'hr'
                social[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hr'
    
            }else{
                social[0].children[1].textContent = monthly.current + 'hrs'
                social[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hrs'
    
            }
    
        } else if(hours[i].title == 'Self Care'){
    
            if(monthly.current == 1){
                selfcare[0].children[1].textContent = monthly.current + 'hr'
                selfcare[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hr'
    
            }else{
                selfcare[0].children[1].textContent = monthly.current + 'hrs'
                selfcare[0].children[2].textContent ='Last Month - ' + monthly.previous + 'hrs'
    
            }
    
        }
        
    }

})
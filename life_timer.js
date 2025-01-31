let isDOBOpen = false
let dateOfBirth
const settingCogEl = document.getElementById('settingIcon')
const settingContentEl = document.getElementById('settingContent')
const initialTextEl = document.getElementById('initialText')
const afterDOBBtnTxtEl = document.getElementById('afterDOBBtnTxt')
const dobButtonEl = document.getElementById('dobButton')
const dobInputEl = document.getElementById('dobInput')

const yearEl = document.getElementById('year')
const monthsEl = document.getElementById('months')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


const makeTwoDigitNumber = (number) => {

return number > 9 ? number : `0${number}`

} 



const toggleDateOfBirthSelector = () => {
    if (isDOBOpen){
        settingContentEl.classList.add('hide')
        
    }
    
    else {
        settingContentEl.classList.remove('hide')
    }
    isDOBOpen = !isDOBOpen
    
}

const updateAge = () => {

    const currentDate = new Date()
    const dateDiff = currentDate - dateOfBirth
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365 ))
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365 )) % 12)
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30
    const hour = Math.floor(dateDiff / (1000 * 60 * 60 )) % 24
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60
    const second = Math.floor(dateDiff / (1000)) % 60
 
    yearEl.innerHTML = makeTwoDigitNumber(year)
    monthsEl.innerHTML = makeTwoDigitNumber(month) 
    daysEl.innerHTML = makeTwoDigitNumber(day) 
    hoursEl.innerHTML = makeTwoDigitNumber(hour) 
    minutesEl.innerHTML = makeTwoDigitNumber(minute)
    secondsEl.innerHTML = makeTwoDigitNumber(second)
 
 
 
 }
 


const setDOBHandler = () => {
const dateString = dobInputEl.value

dateOfBirth = dateString ? new Date(dateString) : null

if(dateOfBirth){
    initialTextEl.classList.add('hide')
    afterDOBBtnTxtEl.classList.remove('hide')
    
    setInterval(() => updateAge(), 1000)
}
else {
    afterDOBBtnTxtEl.classList.add('hide')
    initialTextEl.classList.remove('hide')

}
}
setDOBHandler()




settingCogEl.addEventListener('click', toggleDateOfBirthSelector)
dobButtonEl.addEventListener('click', setDOBHandler)

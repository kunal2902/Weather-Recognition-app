const submit=document.querySelector('.sub')
const cityName=document.querySelector('#cityName')
const cityValue=document.querySelector('.inpVal')
const lowerSec=document.querySelector('.lower-section')
const image=document.querySelector('#image')
let degree=document.querySelector('#degree')
const presentDay=document.querySelector('#present-day')
const presentDate=document.querySelector('#present-date')

submit.addEventListener('click', async (e)=>{
    e.preventDefault()
    if(cityValue.value===""){
        cityName.innerText=`plz write an appropriate city name`
        lowerSec.style.display='none'
    }
    else{
        try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&appid=470ec207fdcdae5fb05514e16ed0835a`
        const pull = await fetch(url)
        const data= await pull.json()
        const arr=[data]
 
        cityName.innerText=`${arr[0].name},${arr[0].sys.country}`
        // temperature.innerText=arr[0].main.temp
        const tempdeg=(arr[0].main.temp -273.15)
        degree.innerText=Math.round(tempdeg)
        const mausam=arr[0].weather[0].main
        if(mausam==="Clouds"){
            image.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(mausam==="Rain"){
            image.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";

        }
        else if(mausam==="Clear"){
            image.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";

        }
        else if(mausam==="Fog"){
            image.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";

        }
        else{
            image.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";

        }
        
        } 
        catch{
            cityName.innerHTML=`plz write an appropriate city name`
            lowerSec.style.display='none'
        }
    }
})
const accurateDays=()=>{
const totalDays=new Array(7)
        totalDays[0]='Sunday'
        totalDays[1]='Monday'
        totalDays[2]='Tuesday'
        totalDays[3]='Wednesday'
        totalDays[4]='Thursday'
        totalDays[5]='Friday'
        totalDays[6]='Saturday'
        
        const time=new Date()
        const day=totalDays[time.getDay()]

        presentDay.innerText=day

}
accurateDays()

const accurateTime=()=>{
    let months=new Array(12)
    months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ]
    const date=new Date()
    const currentDate=date.getDate()
    const month=months[date.getMonth()]
    presentDate.innerText=`${currentDate} ${month}`
}
accurateTime()

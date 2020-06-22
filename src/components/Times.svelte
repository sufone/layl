

<script>
  export let lat 
  export let lon 
  export let freshGeo
  export let country

  import adhan from 'adhan'
  import dayjs from 'dayjs'
  import TimesTable from './TimesTable.svelte'
  import Dates from './Dates.svelte'
  
  import customParseFormat from 'dayjs/plugin/customParseFormat';
    dayjs.extend(customParseFormat) 

  

  let today = new Date()
  let tomorrow = new Date()
  let times = []
  let prayerTimes = []
  let currentTime = null

  let timeFormat = "h:mm a"

  let updateTimeTimer 


  function countryPrayerMethodMatcher(country) {
    console.log('country: '+ country)
    switch(country) {
      case 'EGY':
        return adhan.CalculationMethod.Egyptian()
        break
      case 'ARE':
        return adhan.CalculationMethod.Dubai()
        break
      case 'QAT':
        return adhan.CalculationMethod.Qatar()
        break
      case 'KWT':
        return adhan.CalculationMethod.Kuwait()
        break
      case 'SAU':
        return adhan.CalculationMethod.UmmAlQura()
        break
      case 'SGP':
      case 'MAL':
      case 'IDN':
        return adhan.CalculationMethod.Singapore() //thailand?
        break
      case "PAK":
      case "IND":
      case "BGD":
        return adhan.CalculationMethod.Karachi()
        break
      case 'TUR':
        return adhan.CalculationMethod.Turkey()
        break
      default:
        return adhan.CalculationMethod.MoonsightingCommittee()
    }
  }

  $: if (lat && lon) {
    calcTimes(lat, lon)
  } else if (freshGeo) {
    calcTimes(lat, lon)
  }

  function calcTimes (lat, lon) {
    let params = countryPrayerMethodMatcher(country)
    let coordinates = new adhan.Coordinates(lat, lon)

    let todayRef = new Date()
    let prayerTimesTodayTest = new adhan.PrayerTimes(coordinates, today, params)
    let fajrToday = dayjs(prayerTimesTodayTest.fajr)
    
    if (dayjs().isBefore(fajrToday)) { //so islamic night is respected and relevant times are shown
      console.log("before fajr, displaying 'yesterday's' time")
      today.setDate(todayRef.getDate()-1)
    } else {
      tomorrow.setDate(todayRef.getDate()+1)
    }

    let prayerTimesToday = new adhan.PrayerTimes(coordinates, today, params)
    let prayerTimesTomorrow = new adhan.PrayerTimes(coordinates, tomorrow, params)
    console.log(prayerTimesTomorrow)

    let maghrib = dayjs(prayerTimesToday.maghrib)
    let fajr = dayjs(prayerTimesTomorrow.fajr)
    console.log(maghrib)
    console.log(fajr)

    let interval = fajr.diff(maghrib, 'millisecond') / 6
    console.log(interval)
    
    for (let i = 0; i < 7; i++) {
      times.push(maghrib.add(interval * i, 'millisecond'))
    }

    
    prayerTimes = times.map(time => time.format(timeFormat))
    console.log(prayerTimes)

    console.log(dayjs(prayerTimes[0], "h:mm a"))
    magicTimer()

  }

function magicTimer() {
    testCurrentTime()
    clearInterval(updateTimeTimer)
    console.log('timer cleared')
    updateTimeTimer = setInterval(testCurrentTime, 60000)
  }
 function testCurrentTime() {
    let now = dayjs() 
    console.log(now.format(timeFormat))
    console.log('currentTime: ' + currentTime)


    for (let i = 6; i >= 0; i--) {

    // console.log(times[i])
      if (now.isAfter(times[i])) {
        console.log("after: " + i)
        if (i === 6) {
          console.log('we are in a new day!')
          currentTime = 1.5
          return false 
        } else { 
          console.log(`we are in stage ${i}!`)
          currentTime = i 
          return i
        }
      } else {
        if (i < 0) {
          console.log('check failed')
          currentTime = 1.5
          return false //only return after exhausting all options
        }
      }
      
    }
  }



</script>

<TimesTable {prayerTimes} {currentTime} />
<br>
<Dates {today} {tomorrow} />

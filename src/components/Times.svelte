

<script>
  export let lat 
  export let lon 
  import adhan from 'adhan'
  import dayjs from 'dayjs'
  import TimesTable from './TimesTable.svelte'
  import Dates from './Dates.svelte'
  

  let today = new Date()
  let tomorrow = new Date()
  let times = []


  $: if (lat && lon) {
    console.log("true")
    calcTimes(lat, lon)
  }
  function calcTimes (lat, lon) {
    let params = adhan.CalculationMethod.MoonsightingCommittee()
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

  }

</script>

<TimesTable times={times} />
<br>
<Dates today={today} tomorrow={tomorrow} />

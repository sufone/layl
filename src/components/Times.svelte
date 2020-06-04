

<script>
  export let lat 
  export let lon 
  import adhan from 'adhan'
  import dayjs from 'dayjs'
  
  import customParseFormat from 'dayjs/plugin/customParseFormat';
  dayjs.extend(customParseFormat)

  let prayerTimes = []
  let today = new Date()
  let tomorrow = new Date()

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
    
    let times = []
    for (let i = 0; i < 7; i++) {
      times.push(maghrib.add(interval * i, 'millisecond'))
    }

    let timeFormat = "h:mm a"
    prayerTimes = times.map(time => time.format(timeFormat))
    console.log(prayerTimes)
  }

</script>

<ul>
  <li className="zero">Maghrib starts the night: <strong>{prayerTimes[0]}</strong></li>
  <li className="one">One-sixth of the night: <strong>{prayerTimes[1]}</strong> </li>
  <li className="two">One-third of the night: <strong>{prayerTimes[2]}</strong></li>
  <li className="three">Half of the night: <strong>{prayerTimes[3]}</strong></li>
  <li className="four">Last-third of the night: <strong>{prayerTimes[4]}</strong></li>
  <li className="five">Last-sixth of the night: <strong>{prayerTimes[5]}</strong></li>
  <li className="six">Fajr ends the night: <strong>{prayerTimes[6]}</strong></li>
</ul>
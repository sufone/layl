<script>

  export let prayerTimes
  console.log(`from timestable: ${prayerTimes}`)
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
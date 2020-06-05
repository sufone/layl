<script>

  export let prayerTimes
  console.log(`from timestable: ${prayerTimes}`)
</script>


<ul>
  <li class="zero">Maghrib starts the night: <strong>{prayerTimes[0]}</strong></li>
  <li class="one">One-sixth of the night: <strong>{prayerTimes[1]}</strong> </li>
  <li class="two">One-third of the night: <strong>{prayerTimes[2]}</strong></li>
  <li class="three">Half of the night: <strong>{prayerTimes[3]}</strong></li>
  <li class="four">Last-third of the night: <strong>{prayerTimes[4]}</strong></li>
  <li class="five">Last-sixth of the night: <strong>{prayerTimes[5]}</strong></li>
  <li class="six">Fajr ends the night: <strong>{prayerTimes[6]}</strong></li>
</ul>

<style>

ul {
	position: relative;
	list-style: none;
	margin-left: 0;
  padding-left: 1.2em;
  font-size: 1.15em;
  line-height: 2em;
}
li {
  display: flex;
  justify-content: space-between;
}
li:before {
  position: absolute;
	left: 0;
}
.zero:before {
  content: "🌙"
}
.one:before {
	content: "¹⁄₆";
}
.two:before {
  content: "²⁄₆";
}
.three:before {
  content: "³⁄₆";
}
.four:before {
  content: "⁴⁄₆";
}
.five:before {
  content: "⁵⁄₆";
}
.six:before {
  content: "🔆";
}

</style>
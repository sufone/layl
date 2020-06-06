<script>

  export let prayerTimes
  console.log(`from timestable: ${prayerTimes}`)
</script>


<ul>
  <li class="zero">Maghrib <strong>{prayerTimes[0]}</strong></li>
  <li class="one">One-sixth <strong>{prayerTimes[1]}</strong> </li>
  <li class="two">One-third <strong>{prayerTimes[2]}</strong></li>
  <li class="three">Half <strong>{prayerTimes[3]}</strong></li>
  <li class="four">Last-third <strong>{prayerTimes[4]}</strong></li>
  <li class="five">Last-sixth <strong>{prayerTimes[5]}</strong></li>
  <li class="six">Fajr <strong>{prayerTimes[6]}</strong></li>
</ul>

<style>

ul {
	position: relative;
	list-style: none;
	margin-left: 0;
  padding-left: 1.2em;
  font-size: 1.15em;
  line-height: 2em;
  min-width: 20vw;
}
li {
  display: flex;
  justify-content: space-between;
}
li:before {
  position: absolute;
	left: -2px;
}
.zero:before {
  content: url(/assets/moon.svg);
  width: 2em;
  height: 2em;
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
  content: url(/assets/sun.svg);
  width: 2em;
  height: 2em;
}

</style>
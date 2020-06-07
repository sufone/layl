<script>
	import { onMount } from 'svelte';
  import dayjs from 'dayjs'
  import customParseFormat from 'dayjs/plugin/customParseFormat';

  export let times
  

  let timeFormat = "h:mm a"
  let prayerTimes = times.map(time => time.format(timeFormat))
  console.log(prayerTimes)

  console.log(`from timestable: ${prayerTimes}`)

  dayjs.extend(customParseFormat) 

  function testCurrentTime() {for (let i = 6; i >= 0; i--) {
    let now = dayjs() 
    // let now = dayjs(`2020-06-07T19:22:34+0000`)
    // console.log(now)
    // console.log(times[i])
      if (now.isAfter(times[i])) {
        // console.log("after: " + i)
        if (i === 6) {
          console.log('we are in a new day!')
          return false 
        } else { 
          console.log(`we are in stage ${i}!`)
          return i
        }
      } else {
        console.log('we are nearing the night!')
        if (i === 0) {
          return false //only return after exhausting all options
        }
      }
    }
  }
  
  function updateTime() {
    let test = testCurrentTime()
    console.log(test)
    if (test) {
      let chosenTime = `time-${test}`
      console.log(chosenTime)
      let currentTime = document.getElementsByClassName(chosenTime)
      console.log(currentTime)
      currentTime[0].classList.add("current") 
    }
  }

  onMount(() => {
    updateTime()
  })

  console.log(dayjs(prayerTimes[0], "h:mm a"))
</script>


<ul>
  <li class="time-0">Maghrib <strong>{prayerTimes[0]}</strong></li>
  <li class="time-1">One-sixth <strong>{prayerTimes[1]}</strong> </li>
  <li class="time-2">One-third <strong>{prayerTimes[2]}</strong></li>
  <li class="time-3">Half <strong>{prayerTimes[3]}</strong></li>
  <li class="time-4">Last-third <strong>{prayerTimes[4]}</strong></li>
  <li class="time-5">Last-sixth <strong>{prayerTimes[5]}</strong></li>
  <li class="time-6">Fajr <strong>{prayerTimes[6]}</strong></li>
</ul>

<style>
:global(.current) {
  border-bottom: 3px dotted #FFD9D9 ;
  list-style-position: inside;

}
ul {
	position: relative;
	list-style: ntime-1;
	margin-left: 0;
  padding-left: 1.2em;
  font-size: 1.15em;
  line-height: 2em;
  min-width: 20vw;
}
li {
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  /* padding: 0 4px 0 4px; */
}
li:before {
  position: absolute;
	left: -2px;
}
.time-0:before {
  content: url(/assets/moon.svg);
  width: 2em;
  height: 2em;
}
.time-1:before {
	content: "¹⁄₆";
}
.time-2:before {
  content: "²⁄₆";
}
.time-3:before {
  content: "³⁄₆";
}
.time-4:before {
  content: "⁴⁄₆";
}
.time-5:before {
  content: "⁵⁄₆";
}
.time-6:before {
  content: url(/assets/sun.svg);
  width: 2em;
  height: 2em;
}

</style>
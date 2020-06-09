<script>
  import { onMount } from 'svelte';


  export let prayerTimes
  export let current
  
  let mounted = false
  
  onMount(() => {
    mounted = true
  })
 
  $: if (current && mounted) {
    updateTime(current)
  }

  
  function updateTime(current) {
    console.log("updating timer, current: " + current)
    if (current) {
      let chosenTime = `time-${current}`
      console.log(chosenTime)


      //remove existing, if any

      //add new
      let currentTime = document.getElementById(chosenTime)
      console.log(currentTime)
      currentTime.classList.add("current") 
    }
  }
  
  // $:updateTime(current)
  

</script>


<ul>
  <li id="time-0">Maghrib <strong>{prayerTimes[0]}</strong></li>
  <li id="time-1">One-sixth <strong>{prayerTimes[1]}</strong> </li>
  <li id="time-2">One-third <strong>{prayerTimes[2]}</strong></li>
  <li id="time-3">Half <strong>{prayerTimes[3]}</strong></li>
  <li id="time-4">Last-third <strong>{prayerTimes[4]}</strong></li>
  <li id="time-5">Last-sixth <strong>{prayerTimes[5]}</strong></li>
  <li id="time-6">Fajr <strong>{prayerTimes[6]}</strong></li>
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
#time-0:before {
  content: url(/assets/moon.svg);
  width: 2em;
  height: 2em;
}
#time-1:before {
	content: "¹⁄₆";
}
#time-2:before {
  content: "²⁄₆";
}
#time-3:before {
  content: "³⁄₆";
}
#time-4:before {
  content: "⁴⁄₆";
}
#time-5:before {
  content: "⁵⁄₆";
}
#time-6:before {
  content: url(/assets/sun.svg);
  width: 2em;
  height: 2em;
}

</style>
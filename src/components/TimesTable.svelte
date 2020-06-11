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

      //remove existing
      let oldTimeElement = document.getElementById(`time-${current-1}`)
      console.log(oldTimeElement); 
      oldTimeElement.classList.remove("current");

      //add new
      let currentTimeElement = document.getElementById(chosenTime)
      console.log(currentTimeElement)
      currentTimeElement.classList.add("current") 
    }
  }  
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
  border-radius: 4px;
  /* padding: 0 4px 0 4px; */
}
li:before {
  position: absolute;
	left: -5px;
}
#time-0:before {
  content: url('/assets/moon (2).svg');
  width: 2em;
  height: 2em;
    padding-top: 8px;
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
  content: url(/assets/sunset.svg);
  width: 2em;
  height: 2em;
  padding-top: 6px;
}

</style>
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
  <li id="time-1">Second-sixth <strong>{prayerTimes[1]}</strong> </li>
  <li id="time-2">Second-third <strong>{prayerTimes[2]}</strong></li>
  <li id="time-3">Half <strong>{prayerTimes[3]}</strong></li>
  <li id="time-4">Last-third <strong>{prayerTimes[4]}</strong></li>
  <li id="time-5">Last-sixth <strong>{prayerTimes[5]}</strong></li>
  <li id="time-6">Fajr <strong>{prayerTimes[6]}</strong></li>
</ul>

<style>
:global(.current) {
  border-bottom: 3px dotted #FFD9D9 ;
  list-style-position: inside;
  margin-bottom: 3px;

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
li > strong {
  padding-left: 20px;
}
li {
  display: flex;
  justify-content: space-between;
  padding-left: 6px;
  padding-right: 6px;
}
li:before {
  position: absolute;
	left: -5px;
}
#time-0:before {
  content: url("/assets/moon.svg");
  width: 24px;
  height: 24px;
  padding-top: 8px;
}
#time-1:before {
	content: "1⁄₆";
}
#time-1 {
  background-color: rgba(0, 0, 0, 0.096);
}
#time-2:before {
  content: "1⁄3";
}
#time-3:before {
  content: "1⁄2";
}
#time-3 {
    background-color: rgba(0, 0, 0, 0.096);

}
#time-4:before {
  content: "2⁄3";
}
#time-5:before {
  content: "5⁄6";
}
#time-5 {
    background-color: rgba(0, 0, 0, 0.096);

}
#time-6:before {
  content: url("/assets/sun.svg");
  width: 24px;
  height: 24px;
  padding-top: 6px;
}

@media only screen and (max-width: 270px) {
  
li > strong {
  padding-left: 6px;
}
#time-0:before {
  width: 16px;
  height: 16px;
  padding-top: 6px;
}
#time-6:before {
  width: 16px;
  height: 16px;
  padding-top: 4px;
}
}
</style>
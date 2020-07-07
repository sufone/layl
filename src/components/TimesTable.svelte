<script>
  import { onMount } from 'svelte';

  export let prayerTimes
  export let currentTime

  let mounted = false
  onMount(() => {
    mounted = true
  })

  $: if (mounted && currentTime) {
    updateTime(currentTime)
  }

  function updateTime(currentTime) {
    console.log("updating timer, current: " + currentTime)
    //remove existing
    let oldTimeElements = document.getElementsByClassName("current")
    console.log(oldTimeElements);
    [...oldTimeElements].forEach(elem => { //if a page is re-initalized after night is over, could produce a leftover current class on a middle element
      elem.classList.remove("current");
    })
    if (Number.isInteger(currentTime)) {
      let chosenTime = `time-${currentTime}`
      console.log(chosenTime)

      //add new
      let currentTimeElement = document.getElementById(chosenTime)
      console.log(currentTimeElement)
      currentTimeElement.classList.add("current")
    }
  }
</script>


<ul>
<!-- change to a map…  -->
  <li id="time-0">Maghrib: night start<strong>{prayerTimes[0]}</strong></li>
  <li id="time-1" class="dark-bg">First-sixth ends <strong>{prayerTimes[1]}</strong> </li>
  <li id="time-2">First-third ends <strong>{prayerTimes[2]}</strong></li>
  <li id="time-3" class="dark-bg">Half the night <strong>{prayerTimes[3]}</strong></li>
  <li id="time-4">Last-third starts<strong>{prayerTimes[4]}</strong></li>
  <li id="time-5" class="dark-bg">Last-sixth starts <strong>{prayerTimes[5]}</strong></li>
  <li id="time-6">Fajr: night end<strong>{prayerTimes[6]}</strong></li>
</ul>

<style>
:global(.current) {
  border-bottom: 3px dotted #ff6767;
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
	content: "¹⁄₆";
}
#time-1 {
    border-left: 1.5px solid #80a9e6;
}
#time-2:before {
  content: "²⁄₆";
}
#time-2 {
    border-left: 1.5px solid #9a9ccc;

}
#time-3:before {
  content: "³⁄₆";
}
#time-3 {
    border-left: 1.5px solid #b38eb3;

}
#time-4:before {
  content: "⁴⁄₆";
}
#time-4 {
      border-left: 1.5px solid #cc819a;

}
#time-5:before {
  content: "⁵⁄₆";
}
#time-5 {
    border-left: 1.5px solid #e67480;
}
#time-6:before {
  content: url("/assets/sun.svg");
  width: 24px;
  height: 24px;
  padding-top: 6px;
}
.dark-bg {
  background-color: rgba(0, 0, 0, 0.03);

}

@media (prefers-color-scheme: dark) {
  .dark-bg {
    background-color: rgba(255, 255, 255, 0.04);
  }
  :global(.current) {
    border-bottom: 3px dotted #ffafaf;
  }
}

@media only screen and (max-width: 280px) {

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

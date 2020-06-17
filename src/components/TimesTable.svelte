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
  <li id="half-1">
    <p class="italic">First half</p>
    <ul>
      <li style= >
        <p class="bold">First third</p>
        <ul id="third-1">
          <li id="time-0">First-sixth <strong>{prayerTimes[0]}</strong></li>
          <li id="time-1">Second-sixth <strong>{prayerTimes[1]}</strong> </li>
        </ul>
      </li>
      <li >
        <p class="bold">Middle third</p>
        <ul id="third-2">
          <li id="time-2">Third-sixth <strong>{prayerTimes[2]}</strong></li>
        </ul>
      </li>
      
    </ul>
  </li>
  <li id="half-2">
    <p class="italic">Last half</p>
    <ul>
      <li >
        <ul id="third-2">
          <li id="time-3">Fourth-sixth <strong>{prayerTimes[3]}</strong></li>
        </ul>
      </li>
      <li >
        <p class="bold">Last third</p>
        <ul id="third-3">
          <li id="time-4">Fifth-sixth <strong>{prayerTimes[4]}</strong></li>
          <li id="time-5">Last-sixth <strong>{prayerTimes[5]}</strong></li>
        </ul>
      </li>
      
    </ul>
    
  </li>
  <li id="time-6">Fajr <strong>{prayerTimes[6]}</strong></li>

  
</ul>

<style>
.italic {
  font-style: italic;
}
.bold {
  /* text-decoration: underline solid #FFD9D9; */
  font-style: italic;
}
#half-1 {
  border-radius: 4px;
  margin-bottom: 5px;
}
#half-1 > ul {
    border-left: 2px solid #67b6ff;
}
#half-2 {
    border-radius: 4px;
}
#half-2 > ul {
    border-left: 2px solid #ff6767;

}
#third-1 {
 border-left: 2px solid #8da3d9;
}
#third-2 {
 border-left: 2px solid #b38eb3;
}
#third-3 {
 border-left: 2px solid #d97b8c;
}
:global(.current) {
  border-bottom: 3px dotted #FFD9D9 ;
  list-style-position: inside;
  margin-bottom: 3px;

}
ul {
  border-radius: 4px;
}
ul {
	position: relative;
	list-style: none;
	margin-left: 0;
  padding-left: 1.2em;
  /* font-size: 1.15em; */
  line-height: 2em;
  min-width: 20vw;
}
 li > strong {
  padding-left: 20px;
} 
/* li {
  display: flex;
  justify-content: space-between;
} */
li:before {
  position: absolute;
	left: -5px;
}
/* #time-0:before {
  content: url("/assets/moon.svg");
  width: 24px;
  height: 24px;
  padding-top: 8px;
}
#time-1:before {
	content: "1⁄₆";
}
#time-2:before {
  content: "1⁄3";
}
#time-3:before {
  content: "1⁄2";
}
#time-4:before {
  content: "2⁄3";
}
#time-5:before {
  content: "5⁄6";
}
#time-6:before {
  content: url("/assets/sun.svg");
  width: 24px;
  height: 24px;
  padding-top: 6px;
} */

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
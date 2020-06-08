<div>
  

  {#if lat && lon} <!-- don't show on first visit --> 
    <Times lat={lat} lon={lon} freshGeo={freshGeo}/>
    <Geocode lat={lat} lon={lon} freshGeo={freshGeo} />

    {#if !freshGeo} <!-- don't show if user just used it --> 
      <button class="minor" on:click|once={geolocate}>Update location</button>
    {/if} 
  {:else if lowAcc}
    <alert>Sorry, your location is reported with too low accuracy. Please try again from another device.</alert>
  {:else} 
    <img class="landing" src="/assets/load.svg" alt="Telescope gazing at the stars">
    <Explanation />
    <button class="major" on:click|once={geolocate}><img src="/assets/pin.svg" alt="GPS pin"> Share location</button>
  {/if}

  
</div>


<style>
  img.landing {
    width: 400px
  }
  button {
    font-size: 1.1em;
    cursor: pointer;
    padding: 10px;
    margin: 20px;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  button:hover {
    transform: translateY(-2px)
  }
  button:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
  button.minor {
    padding: 5px;
    margin: 10px;
    font-size: 0.6em;
    /* background: none!important; */
    background: #EDF6FF;
    border: 1px solid #67B6FF;
    /* border: none; */
    color: #67B6FF;
    /* text-decoration: underline solid #67B6FF; */
    cursor: pointer;

    transition-property: all;
    transition-duration: .2s;
    
    border-radius: 4px;

    display: block;
		margin-left: auto;
    margin-right: auto;
  }
	button.major {
    /* all: unset; */
    
    transition-property: all;
    transition-duration: .2s;
    background: #FFE9E9;
    border: 1.5px solid #FF6767;
    box-sizing: border-box;

    font-weight: bold;
    color: #FF6767;

    display: block;
		margin-left: auto;
    margin-right: auto;
	}
</style>

<script>
  import Times from './Times.svelte'
  import Geocode from './Geocode.svelte'
  import Explanation from './Explanation.svelte'

  let lowAcc
  let lat = parseFloat(localStorage.getItem('lat')) || null
  let lon = parseFloat(localStorage.getItem('lon')) || null
  console.log("from local: "+lat+lon)
  let freshGeo = false

  function geolocate() {
  if ("geolocation" in navigator) {
    // lat = null // forced remount of times to force new calc, but unnecessary with reactive statement in timesfile
    // lon = null
    navigator.geolocation.getCurrentPosition((position) => {
      let accuracy = position.coords.accuracy
      if (accuracy > 300000) { //arbitrary value
        lowAcc = true
        return
      }
      lat = position.coords.latitude
      lon = position.coords.longitude
      freshGeo = true
      console.log(lat, lon, accuracy);
      localStorage.setItem('lat', lat)
      localStorage.setItem('lon', lon)
      console.log(`localstorage works: ${localStorage.getItem('lat')}`)
      // geocode(lat, lon)
      // this.calcTimes(lat, lon) 

    }, showError)
  } else {
    alert("I'm very sorry, but it looks like this web browser does not support GPS… can you please come back again with an updated browser 😌?");
  }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("Please refresh the page and give GPS permission.")
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}</script>

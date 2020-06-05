<div>
  

  {#if lat && lon} <!-- don't show on first visit --> 
    <Times lat={lat} lon={lon}/>
    <Geocode lat={lat} lon={lon} />

    {#if !freshGeo} <!-- don't show if user just used it --> 
      <button on:click|once={geolocate}>Update location</button>
    {/if} 

  {:else} 
    <img src="/assets/load.svg" alt="Telescope gazing at the stars">
    <button on:click|once={geolocate}>Locate me</button>
  {/if}

  
</div>


<style>
  img {
    width: 400px
  }
  
	button {
    /* all: unset; */
    padding: 10px;
    
    background: #FFD9D9;
    border: 2px solid #FF6767;
    box-sizing: border-box;
    border-radius: 4px;

    display: flex;
    align-items: center;
    text-align: center;
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

  let lat = parseFloat(localStorage.getItem('lat')) || null
  let lon = parseFloat(localStorage.getItem('lon')) || null
  console.log("from local: "+lat+lon)
  let freshGeo = false

  function geolocate() {
  if ("geolocation" in navigator) {
    // lat = null // forced remount of times to force new calc, but unnecessary with reactive statement in timesfile
    // lon = null
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude
      lon = position.coords.longitude
      freshGeo = true
      console.log(lat, lon);
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

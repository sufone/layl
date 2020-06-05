<div>
  

  {#if lat } <!-- don't show on first visit --> 
    <Times lat={lat} lon={lon}/>
    <Geocode lat={lat} lon={lon} />

    {#if !freshGeo} <!-- don't show if user just used it --> 
      <button on:click|once={geolocate}>Update location</button>
    {/if} 

  {:else} 
    <button on:click|once={geolocate}>Locate me</button>
  {/if}

  
</div>

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

    })
  } else {
    alert("I'm very sorry, but it looks like this web browser does not support GPS… can you please come back again with an updated browser 😌?");
  }
}
</script>
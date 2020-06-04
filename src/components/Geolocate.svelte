<div>
  

  {#if lat !== null}
    <p>Lat: {lat}, Lon: {lon}</p>
  {/if}

  {#if !freshGeo}
    <button on:click|once={geolocate}>Locate me</button>
  {/if}

  {#if lat}
  <Times lat={lat} lon={lon}/>
  {/if}
  
</div>

<script>
  import Times from './Times.svelte'

  let lat = parseInt(localStorage.getItem('lat')) || null
  let lon = parseInt(localStorage.getItem('lon')) || null
  let freshGeo = false

  function geolocate() {
  if ("geolocation" in navigator) {
    // lat = null
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
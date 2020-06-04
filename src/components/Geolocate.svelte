<div>


  {#if lat !== null}
    <p>Lat: {lat}, Lon: {lon}</p>
  {/if}

  {#if !freshGeo}
    <button on:click|once={geolocate}>Locate me</button>
  {/if}
  
</div>

<script>
  let lat = null
  let lon = null
  let freshGeo = false

  function geolocate() {
  if ("geolocation" in navigator) {
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
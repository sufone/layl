<script>
  export let lat
  export let lon
  export let freshGeo
  let street = localStorage.getItem('street')
  let city = localStorage.getItem('city')
  let country = localStorage.getItem('country')

  $: if (freshGeo) { //runs only when geolocate is called
    geocode(lat, lon)
  }

  async function geocode(lat, lon) {
    let apiKey = `zWreHvgy_et8kAWr5IK_RcuI-tohs8AgsGCWjByNnAY`
    let geoApi = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lon}&apiKey=${apiKey}&lang=en-US` //
    console.log(geoApi)
    
    fetch(geoApi).then(response => response.json())
      .then(result => {
        // let location = result.Response.View[0].Result[0].Location.Address
        let location = result.items[0].address
        console.dir(location)
        // street = location.street // not doing city because 1. creepy 2. unnecessary precision 3. people don't expect prayer times to differ based on location within the city.
        city = location.city
        country = location.countryName
        // localStorage.setItem('street', street)
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
      })
      .catch(err => {
        street = null
        city = null
        country = null
        alert(`I am very sorry: Layl cannot connect to GPS provider. Please email me (navedcoded@gmail.com) with this error code: ${err}. `)
      })
  }
</script>

{#if street && city && country}
  <p>Near {street}, <br>{city}, {country}</p>
{:else if city && country}
  <p>{city}, {country}</p>
{:else}
  <p>Your location co-ods: {lat}, {lon}</p>
{/if}

<style>
p {
  text-align: center;
  /* width: 80%; */
  margin-left: auto;
  margin-right: auto;
}
</style>
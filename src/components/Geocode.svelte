<script>
  import Times from './Times.svelte'
  import { _, locale } from 'svelte-i18n'

  export let lat
  export let lon
  export let freshGeo
  let city = localStorage.getItem('city')
  let country = localStorage.getItem('country')
  let countryName = localStorage.getItem('countryName')

  // runs only when geolocate is called
  $: if (freshGeo) { 
    geocode(lat, lon)
  }
  
  // this is to help ignore the initial locale load, and run geocode 
  // on subsequent language changes, up to a limit (so no spam)
  let timesLocaleChanged = 0 
  locale.subscribe(() => {
    timesLocaleChanged +=1
  })
  $: if (1 < timesLocaleChanged < 6) {
    geocode(lat, lon)
  }

  async function geocode(lat, lon) {
    let geoApi = `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${lat}%2C${lon}%2C150&mode=retrieveAreas&gen=9&app_id=oye7XL09Prx5G64NrSE8&app_code=-Dw2OYlGw40jZwCC_UGvKg&addressattributes=country,city&locationattributes=address&maxresults=1&minresults=1&language=${$locale}`
    console.log(geoApi)

    fetch(geoApi).then(response => response.json())
      .then(result => {
        let location = result.Response.View[0].Result[0].Location.Address
        console.dir(location)

        city = location.City
        country = location.Country
        countryName = location.AdditionalData[0].value
        console.log("countryname "+countryName)

        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
        localStorage.setItem('countryName', countryName)

        //window.metrical.trackEvent("layl_geocode_success")
      })
      .catch(err => {
        district = null
        city = null
        country = null
        //window.metrical.trackEvent("layl_geocode_failure")
        alert(`${$_('warnings.geocode_failed')}${err}`)
      })
  }
</script>

<Times {lat} {lon} {freshGeo} {country}/>

{#if city && country}
  <p>{city}{$_('comma')} {countryName}</p>
{:else}
  <p>{$_('table.co-ods')}<br> {lat}{$_('comma')} {lon}</p>
{/if}

<style>
p {
  text-align: center;
  /* width: 80%; */
  margin-left: auto;
  margin-right: auto;
}
</style>

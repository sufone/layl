<div>


    {#if lat && lon} <!-- don't show on first visit -->
    <div transition:fade>
      <div id="image-holder">
        <a href="https://layl.app"><img id="main-logo" src="/assets/logo.svg" alt="Layl logo" ></a>
      </div>
      <Geocode {lat} {lon} {freshGeo} />
    </div>


      {#if !freshGeo} <!-- don't show if user just used it -->

        {#if loading}
          <Loader color="#67B6FF" />

        {:else}
          <button transition:fade class="minor" on:click|once={() => geolocate("layl_relocation")}>Update location</button>
        {/if}

      {/if}

    {:else if lowAcc}
      <alert>Sorry, your location is reported with too low accuracy. Please try again from another device.</alert>

    {:else}
      <div transition:fade>
        <div id="landing-img-holder">
            <img id="landing" src="/assets/landing.svg" alt="Telescope gazing at the stars">
          </div>
          <div id="image-holder">
          <img id="main-logo" src="/assets/logo.svg" alt="Layl logo" >
        </div>
          <p>Calculate divisons of the night for your location </p>
      </div>

      {#if loading}
        <Loader color="#ff6767" />

      {:else}
        <button class="major" on:click|once={() => geolocate("layl_initial_location")}> Share location</button>
      {/if}
      <Explanation />
      <br>
      <p style="font-size: 0.8rem;">Learn more below 👇️</p>

    {/if}


</div>


<style>

  p {
    max-width:30vw;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  img#landing {
    width: 300px
  }
  @media only screen and (max-width: 550px) {
    img#landing {
      width: 250px;
    }
    p {
      max-width: 70vw;
    }
  }
  @media only screen and (max-width: 280px) {
    img#landing {
      width: 200px;
    }
  }
  #image-holder {
        text-align: center;
      padding-top: 10px;
    }
	img#main-logo {
    width: 80px;
    margin-bottom: 5px;
	}
  #landing-img-holder {
    text-align: center;
  }
  button {
    font-size: 1em;
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
    background: #FF6767;
    border: 1.5px solid #FF6767;
    box-sizing: border-box;

    font-weight: bold;
    color: #fff;

    display: block;
		margin-left: auto;
    margin-right: auto;
  }

  @media (prefers-color-scheme: dark) {
    button.minor {
      background: #0080ff4f;
    }
	@media screen and (max-width: 280px) {
    button {
    font-size: 0.9em;
        padding: 5px;

    }
}}
</style>

<script>
  import Geocode from './Geocode.svelte'
  import Explanation from './Explanation.svelte'
  import { fade } from 'svelte/transition';
  import Loader from './Loader.svelte'



  let lowAcc
  let lat = parseFloat(localStorage.getItem('lat'))
  let lon = parseFloat(localStorage.getItem('lon'))
  console.log("from local: "+lat+lon)
  let freshGeo = false
  let loading = false

  function geolocate(trackEvent) {
    loading = true
    let fetchStart = new Date()

    window.metrical.trackEvent(trackEvent)
    console.log(trackEvent)
    if ("geolocation" in navigator) {
      // lat = null // forced remount of times to force new calc, but unnecessary with reactive statement in timesfile
      // lon = null
      navigator.geolocation.getCurrentPosition((position) => {
        let accuracy = position.coords.accuracy
        if (accuracy > 300000) { //arbitrary value, should be a good threshold
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
        window.metrical.trackEvent("layl_geolocate_success")
        // geocode(lat, lon)
        // this.calcTimes(lat, lon)

        let fetchEnd = new Date()
        let loadTime = fetchEnd - fetchStart
        console.log(`loadtime: ${loadTime}, ${loadTime<1200 ? 1200-loadTime : 0}`)
        setTimeout(() => {loading = false}, loadTime<1200 ? 1200-loadTime : 0)

      }, error)
    } else {
      window.metrical.trackEvent("layl_geolocate_failure")
      loading = false
      alert("I'm very sorry, but it looks like this web browser does not support GPS… can you please come back again with an updated browser 😌?");
    }



  }

function error(err) {
  window.metrical.trackEvent("layl_geolocate_error")
  loading = false
  alert(`ERROR(${err.code}): ${err.message} \n Please contact me (navedcoded@gmail.com)
  with this message to help solve this issue and improve Layl ❤️`);
}
</script>

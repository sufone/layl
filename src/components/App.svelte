<div class="app">
	<div class="layl-container">
		<img src="/assets/logo.svg" alt="Layl logo">
		<h3>night worship, planned</h3>
		<Geolocate />
	</div>
	

</div>

<script>
	import Geolocate from './Geolocate.svelte'
	import Geocode from './Geocode.svelte'

</script>

<style lang="css">
	img {
		width: 250px;
	}
	h3 {
		font-weight: lighter;
	}
	.layl-container {
		height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	}
	
</style>

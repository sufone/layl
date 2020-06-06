<div class="app">
	<div class="layl-container">
		<img src="/assets/logo.svg" alt="Layl logo">
		<h3>night divided, worship planned<sup>v2</sup></h3>
		<Geolocate />
	</div>
	<div class="layl-container">
		<Info />
	</div>
	

</div>

<script>
	import Geolocate from './Geolocate.svelte'
	import Info from './Info.svelte'
</script>

<style lang="css">
	img {
		width: 200px;
	}
	h3 {
		font-weight: lighter;
		text-align: center;
	}
	:global(.layl-container) {
		height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	}
	
</style>

<div class="app">
	<div class="layl-container">
		<img id="main-logo" src="/assets/logo.svg" alt="Layl logo" >
		<br>
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
		width: 150px;
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

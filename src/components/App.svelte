<div class="app">
	<div id="image-holder">
		<img id="main-logo" src="/assets/logo.svg" alt="Layl logo" >
	</div>
	<div class="layl-container">
		<Geolocate />
	</div>
	<div class="info-container">
		<Info />
	</div>
	

</div>

<script>
	import Geolocate from './Geolocate.svelte'
	import Info from './Info.svelte'
</script>

<style lang="css">
#image-holder {
		text-align: center;
	padding-top: 10px;
}
	img {
		width: 80px;
	}
	.info-container {
		min-height: 100vh;
		margin-left: auto;
		margin-right: auto;
		width: 80vw;
	}
	.layl-container {
		height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	}
	
</style>

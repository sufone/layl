<div class="app">
	
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
	
	@media screen and (max-width: 270px) {
		.info-container {
			width: 95vw;
		}	
}
</style>

{#if $isLoading}
<div id="image-holder">
	<Loader color="#ff6767" />
</div>
{:else}
<div class="app">
	<div class="language-container">
		<LanguagePicker />
	</div>
	<div class="layl-container">
		<Geolocate />
	</div>
	<div class="info-container">
		<Info />
	</div>
</div>
{/if}


<script>
	import Geolocate from './Geolocate.svelte'
	import Info from './Info.svelte'
	import LanguagePicker from './LanguagePicker.svelte'
	import Loader from './Loader.svelte'

	import { isLoading, _ } from 'svelte-i18n'
	import { startClient } from '../i18n.js';
	startClient();

	$: if (!$isLoading) {
		document.dir = $_('direction');
	}
</script>

<style lang="css">

	.language-container {
		text-align: right;
	}

	.info-container {
		min-height: 100vh;
		margin-left: auto;
		margin-right: auto;
		width: 95vw;
	}
	.layl-container {
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#image-holder {
		margin-top: 100px;
    	text-align: center;
		align-items: center;
		justify-content: center;
  	}

	@media screen and (max-width: 300px) {
		.info-container {
			width: 95vw;
		}
		.layl-container {
			height: 95vh;
			margin-bottom: 5vh;
		}
}
</style>

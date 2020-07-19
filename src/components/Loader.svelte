<script>
  import { SyncLoader } from 'svelte-loading-spinners'

  export let color


</script>

<div style="text-align: center; ">
	<div style="display: inline-block; padding: 10px;">
    	<SyncLoader size="30" color={color} unit="px"></SyncLoader> 
	</div>
</div>


<style>

</style>
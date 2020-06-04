

<script>

  export let lat 
  export let lon 

  if (lat && lon) {
    console.log("true")
  }

</script>

{#if lat}
times: {lon}
{/if}
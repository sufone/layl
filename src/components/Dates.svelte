<script>
  import dayjs from 'dayjs'

  import customParseFormat from 'dayjs/plugin/customParseFormat';
  dayjs.extend(customParseFormat)
  export let today
  export let tomorrow

</script>

<p>{dayjs(today).format("D MMM")} – {dayjs(tomorrow).format("D MMM")}</p>

<style>
p {text-align: center;}
</style>

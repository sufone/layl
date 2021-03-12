<script>
  import {locale} from 'svelte-i18n'

  import dayjs from 'dayjs'
	import 'dayjs/locale/ar'

  import customParseFormat from 'dayjs/plugin/customParseFormat';
  dayjs.extend(customParseFormat)
  export let today
  export let tomorrow

</script>

<p>{dayjs(today).locale($locale).format("D MMM")} – {dayjs(tomorrow).locale($locale).format("D MMM")}</p>

<style>
p {text-align: center;}
</style>

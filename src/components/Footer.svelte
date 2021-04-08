<script>
  import { locale, _ } from 'svelte-i18n'

  let releaseDate = new Date(2021, 4, 8)
  let dateFormat = {month: 'long',year : 'numeric'}

</script>

<p><a href="https://suf.one" target="_blank">{$_('info.sufone_credit')}</a></p>

<div class="github">
  <a class="github-button" href="https://github.com/sufone/layl" data-color-scheme="no-preference: light; light: light; dark: dark;" data-show-count="false" aria-label="Star mr-islam/layl-pwa on GitHub"> 
    {$_("version") + ' ' + new Intl.DateTimeFormat(`${$locale}-u-ca-islamic`, dateFormat).format(releaseDate)} 
  </a>
</div>


<style>
a {
  text-align: center;
}
p {
margin-top: 6em;
  text-align: center;
  font-size: 0.8em;
}
div.github {
  margin-top: 0.5em;
  text-align: center;
}

@media screen and (max-width: 300px) {
  div {
    position: unset;
    text-align: center;
    width: 100vw;
  }
}
</style>

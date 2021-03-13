<script>
  import { _ } from 'svelte-i18n'

  import Footer from './Footer.svelte'

  let twa = document.referrer.includes('android-app://com.navedislam.layl') 
</script>

<div id="info">
<blockquote>
{$_('info.ayah')}<span>[{$_('info.ayah_citation')}]</span>
</blockquote>

<p><a href="https://seekersguidance.org/answers/general-counsel/tahajjud-prayer-description-merits/">{$_('info.transition_to_list')}</p>

<ul>
    <li>{$_('info.advice_points.isha')}</li>
    <li>{$_('info.advice_points.sleep')}</li>
    <li>{$_('info.advice_points.tahajjud')}</li>
    <li>{$_('info.advice_points.nap')}</li>
</ul>


<p><strong>
  {$_('info.check_times')}
</strong></p>

<p>
  {$_('info.closing_dua')}
</p>

<div id="subscribe-form">
<form
    action="https://buttondown.email/api/emails/embed-subscribe/naved"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/naved', 'popupwindow')"
    class="embeddable-buttondown-form"
>
<p>{$_('info.join_email')}</p>
  <div id="subscribe-internal">
    <input type="email" placeholder="{$_('info.email_placeholder')}" name="email" id="bd-email" class="subscribe-field">
    <input type="hidden" value="1" name="embed">
    <input type="hidden" name="tag" value="apps" />
    <br>
    <input type="submit" value="{$_('info.subscribe_button')}" id="subscribe-button">
  </div>
</form>
</div>

{#if !twa}
<div id="image-holder">
  <a href="https://play.google.com/store/apps/details?id=com.navedislam.layl" target="_blank">
    <img width="115px" style="padding-top: 2em; " src='/assets/google-play.svg' alt="google play download button" />
  </a>
</div>
{/if}




<Footer />

</div>

<style>

#image-holder {
  text-align: center;
}

span {
    font-size: 0.8rem;
}
p, blockquote {
    margin-bottom: 15px;
}
ul {
    margin: 10px;
}
div#info {
  min-height: 100vh;
  padding-bottom: 5px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
blockquote {
  /* border-left: 3px solid #67b6ff;
  padding-left: 20px; */
  font-style: normal;

  border-radius: 4px;
}

#subscribe-form {
	font-family: var(--font-list);
	display: flex;
	justify-content: center;
	text-align: center;
	margin-top: 1em
}

#subscribe-internal {
	display: flex
}
#subscribe-button {
	background-color: #ff6767;
	color: #fafafa;
	padding: 6px 15px;
  border-radius: 4px;
  margin: 0px 3px 0 3px;
}
#subscribe-button:hover {
	cursor: pointer;
}

#bd-email {
	border-radius: 4px;
	padding: 6px;
	min-width: 200px
}

input#bd-email:focus {
	border: 1px solid #ff6767
}
input {
	-webkit-appearance: none;
	padding: 0;
	font: inherit;
	background: 0 0;
	border: 0;
	outline: 0
}


@media (max-width: 400px) {
	#subscribe-internal {
			display:block
	}

	#subscribe-button {
			border-radius: 4px;
			margin-top: 3px
	}
	#bd-email {
		width: 100px
	}
}


@media screen and (max-width: 550px) {
  div#info {
    width: 95%;
  }
}

@media screen and (max-width: 300px) {
  div#info {
    font-size: 0.8em;
  }
}

</style>

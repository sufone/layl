<div id="info">
<blockquote>
<em>“And during the night wake up and pray, as an extra offering of your own, so that your Lord may
raise you to a ⸢highly⸣ praised status.”</em> <span>[Surah al-Isra 79]</span>
</blockquote>



<p><a href="https://seekersguidance.org/answers/general-counsel/tahajjud-prayer-description-merits/">The night is full of blessed times for worship</a>—plan it all with Layl, like:</p>


<ul>

    <li>Pray <em>ʿIshā</em> before ¹⁄₂ of the night (at the latest!)</li>
    <li>Get most of your sleep in the middle of the night</li>
    <li>Rise for <em>Tahajjud</em> in the last ¹⁄₃</li>
    <li>Take a short nap in the last ¹⁄₆ before <em>Fajr</em></li>


</ul>


<p>

Also, please <strong>double-check the Maghrib and Fajr times</strong>—all the other times above depend on them.
</p>

<p> Allah, help us to worship at night and accept from us, <em>ameen</em>!
</p>

<div id="subscribe-form">
<form
    action="https://buttondown.email/api/emails/embed-subscribe/naved"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/naved', 'popupwindow')"
    class="embeddable-buttondown-form"
>
<p>Join the monthly updates email</p>
  <div id="subscribe-internal">
    <input type="email" placeholder="💌 Email" name="email" id="bd-email" class="subscribe-field">
    <input type="hidden" value="1" name="embed">
    <input type="hidden" name="tag" value="apps" />
    <br>
    <input type="submit" value="Bismillah" id="subscribe-button">
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




<script>
import Footer from './Footer.svelte'

let twa = document.referrer.includes('android-app://com.navedislam.layl')
</script>

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

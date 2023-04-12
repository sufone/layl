<script>
  import { _, locale } from "svelte-i18n";
  import { onMount } from "svelte";

  export let prayerTimes;
  export let currentTime;

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  $: if (mounted && currentTime) {
    updateTime(currentTime);
  }

  function updateTime(currentTime) {
    console.log("updating timer, current: " + currentTime);
    //remove existing
    let oldTimeElements = document.getElementsByClassName("current");
    console.log(oldTimeElements);
    [...oldTimeElements].forEach((elem) => {
      //if a page is re-initalized after night is over, could produce a leftover current class on a middle element
      elem.classList.remove("current");
    });
    if (Number.isInteger(currentTime)) {
      let chosenTime = `time-${currentTime}`;
      console.log(chosenTime);

      //add new
      let currentTimeElement = document.getElementById(chosenTime);
      console.log(currentTimeElement);
      currentTimeElement.classList.add("current");
    }
  }
</script>

<ul>
  {#each prayerTimes as prayerTime, i}
    <li id="time-{i}">
      {$_(`table.time_${i}`)}
      <strong class={$_("direction")}
        >{prayerTime.locale($locale).format("LT")}</strong
      >
    </li>
  {/each}
</ul>

<style>
  :global(.current) {
    border-bottom: 3px dotted #ff6767;
    list-style-position: inside;
    margin-bottom: 3px;
  }
  :global(.ltr) {
    padding-left: 20px;
  }
  :global(.rtl) {
    padding-right: 20px;
  }
  ul {
    position: relative;
    list-style: none;
    margin-left: 0;
    padding-left: 1.2em;
    font-size: 1.2rem;
    line-height: 2em;
    min-width: 20vw;
  }
  li > strong {
    font-weight: 800;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding-left: 6px;
    padding-right: 6px;
  }
  li:before {
    position: absolute;
    left: -5px;
  }
  #time-0:before {
    content: url("/assets/moon.svg");
    width: 24px;
    height: 24px;
    padding-top: 8px;
    font-weight: 400;
  }
  #time-1:before {
    content: "¹⁄₆";
    font-weight: 400;
  }
  #time-1 {
    border-left: 1.5px solid #80a9e6;
    background-color: rgba(0, 0, 0, 0.03);
  }
  #time-2:before {
    content: "²⁄₆";
    font-weight: 400;
  }
  #time-2 {
    border-left: 1.5px solid #9a9ccc;
    background-color: rgba(0, 0, 0, 0.03);
  }
  #time-3:before {
    content: "³⁄₆";
    font-weight: 400;
  }
  #time-3 {
    border-left: 1.5px solid #b38eb3;
  }
  #time-4:before {
    content: "⁴⁄₆";
    font-weight: 400;
  }
  #time-4 {
    border-left: 1.5px solid #cc819a;
    background-color: rgba(0, 0, 0, 0.03);
  }
  #time-5:before {
    content: "⁵⁄₆";
    font-weight: 400;
  }
  #time-5 {
    border-left: 1.5px solid #e67480;
    background-color: rgba(0, 0, 0, 0.03);
  }
  #time-6:before {
    content: url("/assets/sun.svg");
    width: 24px;
    height: 24px;
    padding-top: 6px;
    font-weight: 400;
  }
  ul li:nth-child(even) {
  }

  @media (prefers-color-scheme: dark) {
    ul li:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.04);
    }
    :global(.current) {
      border-bottom: 3px dotted #ffafaf;
    }
  }

  @media only screen and (max-width: 280px) {
    ul {
      font-size: 1.1rem;
    }
    #time-0:before {
      width: 16px;
      height: 16px;
      padding-top: 6px;
    }
    #time-6:before {
      width: 16px;
      height: 16px;
      padding-top: 4px;
    }
  }
</style>

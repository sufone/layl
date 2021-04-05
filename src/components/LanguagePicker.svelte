<script>
    import { locale, locales } from 'svelte-i18n'
    import { onMount } from 'svelte';

    onMount(() => {
        console.log(locales)
       document.getElementById('language-picker').value = $locale
    })

</script>

<div class="select">
    <select id="language-picker" bind:value={$locale}>
        <option value="ar">العربية 🇯🇴</option>
        <option value="en-US">English 🇺🇸</option> 
        <!-- calling it en-US might be an issue, but I think it falls back to our proivded en locale so ok -->
    </select>
</div>


<style>
    select {
        appearance: none;
        background-color: rgb(247, 247, 247);
        border:  1px solid rgb(161, 161, 161);
        border-radius: 4px;
        /* border-bottom: 1px solid rgb(88, 88, 88); */
        padding: 0.25em;
        margin: 1em;
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
        line-height: inherit;
    }
    @media (prefers-color-scheme: dark) {
        select {
            color: #dadada;
            background-color: #3a3a3a;
        }
    }
</style>
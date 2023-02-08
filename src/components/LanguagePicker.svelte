<script>
    import { locale, _ } from 'svelte-i18n'
    import { onMount } from 'svelte'

    // because the some lang. fonts need a larger font-size
    let mounted = false
    onMount(() => {
        mounted = true
    })
    $: if (mounted && $locale) { 
        if ($locale === "ar") {
            document.documentElement.className = "large-text"
        } else {
            document.documentElement.className = "default-small-text"
        }
    }
        
</script>


<svelte:head>
	<title>{$_("page_tab_title", { default: 'Layl: Calculator for tahajjud time, qiyam, worship & sleep in the Islamic night!' })}</title>
</svelte:head>

<div class="select">
    <select id="language-picker" bind:value={$locale}>
        <option value="en-US">🇺🇸 English </option> 
        <option value="ar">🇯🇴 العربية</option>
        <option value="sv">🇸🇪 Svenska</option>
        <!-- calling it en-US might be an issue, but I think it falls back to our provided `en` locale so its ok -->
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

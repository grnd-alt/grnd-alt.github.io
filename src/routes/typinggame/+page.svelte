<script lang="ts">
    import quotesObject from '$lib/constants/quotes.json'
	import { error } from '@sveltejs/kit';
    let typeindex:number = 0;
    let quoteIndex = Math.floor(Math.random()*quotesObject.quotes.length-2);
    let currentQuote:string = quotesObject.quotes[quoteIndex].quote
    let currentTyped:string = ""
    let errorIndex:number|undefined;
    $: currentTyped, handleKeyDown();
    if (currentQuote.split(" ").length > 20) {
        currentQuote = currentQuote.split(" ").slice(0,20).join(" ");
    }
    function getHighestSameIndex(a:string,b:string) {
        var i = 0;
        if (a === b) return a.length;
        while (a[i] === b[i]) {
            i++;
        }
        return i;
    }
    function handleKeyDown() {
        console.log("called");
        let highestSameIndex = getHighestSameIndex(currentTyped,currentQuote)
        typeindex = highestSameIndex
        errorIndex = undefined;
        if (highestSameIndex > 0 && highestSameIndex === (currentTyped.length)) {
            errorIndex = undefined
        }
        else if (highestSameIndex < currentTyped.length) {
            errorIndex = highestSameIndex;
            console.log(highestSameIndex,currentTyped.length);
        }
        if (typeindex === currentQuote.length) {
            typeindex = 0;
            quoteIndex = (quoteIndex + 1) % currentQuote.length;
            currentQuote = quotesObject.quotes[quoteIndex].quote;
            currentTyped = ""
            errorIndex = undefined
        }
        
        console.log(currentTyped,typeindex,currentQuote[0],getHighestSameIndex(currentTyped,currentQuote));
    }
</script>

<!-- <svelte:window on:keydown={handleKeyDown}/> -->

<div class="typinggame">
    <div class="quote">
        {#each currentQuote as word, index}
            <span class={"word " + (index < typeindex ? 'done':'')+ " " + (index === errorIndex ? 'error': '')}>{word}</span>
        {/each}
    </div>
    <input type="text" name="" id="" class="typeinput" bind:value={currentTyped}>
</div>
<style>
    .typeinput{
        margin-top: 10%;
        max-width: 800px;
        /* margin-inline:10%; */
    }
    .typinggame{
        margin:auto;
        max-height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;        
    }
    .quote{
        border:2px solid var(--primary);
        padding: 25px;
        border-radius: 10px;
        background: var(--secondary);
        max-width: 800px;
        text-align: center;
        font-size: 1.8em;
    }
    .word.done{
        background:green;
    }
    .word.error{
        background:red;
    }
</style>
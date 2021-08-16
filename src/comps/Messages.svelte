<script>
    import Message from '../elems/Message.svelte';
    export let messages;

    export function scrolldown(){
        let d = document.querySelector(".bottom");
        d.scrollIntoView({alignToTop :false,behavior:"smooth"});
    }
</script>

<div class="messages">
    {#each messages as message}
        <Message message={message}/>
    {/each}
    <div class="bottom"></div>
</div>

<style>
    .messages {
        border: 2px solid var(--color-accent);
        border-radius: 1em;
        background-color: hls(0, 10%, 0%);
        margin:0px;
        padding:0px;
        /* width: 100vw; */
        height:8em;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>
<script>
	import Player from '../elems/Player.svelte';
	import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let roomID;

export let players

console.log(players)
console.log(Object.values(players))
    $: sortedPlayers = Object.values(players).sort((a,b) => b.points - a.points);
console.log(sortedPlayers)

function ExitRoom() {
		dispatch('exit',true);
    }
</script>

<div class="side" in:fly={{ x: -20 }}>
    
    <div class="top">
        <div>Room: {roomID}</div>
        <div>
            <button on:click={ExitRoom} title="Back">
                <object type="image/svg+xml" data="/images/arrowback24px.svg" title="Log Out"/>
            </button>
        </div>
    </div>
    <div class="playerlist">
        {#each sortedPlayers as player, i}
            <Player data={player} index={i}/>
        {/each}
    </div>
    <!-- <button on:click={test}>Test</button> -->
</div>

<style>
.side{
    display:flex;
    flex-direction:column;
    border: 1px solid yellow;
    height:100%;
}
.top{
    display:grid;
    grid-template-columns:1fr auto;
}
/* .playerlist{
    overflow-y: hidden !important;
    border: 1px solid green;
    height:100%;
} */
@media (orientation:landscape){
    .playerlist{
        overflow-y: hidden !important;
        border: 1px solid green;
        height:100%;
    }
}

@media (orientation:portrait){
    .playerlist{
        overflow-y: hidden !important;
        border: 1px solid green;
        max-height:calc(var(--default-font-size) * 20);
        height:calc(var(--default-font-size) * 10);
    }
}
</style>
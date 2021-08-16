<script>
	import Player from '../elems/Player.svelte';
    export let roomID;

    let players = [
        {name:"jeromel1978",points:50},
        {name:"kimberly",points:25},
        {name:"billybob",points:10}
    ];

    $: sortedPlayers = players.sort((a,b) => b.points - a.points);

</script>

<div class="side">
    
    <div class="top">
        <div>Room: {roomID}</div>
        <div>
            <button>Exit</button>
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
<script>
    import Timer from "../elems/Timer.svelte";
    import Phase from "../elems/Phase.svelte";
    import Backro from "../elems/Backro.svelte";
    import RoomLobby from "../elems/RoomLobby.svelte";
    import Entries  from "./Entries.svelte";
    export let roomID;

    let phaseID = 0;
    let phases = ["Lobby","Category Selection","Writing","Voting","Recap"];
    let phase = phases[phaseID];

</script>

<div class="main">
    <div class="top">
        <Phase phase={phase}/>
        <Timer timemax="60"/>
    </div>
    <div class="content">
        {#if phaseID == 0}
            <RoomLobby/>
        {:else if phaseID == 1}
            {phases[phaseID]}
        {:else if phaseID == 2}
            <Backro/>
        {:else if phaseID == 3}
            <Entries roomID={roomID} phase={phaseID}/>
        {:else if phaseID == 4}
            <Entries roomID={roomID} phase={phaseID}/>
        {/if}
    </div>
</div>
    
<style>
    .main{
        width:100%;
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100%;
        box-sizing: border-box;
    }
    .top{
        /* display:grid;
        grid-template-columns: auto 1fr; */
        width:100%;
    }
    /* .top > * {
        flex: 1;
    } */
</style>
<script>
    import { onMount,createEventDispatcher } from 'svelte';
    export let data;
    export let phase;
    const dispatch = createEventDispatcher();

    function RoomSelected(){
        dispatch('room',{roomID:data.name})
    }
    $: phasename= (phase==3) ? "vote":"recap";
</script>

<div class="{phasename}">
    {#if phase == 4}
        <div on:click={RoomSelected}>{data.votes}</div>
        <div on:click={RoomSelected}>{data.player}</div>
    {/if}
    {#if phase == 3}
    <button on:click={RoomSelected}>
        <object type="image/svg+xml" data="/images/thumbup24px.svg" title="Vote"/>
    </button>
    {/if}
    <div on:click={RoomSelected}>{data.text}</div>
</div>
<style>
    .vote,.recap{
  /* width: 100vw; */
        display:grid;
    }
    .vote{
        grid-template-columns: auto 1fr ;
    }
    .recap{
        grid-template-columns: 4em auto 1fr ;
    }
    .vote:hover,.recap:hover{
        color:var(--color-accent);
        cursor: pointer;
    }
    /* .room > *:nth-child(1) {
        text-align: left;
    } */
</style>
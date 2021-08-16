<script>
    import { onMount,createEventDispatcher } from 'svelte';
    export let data;
    const dispatch = createEventDispatcher();

    function RoomSelected(){
        dispatch('room',{roomID:data.name})
    }
</script>

<div class="room">
    <div on:click={RoomSelected}>{data.name}</div>
    <div>{data.num}</div>
</div>
<style>
    .room{
        width:100%;
        display:grid;
        grid-template-columns:1fr auto;
    }
    .room:hover{
        color:var(--color-accent);
        cursor: pointer;
    }
    .room > *:nth-child(1) {
        text-align: left;
    }
</style>
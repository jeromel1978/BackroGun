<script>
    import { onMount,createEventDispatcher } from 'svelte';
    export let key;
    export let data;
    const dispatch = createEventDispatcher();

    function RoomSelected(){
        dispatch('room',{key:key,room:data.name})
    }
</script>

<div class="room" on:click={RoomSelected}>
    <!-- <div>{key}</div> -->
    <div>{data.name}</div>
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
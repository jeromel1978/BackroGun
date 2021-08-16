<script>
    import { onMount,createEventDispatcher } from 'svelte';
    export let data;
    export let index;
    const dispatch = createEventDispatcher();

    $: winning = (index == 0 ) ? "winning" : "";

</script>

<div class="player {winning}">
    <div>{data.name}</div>
    <div>{data.points}</div>
</div>
<style>
    .player{
        width:100%;
        display:grid;
        grid-template-columns:1fr auto;
    }
    .player:hover{
        color:var(--color-accent);
        cursor: pointer;
    }
    .player > *:nth-child(1) {
        text-align: left;
    }
    .winning {
        color: var(--color-winning);
    }
</style>
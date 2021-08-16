<script>
    export let userName;
    // export let gun;

    function ClearRooms() {
        console.log(gun.get('backro'))
        console.log(gun.get('backrorooms'))
    }
</script>

<div class="header">
    Backro
    {#if userName}
        , {userName}
    {/if}
</div>

<!-- <button on:click="{ClearRooms}">Clear Rooms</button> -->
<style>
.header{
 font-size: calc(var(--base-font-size) * 2);
 font-weight: 800;
  width: 100vw;
}
</style>
<script>
    import Room from '../elems/Room.svelte';
	import { fly } from 'svelte/transition';
    // import { v4 as UUIDv4 } from "uuid";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let value="";
    export let rooms;
    $: NumRooms = Object.keys(rooms).length;
    
    // console.log(rooms)
    function GetRooms(){
    }

    function NewRoom(){
        dispatch('roomadd',true)
    }

    function Search() {
    }
    function SelectRoom(data) {
        dispatch('roomselected',data.detail.key)
    }
    function LogOut() {
        user.leave();
		dispatch('logout',true);
    }
</script>

<div class="side" in:fly={{ x: -20 }}>
    
    <div class="top">
        <div>
            <button on:click={LogOut} title="Log Out">
                <object type="image/svg+xml" data="/images/logout24px.svg" title="Log Out"/>
            </button>
        </div>
        <div>Rooms ({NumRooms})</div>
        <div>
            <button on:click={NewRoom} title="Create New Room">
                <object type="image/svg+xml" data="/images/addcircle24px.svg" title="Create New Room"/>
            </button>
        </div>
    </div>
    <div>
        <input type="text" bind:value title="Search"/><button on:click={Search} title="Search">
            <object type="image/svg+xml" data="/images/search24px.svg" title="Search"/>
        </button>
        <button title="Refresh">
            <object type="image/svg+xml" data="/images/refresh24px.svg" title="Refresh"/>
        </button>
    </div>
    <div class="roomlist">
        {#each Object.entries(rooms) as [key,room]}
            <Room key={key} data={room} on:room={SelectRoom}/>
        {/each}
    </div>
    <!-- <button on:click={test}>Test</button> -->
</div>

<style>
.side{
    display:flex;
    flex-direction:column;
    /* border: 1px solid yellow; */
    height:100%;
}
.top{
    display:grid;
    grid-template-columns:auto 1fr auto;
}
/* .top > div {
    display:flex;
    align-content: center;
    text-align: center;
    justify-content: center;
} */
.roomlist{
    overflow-y: hidden !important;
    /* border: 1px solid green; */
    height:100%;
}
</style>
<script>
	import Room from '../elems/Room.svelte';
    import { v4 as uuidv4 } from "uuid";
    // import { rooms } from '../scripts/stores.js';
    // import Gun from 'gun';
    import { onMount,createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    // const gun = Gun();
    // export let gun;
    // const SEA = Gun.SEA;
    let value="";
    let rooms = [];
    $: NumRooms = rooms.length;
    let name = "";
    let Key = "";

    onMount(() =>{
        // rooms.subscribe();
        // GetRooms();
    });
    
    function GetRooms(){
        // rooms.subscribe;
        // gun.get('backrorooms').on(function(data,key){
        //     NumRooms = JSON.stringify(data);
        //     let names = data.name;
        //     console.log(names);
        //     rooms = data;
        // })
        // // gun.get('backrorooms',function(data){
        // //     // NumRooms = JSON.stringify(data);
        // //     NumRooms = data;
        // //     rooms = data;
        // // })

        // gun.get('backro').on(function(data,key){
        //     name = data.name;
        // })
    }

    function NewRoom(){
        // alert("hi");
        rooms.push({name:uuidv4().substr(0,8),num:1});
        rooms = rooms;
        // rooms.newroom();
        // let room = gun.get(value).put({name:value})
        // gun.get('backrorooms').set(room);
    }

    function Search() {
        // console.log(rooms);
    }
    function SelectRoom(room) {
        // console.log(room.detail.roomID)
        dispatch("roomselected",room.detail.roomID)
    }
</script>

<div class="side">
    
    <div class="top">
        <div>Rooms ({NumRooms})</div>
        <div>
            <button on:click={NewRoom}>New Room
                <object type="image/svg+xml" data="/images/addcircle24px.svg" title="Create New Room"/>
            </button>
        </div>
    </div>
    <div>
        <input type="text" bind:value/><button on:click={Search}>
            <object type="image/svg+xml" data="/images/search24px.svg" title="Search"/>
        </button>
        <button>
            <object type="image/svg+xml" data="/images/refresh24px.svg" title="Refresh"/>
        </button>
    </div>
    <div class="roomlist">
        {#each rooms as room}
            <Room data={room} on:room={SelectRoom}/>
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
.roomlist{
    overflow-y: hidden !important;
    border: 1px solid green;
    height:100%;
}
</style>
<script>
    import { createEventDispatcher } from 'svelte';
	import Rooms from './Rooms.svelte'
	import RoomSide from './RoomSide.svelte'
	import RoomLayout from './RoomLayout.svelte'
    import Instructions from "../elems/Instructions.svelte";
	import Chat from './Chat.svelte'
	import { gun, GetRooms, GetMessages, GetPlayers, SetRoom} from '../scripts/backrogun.js'
	export let name;

	let rooms = GetRooms();
	let roomID = "";
	$: CurrRoom = SetRoom(roomID);
	$: messages = GetMessages(CurrRoom.get('messages'))
	$: players = GetPlayers(CurrRoom.get('players'),roomID)
	let tempPlayers;
	// let adding = false;
	
	
    const dispatch = createEventDispatcher();

	console.log($rooms)

	console.log(AddCounts($rooms))
	function PlayerCount(roomID){
		let t = SetRoom(roomID);
		tempPlayers = GetPlayers(t.get('players'),roomID)
		return Object.keys($tempPlayers).length
	}
	function AddCounts(obj){
		for (let k in obj){
			let n = PlayerCount(k);
			obj[k].num = n;
		}
		return obj
	}

	function RoomSelected(data){
		roomID = data.detail;
		let p = gun.get(name).put({ points: 0, name: name });
		gun.get("backro").get("rooms").get(roomID).get("players").set(p)
	}
	function RoomAdd(){
		roomID = rooms.add(name);
	}
	function AddMessage(message){
		messages.add(name,message.detail)
	}
	function LogOut() {
		dispatch('logout',true);
	}
	function ExitRoom(){
		gun.get("backro").get("rooms").get(roomID).get("players").get(name).put(null)
		roomID = ''
	}
</script>

<div class="ui">
	<div class="middle">
		{#if roomID == ""}
			<Rooms rooms={AddCounts($rooms)} on:roomselected={RoomSelected} on:roomadd={RoomAdd} on:logout={LogOut}/>
			<Instructions/>
		{:else}
			<RoomSide roomID={roomID} players={$players} on:exit={ExitRoom}/>
			<RoomLayout roomID={roomID}/>
		{/if}
	</div>
	<div>
		<Chat messages={$messages} on:messageentered={AddMessage}/>
	</div>
</div>

<style>
.ui{
	height:100%;
	margin:0px;
		display:grid;
		grid-template-rows: 1fr auto;
	/* display:flex;
	flex-direction:column; */
}
@media (orientation:landscape){
	.middle{
		display:grid;
		grid-template-columns: auto 1fr;
		/* display:flex;
		flex-direction: row;
		justify-self: stretch;
		height:100%; */
	}
	/* .middle:nth-child(1){
		flex:1;
	} */
	/* .middle:nth-child(2){ */
	/* justify-self: stretch; */
	/* } */
}

@media (orientation:portrait){
	.middle{
		display:grid;
		grid-template-rows: auto 1fr;
		/* display:flex;
		flex-direction: column;
		height:100%; */
	}
	/* .middle:nth-child(1){
		height:100%;
	} */
}
</style>
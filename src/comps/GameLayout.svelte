<script>
	import Rooms from './Rooms.svelte'
	import RoomSide from './RoomSide.svelte'
	import RoomLayout from './RoomLayout.svelte'
	import Chat from './Chat.svelte'
    // export let gun;
	export let name;
	let roomID = "";

	function RoomSelected(data){
		roomID = data.detail;
		roomID = roomID;
	}
</script>

<div class="ui">
	<div class="middle">
		{#if roomID == ""}
			<Rooms on:roomselected={RoomSelected}/>
		{:else}
			<RoomSide roomID={roomID}/>
		{/if}
		<RoomLayout roomID={roomID}/>
	</div>
	<div>
		<Chat name={name}/>
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
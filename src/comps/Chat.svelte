<script>
	import Messages from './Messages.svelte'
	import ChatInput from './ChatInput.svelte'

	let messages = [];
	let box;
	let chat=true;
	export let name;

	function addMessage(message) {
		messages.push({name:name,message:message.detail});
		messages=messages;
		setTimeout(()=>{box.scrolldown()},100);
	}
</script>

<div class="chat">
	<Messages messages={messages} bind:this={box}/>
	<ChatInput chat={chat} on:chat="{addMessage}"/>
</div>

<style>
    .chat{
  		width: 100vw;
	}
</style>
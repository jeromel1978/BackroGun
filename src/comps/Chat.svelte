<script>
    import { onMount,createEventDispatcher } from 'svelte';
	import Messages from './Messages.svelte'
	import ChatInput from './ChatInput.svelte'

	let box;
	let chat=true;
	export let messages;

    const dispatch = createEventDispatcher();
	
	function addMessage(message){
        dispatch('messageentered',message.detail)
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
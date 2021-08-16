<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let value = "";
    export let chat;

    function SendPressed(){
        if(chat){
            SendMessage('chat',value);
        }
    }
    function CheckForEnter(e){
        if(e.key == "Enter"){
            SendMessage('chat',value);
        }
    }

    function SendMessage (mode="chat",message=""){
            dispatch('chat',value);
        value="";
    }
</script>

<div class="chat">
    <div class="text"><input type="text" name="txtInput" bind:value on:keydown={CheckForEnter}/></div>
    <div><button on:click="{SendPressed}">
        <object type="image/svg+xml" data="/images/send24px.svg" title="Send"/></button></div>
</div>

<style>
    .chat{
  width: 100vw;
        display: grid;
        grid-template-columns: 1fr auto;
    }
    input,button{
        margin:0;
        width:100%;
    }
</style>
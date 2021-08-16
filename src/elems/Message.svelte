<script>
    export let message;
</script>

<div class="messageitem">
    <div class="name">{message.name}</div><div class="message"> - {message.message}</div>
</div>
<style>
    
.name {
  /* color: var(--color-accent); */
  color: red;
}
.messageitem {
  display: flex;
}
</style>
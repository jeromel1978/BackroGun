<script>
	import { fly } from 'svelte/transition';
    export let message;

    const formatter = new Intl.DateTimeFormat(`en-CA`,{
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'UTC'
    });
    function format(t) {
      var diff = new Date().getTimezoneOffset();
      if (!t) return Date.now()
      let f = formatter.format(t - (diff*60000));
      return f;
   }
</script>

{#key message.stamp}
<div class="messageitem" in:fly={{ y: 20 }}>
  <div class="posted">[{format(message.stamp)}]&nbsp;</div><div class="name">{message.sender}</div><div>&nbsp;:&nbsp;</div><div class="message">{@html message.text}</div>
</div>
{/key}

<style>
    
.posted {
  /* color: var(--color-accent); */
  color: yellow;
}
.name {
  /* color: var(--color-accent); */
  color: red;
}
.messageitem {
  display: flex;
}
</style>
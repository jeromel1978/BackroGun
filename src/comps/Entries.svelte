<script>
	import Entry from '../elems/Entry.svelte';
    export let roomID;
    export let phase;

    let entries = [
        {text:"another bad creation",votes:2, player:"jerome"},
        {text:"Amanda Bines crys",votes:1, player:"kimberly"},
        {text:"among blind centaurs",votes:0, player:"billy bob"}
    ];

    $: sortedEntries = entries.sort();

</script>
<div class="entrylist">
    {#each sortedEntries as entry, i}
        <Entry data={entry} phase={phase}/>
    {/each}
</div>

<style>
.entrylist{
    border: 1px solid green;
    /* width:100%; */
}
</style>
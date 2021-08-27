<script>
    export let timemax;
    let timeleft = timemax;
    let t = setInterval(()=>{
        timeleft--;
        // setProgress(timeleft);
    },1000)

    $: if(timeleft===0) clearInterval(t);

        // var circle = document.getElementById("SVGInternalCircle")
        // var radius = circle.r.baseVal.value;
        // var circumference = radius * 2 * Math.PI;

        // circle.style.strokeDasharray = `${circumference} ${circumference}`;
        // circle.style.strokeDashoffset = `${circumference}`;

        // function setProgress(percent) {
        // const offset = circumference - percent / timemax * circumference;
        // circle.style.strokeDashoffset = offset;
        // }


</script>
<div>
    <object type="image/svg+xml" data="/images/progresscircle.svg?n=60" title="Time Left" class="progress"/>
</div>
<style>
.progress{
    width:120px;
    height:120px;
}
</style>
<!-- <script lang='ts'> -->
<script>
	import Header from './comps/Header.svelte'
	import Login from './comps/Login.svelte'
	import GameLayout from './comps/GameLayout.svelte'
	// import BackroGun from './scripts/backrogun.js'
// type IUSERArgs = {
//   detail: object;
// }
	let message = '';
	let loggedIn = false;
	let userName = "";

	const SignIn = (e) =>{
		LogIn(e.detail);
	}
	function SignUp(e) {
		LogIn(e.detail);
	}

	function LogIn(user){
		userName = user.name;
		loggedIn = true;
	}
	function LogOut() {
		loggedIn = false;
		message = 'You have successfully logged out';
	}
</script>

<svelte:head>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js" on:load={initializeRemarkable}></script> -->
	<!-- <script src="https://cdn.jsdelivr.net/npm/gun/gun.js" on:load={window.bkro.initGun}></script>
	<script src="https://cdn.jsdelivr.net/npm/gun/sea.js" on:load={window.bkro.initSEA} defer></script> -->
</svelte:head>

<main>
	<Header userName={userName}/>
	{#if !loggedIn}
		<Login on:signin={SignIn} on:signup={SignUp} message= {message}/>
	{:else}
		<GameLayout name={userName} on:logout={LogOut}/>
	{/if}
</main>

<style>
	main {
		text-align: center;
		width:100%;
		height:100%;
		display:grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
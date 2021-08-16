<!-- <script lang='typescript'> -->
<script>
	import Header from './comps/Header.svelte'
	import Login from './comps/Login.svelte'
	import GameLayout from './comps/GameLayout.svelte'

    // const gun = Gun(['http://localhost:8765/gun', 'https://mvp-gun.herokuapp.com/gun', 'https://e2eec.herokuapp.com/gun']);
	// const gun = Gun({web: HTTP.createServer(Gun.serve(__dirname)).listen(8765) });
	// import user from 'gun/user';

	let loggedIn = false;
	let userName = "";

	const SignIn = (e) =>{
		//alert(e.detail.name);
		userName = e.detail.name;
		// user = e.detail.user;
		loggedIn = true;
	}
	function SignUp(e) {
		//alert(e.detail.name);
		userName = e.detail.name;
		// user = e.detail.user;
		loggedIn = true;
	}
	function initGun(){
		gun = new window.Gun();
		console.log("gun loaded");
		console.log(gun)
	}
	function initSEA(){
		SEA = window.SEA;
		console.log("SEA loaded");
		console.log(SEA)
		user = gun.user();
		console.log("user loaded");
		console.log(user);
	}
	let gun;
	let SEA;
	let user;
</script>

<svelte:head>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js" on:load={initializeRemarkable}></script> -->
	<script src="https://cdn.jsdelivr.net/npm/gun/gun.js" on:load={initGun}></script>
	<script src="https://cdn.jsdelivr.net/npm/gun/sea.js" on:load={initSEA}></script>
</svelte:head>

<main>
	
	<!-- <script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script> -->
	<Header userName={userName}/>
	<!-- <h1>Hello {userName}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	{#if !loggedIn}
		<Login gun={gun} on:signin={SignIn} on:signup={SignUp}/>
	{:else}
		<GameLayout name={userName}/>
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
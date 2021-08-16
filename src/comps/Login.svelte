<script>
    // import Gun from 'gun';
    import { onMount,createEventDispatcher } from 'svelte';
    // const gun = Gun();
    // export let gun;
    // export let user;
    // const user = gun.user;
    // const SEA = Gun.SEA;

    const dispatch = createEventDispatcher();

    let username = '';
    let password = "";
    let GotName = '';

    onMount(async () => {
        GetName();
    })


    function SignIn() {
        // gun.auth(username,password)
        // gun.get('backro').put({name: username})
        dispatch('signin',{name:username});
    }

    function SignUp() {
    // const user = gun.user;
    // console.log(user);
    // console.log(gun);
        // gun.create(username,password)
        // gun.get('backro').put({name: username})
        dispatch('signup',{name:username});
    }

    function GetName() {
        // gun.get('backro').on(function(data,key){
        //     username = data.name;
        // })
    }

//     function forgot(username, A1, A2){
//   // A1 and A2 are answers to security questions they made earlier.
//   var scrambled = await gun.user().get('hint').then();
//   var proof = await Gun.SEA.work(A1, A2);
//   var hint = await Gun.SEA.decrypt(scrambled, proof);
//   return hint; // your password hint!
// }
</script>

<!-- test -->
<div class="login">
    <div>
        <label for="username">User Name: </label>
        <input type="text" id="username" name="username" bind:value={username}>
    </div>
    <div>
        <label for="password">Password: </label>
        <input type="text" id="password" name="password">
    </div>
    <div>
        <button on:click={SignIn}>Sign In
            <object type="image/svg+xml" data="/images/login24px.svg" title="Sign In"/>
        </button>
        <button on:click={SignUp}>Sign Up</button>
    </div>
</div>
<style>
	.login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		width:100%;
	}

</style>
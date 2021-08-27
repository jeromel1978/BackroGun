<script>
    import { onMount,createEventDispatcher } from 'svelte';
	import { gun, login } from '../scripts/backrogun.js'

    const user = gun.user().recall({ sessionStorage: true });
    const dispatch = createEventDispatcher();

    export let message = '';
    let type = '';
    let tog = '';
    let passtype = 'password';
    let username = '';
    let password = '';

    // $: password = document.getElementById('password').value;
    onMount(async () => {
        GetName();
    })


    function SignIn() {
        type = 'signin';
        user.auth(username,password,Authenticated);
        // dispatch(,{name:username});
    }

    function SignUp() {
        type = 'signup';
        user.create(username,password,Authenticated);
    }

    function Authenticated(res){
        if (res.err) {
            message = res.err;
        } else {
            dispatch(type,{name:username,get:res.get});
        }
    }

    function GetName() {
        // gun.get('backro').on(function(data,key){
        //     username = data.name;
        // })
    }
    function TogglePass() {
        if(passtype == 'password') {
            passtype = 'text';
            tog = 'off';
        } else {
            passtype = 'password';
            tog = '';
        }

    }
    function UpdatePass() {
        password = document.getElementById('password').value;
    }

    function CheckForEnter(e){
        if(e.key == "Enter"){
            SignIn();
        }
    }
    function Clear(){
        // gun.get(`backro`).put(null);
        login.clear();
    }
    function Test(){
        // gun.get(`backro`).put(null);
        login.test();
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
        <div class='input'>
            <label for="username">User Name: </label>
        </div>
        <div class='input'>
            <input type="text" class="input" bind:value={username}>
        </div>
        <div class='input'>
            <label for="password">Password: </label>
        </div>
        <div class='input'>
            <input id="password" type={passtype} on:input={UpdatePass} on:keydown={CheckForEnter}/>
            <button on:click={TogglePass}>
                <object type="image/svg+xml" data="/images/visibility{tog}24px.svg" title="Show Password"/>
            </button>
        </div>
    </div>
    <div>
        <button on:click={SignIn}>Sign In
            <object type="image/svg+xml" data="/images/login24px.svg" title="Sign In"/>
        </button>
        <button on:click={SignUp}>Sign Up</button>
    </div>
    <div>{message}</div>
    <button on:click={Clear}>Clear DB</button>
    <button on:click={Test}>Test</button>
</div>
<style>
	.login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		width:100%;
	}

    .input {
        /* box-sizing:border-box; */
        width:100%;
    }

</style>
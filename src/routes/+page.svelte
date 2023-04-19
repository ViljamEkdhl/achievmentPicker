<script>
  import { goto } from '$app/navigation';
      
  let userId = '';

  async function handleSubmit() {    
  const params = new URLSearchParams({
      userId: userId,
  })

  const payload = {
    userId: userId
  }
    // Call an API to authenticate the user
    const response = await fetch(`/api?${params}`, { 
    method: 'POST',
    body: JSON.stringify(payload)
    });
    const res = response.json();
    console.log(res)
  }
</script>

<h1>Welcome to SvelteKit</h1>

<div class="login-form">
    <form on:submit|preventDefault={handleSubmit}>
      <label>
          Username:
          <input bind:value={userId} required />
      </label>
      
      <button type="submit">Generate</button>
      </form>
  </div>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

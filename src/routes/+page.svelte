<script>
  import { goto } from '$app/navigation';
      
  let userId = '';

  async function handleSubmit() {    
  const payload = {
    userId: userId,
    type: "steamID64"
  }
    // Call an API to authenticate the user
    const response = await fetch(`/api`, { 
    method: 'POST',
    body: JSON.stringify(payload)
    });
    const res = response.json();
  }
</script>

<h1>Welcome to my AchievementPicker</h1>

<div class="login-form">
    <form on:submit|preventDefault={handleSubmit}>
      <label>
          steamID64:
          <input bind:value={userId} required />
      </label>
      
      <button type="submit">Generate</button>
    </form>
</div>



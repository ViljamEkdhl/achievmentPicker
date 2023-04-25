<script lang="ts">
    export let input: any;
    console.log("INPUT ACHIEVEMENTS")
    console.log(input)
</script>

{#if input.achievements && input.achievements.length > 0}
  <ul>
    {#each input.achievements as achievement}
      <li>
        <p>{achievement.apiname}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>No achievements found.</p>
{/if}


<style>

</style>
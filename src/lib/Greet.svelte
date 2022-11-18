<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import OnClick from "../components/onNext.svelte";

  let name = "";
  let greetMsg = "";

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg = await invoke("greet", { name });
  }
</script>

<div>
  <div class="row ">
  <div class="flex flex-col">
    <label>
      <input type="checkbox" class="accent-pink-500" checked> Текст - 3.000 рублей
    </label>
    <label>
      <input type="checkbox" class="accent-pink-500" checked> Текст - 3.000 рублей
    </label>
    <label>
      <input type="checkbox" class="accent-pink-500" checked> Текст - 3.000 рублей
    </label>
    <label>
      <input type="checkbox" class="accent-pink-500" checked> Текст - 3.000 рублей
    </label>
    <label>
      <input type="checkbox" class="accent-pink-500" checked> Текст - 3.000 рублей
    </label>
  </div>
    <!-- <input id="greet-input" placeholder="Enter a name..." bind:value={name} /> -->
    <!-- <button on:click={greet}> Greet </button> -->
  </div>
  
  <div class="grid grid-cols-6 gap-4">
    <!-- svelte-ignore component-name-lowercase -->
    <OnClick />
  </div>
  <!-- <p>{greetMsg}</p> -->
</div>

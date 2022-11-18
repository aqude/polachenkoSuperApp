<script>
    // @ts-ignore
    import FirstWindow from "../components/firstWindow.svelte";
</script>

<main>
    <div class="container mx-auto mt-5  px-40 text-center" >
        <div class="rounded border-x-8 border-x-pink-500">
             <h1 class=" font-mono  text-black font-bold text-3xl">
                <!-- svelte-ignore a11y-missing-attribute -->
                Конфигуратор <a class="underline decoration-pink-500">приборов</a>
             </h1> 
        </div>
        <div class="mt-10 text-2xl">
        <FirstWindow/>
        </div>
    </div>
</main>
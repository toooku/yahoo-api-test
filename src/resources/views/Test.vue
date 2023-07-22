<template>
    <p class="text-3xl font-bold underline">
        Hello world!
    </p>

    <div>{{ text }}</div>
    <button @click="onClick" class="bg-gray-600 hover:bg-gray-500 text-white rounded px-4 py-2">click</button>
</template>

<script setup>
const text = 'Hello World!!';
const onClick = () => { console.log('Clicked!!') };
</script>


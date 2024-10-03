<script setup>
const props = defineProps(['options']);
</script>

<template>
    <div class="my-2 max-w-xs rounded-lg bg-white px-4 py-4 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
        <div>
            <span class="drop-shadow-lg">
                <Badge :type="options.type" :text="options.badge_content" />
            </span>
        </div>
        <div class="mt-2 pl-1 text-2xl font-bold tracking-tight text-slate-900" :class="options.title_color">
            {{ options.title }}
        </div>
        <p class="mt-2 pl-1 text-sm" :class="options.text_color">
            <slot name="content" />
        </p>
    </div>
</template>
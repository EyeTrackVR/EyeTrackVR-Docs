<script setup>
/* Renders as a standard VitePress callout (the same block `::: warning`
 * produces), so alerts written in Vue and in markdown look identical.
 * `options.type` is one of: info | tip | warning | danger.
 * `title_color` / `text_color` in the options are no longer used. */
const props = defineProps(['options']);
</script>

<template>
    <div class="custom-block" :class="options.type">
        <p class="custom-block-title">{{ options.badge_content }}</p>
        <p v-if="options.title" class="font-semibold">{{ options.title }}</p>
        <slot name="content" />
    </div>
</template>

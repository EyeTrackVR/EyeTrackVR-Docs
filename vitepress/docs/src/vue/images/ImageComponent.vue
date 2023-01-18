<script setup>
const props = defineProps(['options']);
</script>

<template>
    <div align="center" class="mb-4">
        <figure>
            <a v-if="options.url_2" class="no_icon" target="_blank" rel="noopener" :href="options.url_2">
                <img class="docimage max-w-full h-auto rounded-lg" :src="options.url" :alt="options.alt"
                    :style="options.max_width" />
            </a>
            <a v-else class="no_icon" target="_blank" rel="noopener" :href="options.url">
                <img class="docimage max-w-full h-auto rounded-lg" :src="options.url" :alt="options.alt"
                    :style="options.max_width" />
            </a>
            <figcaption v-if="options.caption">
                <br>
                {{ options.caption }}
                <a v-if="options.caption_link" :href="options.caption_link" target="_blank">
                    <span class="iconify" data-icon="mdi:open-in-new" data-inline="false">
                        {{ options.caption_link }}
                    </span>
                </a>
            </figcaption>
        </figure>
    </div>
</template>
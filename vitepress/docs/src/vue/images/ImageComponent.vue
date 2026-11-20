<script setup>
import { computed } from 'vue';

const props = defineProps(['options']);

/* Screenshots carry no intrinsic meaning for screen readers or Google Images,
 * so fall back to the caption, then to a generic label, instead of shipping an
 * empty alt attribute. */
const altText = computed(
    () =>
        props.options?.alt ||
        (props.options?.caption ?? '').toString().trim() ||
        'EyeTrackVR documentation screenshot'
);

/* Some entries ask for `width:100%` alongside their max-width; that now lands
 * on the figure, so pass the stretch on to the image. */
const stretch = computed(() => /(^|;)\s*width:\s*100%/.test(props.options?.max_width ?? ''));
</script>

<template>
    <div align="center" class="mb-4">
        <!-- max_width sits on the figure, not the img, so `max-w-full` can still
             shrink the image on narrow screens. -->
        <figure class="mx-auto" :style="options.max_width">
            <a v-if="options.url_2" class="no_icon" target="_blank" rel="noopener" :href="options.url_2">
                <img class="docimage max-w-full h-auto rounded-lg" :class="{ 'w-full': stretch }" :src="options.url" :alt="altText" loading="lazy"
                    decoding="async" />
            </a>
            <a v-else class="no_icon" target="_blank" rel="noopener" :href="options.url">
                <img class="docimage max-w-full h-auto rounded-lg" :class="{ 'w-full': stretch }" :src="options.url" :alt="altText" loading="lazy"
                    decoding="async" />
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
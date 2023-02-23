<script setup>
const props = defineProps(['options']);
</script>

<template>
    <div class="checkboxes">
        <ul style="list-style: none;">
            <li v-for='item in props.options.object'>
                <div v-if="props.options.state">
                    <input type="checkbox" checked>
                    <label v-if="item.link !== null || props.link !== ''"><a :href="item.link" target="_blank">{{
                        item.label
                    }}</a></label>
                    <label v-else>{{ item.label }}</label>
                </div>
                <div v-else>
                    <input type="checkbox" unchecked>
                    <label v-if="item.link !== null || props.link !== ''"><a :href="item.link" target="_blank">{{
                        item.label
                    }}</a></label>
                    <label v-else>{{ item.label }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>
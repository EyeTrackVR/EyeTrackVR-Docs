<script setup>
const props = defineProps(['options']);
</script>

<template>
    <div class="checkboxes">
        <ul style="list-style: none;">
            <li v-for='item in props.options.object'>
                <div v-if="props.options.state">
                    <input type="checkbox" checked>
                    <label>{{ item.label }}</label>
                </div>
                <div v-else>
                    <input type="checkbox" unchecked>
                    <label>{{ item.label }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>
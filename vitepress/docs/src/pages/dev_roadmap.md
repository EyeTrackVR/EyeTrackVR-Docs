<script setup>
import CheckBoxList from '../vue/CheckBoxList.vue'
import { InProgress, Completed, Planned } from '../static/dev_roadmap'
</script>

# EyeTrackVR Development Roadmap

This will contain a list of features that are in progress, completed, and planned.

## Completed

<CheckBoxList
    :options="{...Completed}"
/>

## In Progress

<CheckBoxList
    :options="{...InProgress}"
/>

## Planned

<CheckBoxList
    :options="{...Planned}"
/>

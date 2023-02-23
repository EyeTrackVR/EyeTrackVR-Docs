<script setup>
import CheckBoxList from '../vue/CheckBoxList.vue'
import { InProgress, Completed, Planned } from '../static/dev_roadmap'
</script>

# Programme de développement de EyeTrackVR {.text-[#ab5ac7]}

Cette page contiendra la liste des fonctionalitées qui sont en cours de développment, finis, et prévu.

## Completed

<CheckBoxList
    :options="{...finis}"
/>

## In Progress

<CheckBoxList
    :options="{...en cours}"
/>

## Planned

<CheckBoxList
    :options="{...prévu}"
/>

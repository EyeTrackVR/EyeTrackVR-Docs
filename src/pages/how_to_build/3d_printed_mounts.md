<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
import PartsList from '../../vue/parts_list/PartsList.vue'
</script>

# 3D Printed Mounts {.text-[var(--font-accent)]}


Mounts with a `★` next to them are the recommended mounts for the respected hmd. This is based on user feedback on what works best for most people.


<Alerts :options="alerts.parts_list_three">
    <template v-slot:content>
        <p>
        Keep in mind, some mounts only have the right(or left) version available. You will need to use blender or any slicer to mirror an STL for the other side. 
        </p>
    </template>
</Alerts>

<PartsList />
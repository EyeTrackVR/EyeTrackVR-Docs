---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

import { members, contributors } from '../static/members'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      <div class="text-[#ab5ac7]">
        Our Team
      </div>
    </template>
    <template #lead>
      The development of EyeTrackVR is guided by an international
      team, some of whom have chosen to be featured below.<br>
        <br>
      EyeTrackVR developers are a group of people who are passionate about the field of augmented and virtual reality.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="members"
  />
  <VPTeamPageSection>
    <template #title>Contributors</template>
    <template #lead>Those who have actively contributed to development.<br> Community Support</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Philosophy</template>
    <template #lead>
        The <a class="custom-links" href="/intro" target="_blank">guides</a> on this website include some of our teams own notes (not all of them are polished) that we disclose for other people to use.<br>
        <br>
        Here, we hope you may find something useful to you.<br>
        <br>
        We advocate the <a class="custom-links" href="https://en.wikipedia.org/wiki/Open-source_model" target="_blank">Open Source model</a>.<br>
        <br>
        This is why we strive to make our work open to other people for consultation, replication and reuse.
    </template>
  </VPTeamPageSection>
</VPTeamPage>

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
      L'équipe de dévelopement de EyeTrackVR est gèré par une équipe internationale,
      quelque d'entre eux ont été choisis d'être mis en avant ci-dessous.<br>
        <br>
      Les développeurs de EyetrackVR sont un groupe de personnes qui sont passionés par les domaines de la réalité virtuelle et augmanté.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="members"
  />
  <VPTeamPageSection>
    <template #title>Contributeurs</template>
    <template #lead>Ceux qui ont activement contribué au developpement.<br> Support communautaire</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Philosophie</template>
    <template #lead>
        Les <a class="custom-links" href="/intro" target="_blank">guides</a> sur ce site contient des notes de notre propre équipe 
        (pas toutes aussi soignés que les autres) que l'on donnes pour que d'autres personnes puisses les utiliser<br>
        <br>
        On espère que tu trouvera quleque chose d'utile ici aussi<br>
        <br>
        On est militant du modèle<a class="custom-links" href="https://fr.wikipedia.org/wiki/Open_source" target="_blank">open source</a>.<br>
        <br>
        C'est donc pour ça que nous nous éfforçons à faire en sorte que notre travail soit ouvert aux autres pour être regardé, reproduit et/ou réutilisé.
    </template>
  </VPTeamPageSection>
</VPTeamPage>

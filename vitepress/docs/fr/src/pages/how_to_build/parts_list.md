<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
import PartsList from '../../vue/parts_list/PartsList.vue'
</script>

# Parts List {.text-[#ab5ac7]}

<Alerts :options="alerts.parts_list_one">
    <template v-slot:content>
        <p>
           Veuillez noter que le matériel n'est pas encore fixé, tout le achat est a votre perte si la liste du matériel changes.
        </p>
    </template>
</Alerts>

## Cette page est une liste basique du matériel à acheter pour construire EyeTrackVR

<Alerts :options="alerts.parts_list_two">
    <template v-slot:content>
        <p>
           Il est recommandé d'acheter vos pièces chez AliExpress vu que c'est bien moins onéreux.
        </p>
    </template>
</Alerts>

---

<Alerts :options="alerts.parts_list_three">
    <template v-slot:content>
        <p>
           Il est bon de prendre l'habiture de commander quelques pièces en plus, notament les ESPs et le programeur, cela réduira les delais liés à des composants mort à l'arrivage.
        </p>
    </template>
</Alerts>

## Setup caméra

- 2x Modules ESP-CAM-32 [Lien AliExpress ici](https://a.aliexpress.com/_mKjL9Cq)

- 2x ov2640 160° fov IR / Night vers 75mm (850nm) [Lien AliExpress ici](https://a.aliexpress.com/_mrNbZww) ou une alternative sur Amazon du quel vous aurez besoin de retirer le filtre infrarouge manuelement, [lien ici](https://www.amazon.com/Camera-Aideepen-Wide-Angle-Megapixel-Support/dp/B09XXPX4SP/)

- 1x programeur ESP-CAM programmer/ MB [Lien AliExpress ici](https://a.aliexpress.com/_mPaPgPu)

Voici un lien Amazon avec 3 ESP-CAM sans les caméras [ici](https://www.amazon.com/ESP32-CAM-ESP32-CAM-MB-Development-Compatible-Raspberry/dp/B097H2KLCH)

- 1x Port mâle USB type-A pour alimenter vos ESPs.

[connecteur simple surAliExpress ici](https://www.aliexpress.com/item/2255801092919590.html) ou [Amazon par ici](https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/)

[Ou un avec une coque sur AliExpress ici](https://www.aliexpress.com/item/2251832820552545.html) ou [Amazon par là](https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/)

- 1x Câble de calibres plus petit pour alimenter les ESP
[Câble de calibre 28 sur AliExpress ici](https://a.aliexpress.com/_mK72cy6) ou [Amazon ici](https://www.amazon.com/Fermerry-Silicone-Stranded-Copper-Electrical/dp/B089CTT5X1/)

Reccommended:

- 2x Antennes externes pour les ESPs [AliExpress ici](https://www.aliexpress.com/item/2255800868378357.html) ou [Amazon ici](https://www.amazon.com/gp/product/B09K3ZPY5Z/)

## Émeteurs infrarouges

- 4x Unfocused SMD IR emitters
Ceux recomandé vennant [de LCSC ici](https://www.lcsc.com/product-detail/Infrared-IR-LEDs_XINGLIGHT-XL-3216HIRC-850_C965891.html).
Une alternative vennant [de Digikey ici](https://www.digikey.com/en/products/detail/inolux/IN-P32ZTIR/10384796). La différence entre les deux est que ceux de LCSC ont une puissance nominale plus faible, ce qui veut dire que dans le cas d'un court circuit ou tout autre mésaventure ceux de LCSC devrait être plus sûr, ce pourquoi ils sont recommandé.
<Alerts :options="alerts.parts_list_four">
    <template v-slot:content>
        <p>
           Les plus petites ne peuvent pas être soudés à une température au dessus de 245°c ou alors elles vont brûler. des températures de soudure plus faible sont recommandée.
        </p>
    </template>
</Alerts>

<Alerts :options="alerts.parts_list_five">
    <template v-slot:content>
        <p>
           <text class="font-bold">N'ACHETEZ PAS DES LEDS CONCENTRÉS</text>
           <br>
           Si vos LEDs resembles à ce que vous pouvez trouver dans une télécomande, ne les utilisez pas. Si vous n'êtes pas sûr de ce que vous faites achetez plutôt celles de LCSC ou Digikey.
        </p>
    </template>
</Alerts>

- 4x PCB pour les émeteurs infrarouges (hautement recommandé ) Les fichiers Gerber et les shemas ce trouves [ici.](https://github.com/RedHawk989/EyeTrackVR-Hardware/tree/main/IR%20Emmitter)

- 2x résistances de 698 à 710ohm ou alors la version recomandé avec 4x résistances CMS 1206 de 350ohm pour les émeteurs infrarouges (si vous n'utilisez pas de PCB pour vos émeteurs vous pouvez acheter des résistances traversantes)
  
- [Résisatnces de 357 ohm de Digikey ici](https://www.digikey.com/en/products/detail/stackpole-electronics-inc/RMCF1206FT357R/1759919)
- [Résisatnces de 348 ohm de LCSC ici](https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_BOURNS-CR1206-FX-3480ELF_C205328.html)

ou

- [Résisatnces de 698 ohm de LCSC ici](https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_FOJAN-FRC1206F6980TS_C2933749.html)

j'ai des kits de résisatnces, LEDs infrarouges et PCBs sur mon [Tindie ici.](https://www.tindie.com/products/eyetrackvr/eyetrackvr-pcbs-components-kit/)
J'ai également un kit pré-soudé également sur [Tindie ici](https://www.tindie.com/products/eyetrackvr/assembled-eyetrackvr-ir-led-kit/)
Cela vous assures d'avoir les bonnes LEDs infrarouges.
Si vous êtes une membre de mon Patreon vous aurez un code de réduction disponible.

- 1x Câble pour alimenter les Émeteurs infrarouges
[Câble de calibre 32 venant de AliExpress ici](https://a.aliexpress.com/_mK72cy6)

## Autres pièces et ouils

- 1x Pistolet à colle ou autre forme de colle. Pistolet à colle vennant de [AliExpress ici](https://www.aliexpress.com/item/3256803968572059.html) ou d'[Amazon ici](https://www.amazon.fr/pistolet-chauffage-projets-bricolage-r%C3%A9parations/dp/B09BQSQM7V)

- 1x Fer à souder et soudure (soudure sans plomb hautement recommandé) Fer à souder générique vennant de [AliExpress ici](https://www.aliexpress.com/item/3256801448141079.html) ou d'[Amazon ici](https://www.amazon.com/Liouhoum-Auto-Sleep-Adjustable-Temperature-Thermostatic/dp/B08PZBPXLZ/ref=sr_1_9)//

## Attahces/montures imprimées en 3D

Les montures et attaches avec un  à côté d'eux sont recommandés pour son casque respectif. Ceci est basé sur des retours de la communauté pour vous indiquer ce qui marches le mieux pour la plupart des personnes.

<PartsList />

### Autre casques

Si vous n'avez pas un casque dans la liste ci-dessus, ça veut dire qu'il n'y à pas encore de monture  faite pour votre casque. Si vous avez les connaisances sufisantes en modélisation ou de bonne astuce pour monter les éméteurs et caméras dans votre casque, merci de nous contacter sur discord afin qu'on puisses l'ajouter dans la liste. À partir du moment ou les caméras peuvent rentrer dans votre casque, il est potentiellement compatible. Si vous avez envie, essayez de faire une monture pour le reste de la communauté. 

Jeuter un coup d'il sur comment faire votre propre monture [ici.](https://docs.eyetrackvr.dev/creating_your_own_camera_mount/)

<Alerts :options="alerts.parts_list_six">
    <template v-slot:content>
        <p>
           Si vous avez une monture pas listé plus haut, merci de nous faire savoir dans le discord pour que l'on puisses l'ajouter.
        </p>
    </template>
</Alerts>

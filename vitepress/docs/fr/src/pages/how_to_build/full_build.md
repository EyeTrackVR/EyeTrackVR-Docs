<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckBoxList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { RequiredHardware } from '../../static/req_hardware'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Guide d'assemblage {.text-[#ab5ac7]}

## Cette page est un guide d'assemblage étape par étape 

## Étape 1: Soyez bien sûr d'avoir lu les [choses à savoir avant de commencer](../getting_started/things_to_know)

Cette page vous donnera une vue d'ensemble sur l'état d'avencement du projet et quoi en attendre.

## Étape 2: commendez les pièces listés dans la [Liste des composants](../how_to_build/parts_list)

Merci de bien vouloir relever que le matériel utilisé dans ce projet peut être sujet à changements, même si après un peu de développement on dirait bien que nous allons rester avec le même matériel

## Étape 3: Attendre que tout arrives

Les longs délais d'envoi depuis la chine sont super  *m a r r a n t*! 
attendez vous à des temps d'attente allant de 2 semaines à 2 mois pour que toutes les choses arrives.

## Étape 4: Regroupez tout votre matos

Soyez sûr d'avoir au moins les composants suivant:

<CheckBoxList :options="{...RequiredHardware}" />

<ImageCard :options="image_settings.image_one" />

## Étape 5: Installer des antennes externes ou un bouclier pour l'antenne des ESPs

certaines cartes ESP-CAM ont des soucis quand il en viens de l'intégrité du signal, il y à deux choses qui peuves être faites afin d'aider à résoudre ou regler ces problèmes.

La première option des d'installer des antennes externes.

C'est la meuilleure solution pour avoir un résultat final impécable. si vous avez des trackers Vive ou Tundra, ceci est une étape **REQUISE**. Les interférences venant des trackers vont rendre le flux vidéo de votre ESP inutilisable. Un sac anti-statique n'aidera pas dans ce cas.Malhereusement, retirer les antènes n'est pas si simple, vous aurez à soit, retirer ou bouger une résistance qui fait la jonction entre 2 pads de soudure. l'image ci-dessous vous montres l'orientation de ces pads qui permettent de décider des 2 modes d'opération. Si vous ne reliez pas toutes les connections et avez les 2 modes activés en même temps. la résistence de 0Ohm n'a pas besoin d'être sur votre carte, vous pouvez simplement relier les 2pads.

<ImageCard :options="image_settings.external_antenna" />

vous trouverez ci-dessous un exemple de connection des 2pads et une antène attaché.

<ImageCard :options="image_settings.external_antenna_resistors" />

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/r4PsuWTFRBg" title="How to add an external antenna to ESP32-CAM board" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Cette seconde option est de recouvrir l'antenne de l'ESP avec un sachet antistatique. cela peut remédier à des problèmes, ou même les règler dans certains cas. Mais surtout, c'est totalement gratuit! Cependant, il est important de tenir compte que cette methode fonctionnes moins bien que d'avoir une antenne externe, et dans certains cas ne règleront pas vos problèmes, par exmeple si vous avez des Vive trackers.

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/wS4PS3Mw250" title="Covering an ESP32-CAM's antenna with anti-static bag" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Étape 6: Attacher les caméras aux ESPS

Regardez votre ESP et localisez le connecteur à cable plat entouré ci-dessous.

<ImageCard :options="image_settings.camera_socket" />

Relevez la pièce grise qui va vous permetre de connecter la caméra. Ne pas forcer sur la pièce ni inserrer un objet pointu, vos ongles devrait suffir.

<ImageCard :options="image_settings.camera_socket_clip" />

Maintenant inserez le cable de la caméra, veuillez faire attention que les pins font face à votre ESP, vous devriez uniquement voir la partie noire du cable.

<ImageCard :options="image_settings.camera_cable" />

Une fois que le cable est inserré, appuyez sur la pièce grise afin de l'abaisser.
Il y à peu de forces à mettre mais soyez précotioneux. Verifiez que le connecteur noir ne sortes pas du connecteur.

<ImageCard :options="image_settings.camera_clip_close" />

## Étape 7: branchez votre ESP au programeur afin de la flasher

Pourquoi téléverser le programme avant d'avoir finis d'asembler? C'est simple, pour savoir si tout fonctionnes avant de passer du temps à tout souder.

Glissez votre ESP dans le programmeur, notez que le port micro USB est à l'opposé de votre caméra.

<ImageCard :options="image_settings._7_12_one"/>

## Étape 8: Configurez Visual Studio Code et préparez vous à téléverser le firmware

Regardez le guide sur comment [installer Visual Studio Code](https://redhawk989.github.io/EyeTrackVR/setting-up-firmware-enviroment/)

une fois que VS Code est installé et configuré, allez à l'étape suivante.

## Étape 9: Brancher votre ESP et téléversez votre firmware

Notre guide, [construire et téléverser le firmware manuellement](https://redhawk989.github.io/EyeTrackVR/building-and-flashing-firmware-manually/) contient les étapes requises afin de réaliser cette étape.
Une fois flashé, verifiez que vous optenez un flux vidéo à l'aide de votre navigateur, en suite débranchez et flashez votre autre ESP.

## Étape 10: Attacher les fils d'alimentation sur un connecteur USB-A

::: attention
alimenter votre ESP depuis le programeur ne **va pas marcher correctement**. Cela délivres une tenssion plus faible qui réduirat la luminosité des LEDs et créera des atréfacts vidéo. Cela à de fortes chances de dégrader votre suivi.
:::

Prennez 2 paires de fils, préférablement de couleur différentes, les coupper à la bonne longeur (56mm dans mon cas) et torsadez les, 2 pour 5v et 2 pour la masse.
Ici j'ai utilisé du fil d'enceintes ou ceux constitudé de cuivre sont relié au 5v et ceux constitué d'argent.
En suite dénudez les fils d'à peu près 3mm de chaque coté pour exposer les fils.

<ImageCard :options="image_settings._7_12_two"/>

## Étape 11: Coupez les fils pour les LEDs infrarouges

Pour trouver la longeure optimale, prenez un bout de ficelle et faites semblant que ce soit vos cables. Faites des marques au stylo sor votre ficelle puis vos fils aux même endroits et coupez les. Faire la même chose pour l'autre Œil.
Vous allez avoir besoin de couper 3 différents cables. 2 courts pour connecter les 2 PCBs par Œil entre eux, 2 plus longs pour l'alimentation et 2 un peu plus long pour l'alimentation des LEDS près des caméras tout en bas.

Une fois coupé, dénuder 4mm de cable.

## Étape 12: Emèlez le cables 5v du connecteur USB et celui des LEDs infrarouges et les étamer

Une fois les cables entouré l'un autour de l'autre ajoutez de la soudure pour les tenir en place. Cela vous facilitera la tache lors de la soudure.

<ImageCard :options="image_settings._7_12_three"/>

## Étape 13: Soudez le cable positif à votre ESP

Poser le cable de l'autre coté du pin 5v et appliquer de la soudure.

<ImageCard :options="image_settings._13_18_one"/>

## Étape 14: Soudez le cable négatif à votre ESP

Répétez l'[Étape 12](#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them) mais avec les cables négatifs.

::: info
comme un utilisateur de notre discord à découvert, vous pouvez relier le pin `IO12` avec le pin de la masse `(GND)` sans problèmes.
:::

Dans l'exemple en dessous j'ai mis le tout au dessus du pin, ça sera une soudure qui durera à peu près une semaine, masi c'est là où le pistolet à colle se rend utile.

<ImageCard :options="image_settings._13_18_two"/>

## Étape 15: Reliez votre deuxième ESP

Répètez les étapes[12](#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them) à [14](#step-14-solder-the-negative-wire-to-esp) avec votre deuxième ESP.

## Étape 16: Préparez la soudure des PCB des LEDs infrarouges

sortez votre loupe, c'est le moment de souder les toutes petites choses.

récupèrez vos 4 PCBs, 4 LEDs infrarouges et vos 4 résistances d'~350ohm.

<ImageCard :options="image_settings._13_18_three"/>

Voici les PCBs avec les légendes pour le borchage:

<ImageCard :options="image_settings._13_18_four"/>

légendes LED:

<ImageCard :options="image_settings._13_18_five"/>

Si vous avez des LEDs différentes, merci de consulter leur fiche technique.

Queslques terminologies étant asocié:

`5V`: le pin d'alimentation 5v.

`GND`: Masse.

`AR`: After-Resistor (après résistance) cela sera utilisé comme le pin d'alimentation sur les seconds PCBs relié en série vu que les résistance ne sont pas requises sur les seconds PCBs vu qu'ils sont sur les premiers.

`SNG`: Single resistor (Résistance unique), utilisez ce pin comme du 5v si vous utilisez **une seule** résistance de `~700ohm` sur les PCB v3 (pas recommandé).

`Negative`: Cela indique la partie négative de la LED.

`Positive`: Cela indique la partie négative de la LED.

## Étape 18: Soudez les résistances au PCB v3

Vous aurez besoin d'un seul PCB ayant des résistances par Œil.

Étamer les pads des résistances. Note: dans cet exemple, j'ai utilisé un peu trop de soudure, il devrait uniquement en avoir assez pour recouvrir légèrement le pad.

<ImageCard :options="image_settings._13_18_six"/>

En suite, atrapez une résistance et la placer sur les pads.

<ImageCard :options="image_settings._13_18_seven"/>

Pendant que vous tennez la résistance, ajoutez de la soudure sur votre fer à souder et appliquez la sur la résistance.

J'aime faire ça en ayant un bout de mon étain en l'air et le toucher avec mon fer à souder pour pouvoir tout appliquer facilement.

<ImageCard :options="image_settings._13_18_eight"/>

retournez le PCB et souder l'autre bout.

<ImageCard :options="image_settings._13_18_nine"/>

Maintenant repetez pour l'autre résistance.

<ImageCard :options="image_settings._13_18_ten"/>

## Soudez les LEDs au PCB v3

Étamez les pads des LED.

<ImageCard :options="image_settings.end_one"/>

Orientez la LED et la tenir en place.

<ImageCard :options="image_settings.end_two"/>

Soudez un côté.

<ImageCard :options="image_settings.end_three"/>

Retournez-là et soudez l'autre côté.

<ImageCard :options="image_settings.end_four"/>

## Reliez les PCB v3

::: Attention
Faites attention à la direction des LEDs sur les PCBs.
:::

Si les marques vertes font face à l'interieur du PCB comme dans l'image ci-dessous: 

<ImageCard :options="image_settings.end_five"/>

Veuillez suivre le diagramme ci-dessous:

<ImageCard :options="image_settings.end_six"/>

Si les marques vertes font face à l'exterieur comme l'image ci-dessous:

<ImageCard :options="image_settings.end_seven"/>

Veuillez suivre le diagramme ci-dessous:

<ImageCard :options="image_settings.end_eight"/>

## Étape 19: Montures imprimés en 3D:

Dirigez vous vers vers [la partie des pièces imprimées en 3D](/how_to_build/parts_list#other-parts) de la liste du matériel.

Trouvez quel pièces sont pour votre casque et imprimez-les.
Certaines pièces vont marcher mieux que d'autres, il est recomandé de toutes les tester si il y en à plusieures disponibles, imprimez une de chaque.
Si aucune ne fonctionnes, vous pouvez essayer de les modifier vous même si vous savez comment faire. Si vous avez fait votre propre monture, merci de me notifier sur discord (en anglais), `Prohurtz#0001`, pour que je l'ajoute à notre liste.

Vous avez des problèmes à faire tenir les montures? essayez d'augmanter ou baisser l'échelle un petit peu afin d'assurer que ça rentres ni que ça ne bouges pas trop.

Il y à 2 mécanismes pour atacher les camérs j'usqu'a maintenant, vous trouverez comment sécuriser les caméras au différent types ci-dessous.

### Type 1

<ImageCard :options="image_settings.end_nine"/>

Ce design vous demande de glisser la caméra dans l'encoche. Généralement cette méthode de montage de la caméra est recommandé vu qu'elle n'a pas besoin de colle pour tenir en place.

placez la caméra dans l'encoche 

<ImageCard :options="image_settings.end_ten"/>

appuyez lentement à l'intérieur de la caméra pour la faire cliquer en place.

<ImageCard :options="image_settings.end_eleven"/>

<div align="center">
    <Alerts :options="alerts.end_one">
        <template v-slot:content>
            <p>
                Il y a de fortes chances de casser la monture en inserrant le caméra. Si ça arrives vous pouvez quand même sauver la monture en fonction d'où elle à casser. Un point de pistolet à colle à l'endroit suffra probablement.
            </p>
        </template>
    </Alerts>
</div>

### Type 2

<ImageCard :options="image_settings.end_twelve"/>

Ce design requière de la colle afin de fixer la caméra en place.

appliquer un peu de colle au fond de l'endroit ou la caméra doit aller.

<ImageCard :options="image_settings.end_thirteen"/>

Placez la caméra sur la monture.

<ImageCard :options="image_settings.end_fourteen"/>

## Attacher les LEDs infrarouges.

Une fois de plus les étapes vont changer en fonction de la monture.

Dans certaines cas il y aura des endroits pré-définis pour placer les LEDs.

<ImageCard :options="image_settings.end_fifteen"/>

Dans d'autres cas il n'y à pas d'endroit attitré pour vos LEDs, vous aurez à bidouiller pour trouver ce qui fonctionnera le mieux.
Cette image montre les positions optimales (ou proche d'optimal) pour les LEDs. Le pistolet à colle sera votre ami pour cette étape.

<ImageCard :options="image_settings.end_sixteen"/>

::: conseil
vous pouvez utiliser de l'alcool à 90° pour retirer facilement la colle.
:::
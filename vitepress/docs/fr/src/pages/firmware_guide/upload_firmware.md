<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Construire et téléverser le firmware manuellement {.text-[#ab5ac7]}

Téléverser votre firmware à besoin d'être fait initialmenet en utilisant un câble. Une fois que vous avez votre tracker connecté à votre WiFi, vous pourrez utiliser OTA pour mettre votre tracker à jour.

## 1. Connectez votre tracker avec le programmeur à votre PC

Pour commencer connectez votre ESP32-CAM à votre programmeur. dans le cas des programmeurs ESP32-CAM-MB la manipulation sera aussi simple que de faire glisser votre ESP32-CAM dans le socket et connecter le tout à votre PC avec un câble micro-USB. Dans certains cas ils y aura un bouton s'appelant IO0 sur le programmeur. Si c'est le cas du votre il faudrait que vous le mainteniez appuyé lorsque vous le connectez à votre PC. Une fois connecté vous pouvez relacher le bouton.

Dans le cas ou vous auriez un programmeur FTDI, ça sera un peu plus compliqué pour vous malhereusement, donc armez vous de patience et aller jeter un coup d'œil à [ce guide](https://randomnerdtutorials.com/program-upload-code-esp32-cam/) pour voir comment tout mettre en place.

## 2. Construire le firmware

1. Clickez sur le bonton Build tout en bas de la fenêtre de Visual Studio Code.

  Ce bouton lance la construction du firmware, masi ne l'envoie pas encore à votre ESP.

   ![img](https://i.imgur.com/EmSkhFp.png)

## 3. Téléverser votre firmware

- Si vous utilisez l'OTA, verifiez que le tracker que vous voulez flasher est allumé.

- Une fois que le firmware à été construit, appuyez sur le bouton uppload pour téléverser le firmware.

  Ce bouton envoie le firmware dans votre ESP
  ![img](https://i.imgur.com/lI3PFVC.png)

<Alerts :options="alerts.upload_firmware_one">
    <template v-slot:content>
        <p>
           Le programmeur MB ne vous restrain pas. Si vous utilisez un programmeur FTDI suivez le guide lié plus haut (celui de randomnerdtutorials)
        </p>
    </template>
</Alerts>  

- Si le téléversement c'est bien passé vous devriez avour une console qui resembles à quelque chose comme ça:

  ![img](https://i.imgur.com/SDQcCr1.png)

Bravo! vous avez maintenant téléverser le firmware avec succes dans votre Tracker EyeTrackVR!

Si vous galerez à téléverser votre firmware en utilisant un câble, vous pouvez suivre les étapes suivantes:

1. Verifiez que votre câble USB est bien enfoncé et branché à votre PC.
2. Verifiez que votre câble USB permet bien de transmettre des données (il est suggèré d'essayer d'autres appareils ou d'autres câbles).
3. Verifiez que vos drivers sont à jour.
4. Essayez d'autres ports USB, certains pourait ne pas être fonctionnels.

De plus, vos problèmes peuvent être causé par un logiciel tier qui bloques vos ports série COM (**VSCode ou Cura peuvent être une cause de ces problèmes**).

## Téléverser via OTA

Une fois que vous avez réussi à connecté vos trackers au WiFi, vous pouvez utiliser OTA pour gèrer les mises à jour logiciels.

1. Récupèrez l'IP de votra tracker que vous voulez flasher. Cette IP peut être trouvé via une application d'analyse du trafic ou en regardant le moniteur série du programmeur auquel votre tracker est connetcé.
2. Dans le fichier `platformio.ini` décommentez les lignes suivantes dans visual studio en retirant les `;`:

```ini
;upload_protocol = espota
;upload_port = 192.168.1.49
```

1. Changez la valeur la valeur de upload_port avec l'adresse IP récupèré plus tôt.
2. Eteignez et ré-allumez votre tracker que vous voulez flasher.
3. Attendez environ 5 secondes.
4. Appuilez sur le bouton upload pour téléverser le firmware.<br>  
   ![img](https://i.imgur.com/lI3PFVC.png)
5. Répètez les étapes ci-dessus autant de fois que vous avez de trackers.

## Trouver l'adresse IP de votre tracker

Connectez votre tracker à votre PC et ouvrez le moniteur série dans VSCode en appuilant sur l'icone en forme de `prise`.

<ImageCard :options="image_settings.upload_firmware_image_one" />

Maintenant, appuilez sur le bouton redémarer de l'ESP.
trouver quleque chose resemblant à ça dans la sortie du moniteur série:

<ImageCard :options="image_settings.upload_firmware_image_two" />

Le texte surligné est uniquement là dans cette doccumentation pour vous indiquer où ce trouve l'adresse de la caméra. Merci de la noter quelque part afin de la rentrer dans le logiciel.

Rappelez bous bien qu'un ESP ne peut avoir qu'un client, pour puvoir utiliser l'application faites bien attention de fermer votre page de navigateur préalablement ouvtere pour tester que tout fonctionnes bien.

## Dépannage

Si vous rencontrez un problème en suivant les étapes ci-dessus, vous pouvez regarder la [FAQ.](/misc/faq.html) ici.

Si vous ne trouvez pas de réponse à votre question, vous pouvez venir la poser en anglais dans le channel **#questions** dans [notre discord](https://discord.gg/kkXYbVykZX), on serait content de vous aider.

*Adapté de la [doccumentation de SlimeVR](https://docs.slimevr.dev/firmware/setup-and-install.html), Un bout du mérite revint donc à l'équipe de SlimeVR*

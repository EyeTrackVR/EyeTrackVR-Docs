# MDNS {.text-[#ab5ac7]}

## Qu'est-ce que c'est?

`mDNS` est un protocole qui vous permet de vous connecter à un appareil avec un nom plutôt qu'avec une adresse IP. Ceci est très utile quand on ne connais pas l'adresse IP d'un appareil, ou que l'on ne veut pas avoir à faire attention à l'adresse IP de l'appareil. C'est également super utile lorcequ'on utilise un adressage d'IP dynamique.

Dans le protocole `mDNS` l'adresse IP de l'appareil peut changer, mais le nom de l'appareil sera toujours le même. Ça veut dire que vous pouvez vous connecter à un appareil en utilisant son nom, même si l'adresse IP de l'appareil change.

## Comment l'utiliser

### Activer mDNS

`mDNS` est activé par défault dans le nouveau firmware, et peut être désactivé.

Pour l'utiliser, vous n'avez qu'a donner un nom à votre appareil dans le fichier de configuration du firmware.

Cette option peut être trouvé dans la section `[wifi]` du fichier `ini/user_config.ini`.

```ini
mdnsname = "openiristracker" # do not add .local
```

Par défaut, le nom de l'appareil est `openiristracker`, cependant vous pouvez le changer par ce que vous voulez.

::: warning Chnager le nom
Vu que vous avez deux ESP32, vous devez faire attention que le nom des deux ESP soit uniques et différent de l'autre. Si vous ne changez pas le nom des appareils vous ne pourrez pas vous connecter aux deux appareils en même temps.
:::

### Se conecter à l'appareil

Pour vous connecter à votre appareil, vous devez utiliser le nom de lappareil suivi de `.local`. Par exemple, si le nom de votre appareil est `esp32`, vous pourrez vous y connecter en utilisant `http://esp32.local`.

## Prérequis `Bonjour`

`Bonjour` est requis pour utiliser le protocole `mDNS` _sur windows et mac uniquement_. Si vous êtes sur Windows, vous pouvez télécharger Bonjour [ici](https://support.apple.com/kb/DL999?locale=en_US). Si vous utilisez macOS, Bonjour est déjà installé.

Vous pouvez également récupèrer un package totalement testé [ici](https://github.com/RedHawk989/EyeTrackVR/tree/GUI/GUI/assets/3rdParty) (pour Windows uniquement).

## Dépanage

### Vous ne pouvez pas vous connecter à votre appareil

Si vous ne pouvez pas vous connecter à votre appareil, veuillez vérifier que le nom de l'appareil est correct. Si le nom est correct, vérifiez qu'il est connecté sur le même réseau que votre ordinateur.

Si votre appareil est connecté sur le même réseau, essayez de redémarer l'appareil. Si l'appareil n'est toujours pas connecté, essayez de redémarer votre routeur.
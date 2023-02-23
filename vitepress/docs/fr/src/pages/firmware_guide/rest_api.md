# API de REST {.text-[#ab5ac7]}

## Qu'est-ce que c'est?

Un API de RESET est un moyen de communiquer avec vos appareils ESP en utilisant des requêtes HTTP. Ceci est utile si vous voulez contrôler votre appareil depuis un ordinateir ou un appareil mobile.

Nous avons développer un API de RESET pour ce projet afin de pouvoir contrôler les appareils plus facilement depuis notre nouvelle app.

## Comment l'utiliser

### Client de l'API de REST

N'importe quel client de API de RESET peut être utiliser pour communiquer avec vos appareils ESP. On recommande d'utiliser le [Thunder Client](https://www.thunderclient.com/) pour tester l'API de RESET, c'est une extension de vscode et il est totalement gratuit.

Pour les requêtes basiques de type `GET`, vous pouvez utiliser n'importe quel navigateur de votre choix.

### Standard

L'API de RESET suis le standard suivant:

```
http://{device_name}.local:81/control/command/{endpoint}?{param}={value}&{param}={value}
```

> Par exemple, si le nom de votre appareil est `esp32`, vous pouvez vous y connecter en utilisant `http://esp32.local:81/control/command/<endpoint>`.

### Endpoints

::: info Note
N'importe quel endpoint marqué avec `**` n'est pas encore implémenté, et sera implémenté à l'avenir.

Si vous voulez nous aider à implémenter ces endpoints, merci de nous contacter.

Nous sommes également ouvert aux suggestions afin d'implémenter de nouveaux endpoints.

> **Note**: n'importe quel endpoint qui changes des choses dans le fichier de configuration aura besoin d'appeler `/save` pour écrire les changements dans la mémoire flash.
> Cela préviendra le fait d'écrire dans la mémoire flash trop souvent, ce qui peut endomager la mémoire plus rapidement.
> Cet appareil aura à écrire les changements dans la mémoire flash et se redémarer après un appel `/save`.
:::

L'API de REST utilise les endpoints suivant:

| Endpoint | Method | Description |
| :------: | :----: | :---------: |
| /ping | GET | Returnes le statut de l'appareil. |
| /save | GET | Écrit n'importe quel changements effectué dans la mémoire flash. |
| /restartDevice | GET | Redémares l'ESP d'elle même. |
| /restartCamera | GET | Redémares la camera. |
| /resetConfig | GET | Vides la config actuelle de la mémoire et RAM |
| /getStoredConfig | GET | Retournes un objet _JSON_ de la config actuelle de l'appareil. |
| /setTxPower | POST | Affectes la puissance de la transmission émise de l'ESP |
| /setDevice | POST | Affectes les paramètres `OTA` et `mDNS` |
| /setCamera | POST | Changes tout les paramètres wifi |
| /wifi | POST | ajoutes un nouveau réseau wifi, ou remplaces le réseau déjà existant |
| /wifi | DELETE | Supprimes un réseau wifi |
| /wifi | GET | Retournes un objet _JSON_ avec tout les identifiants wifi |

### Params

L'API de REST utilise les paramètres suivant:

::: danger Fonctionalité pas un bug
Tout les paramètres pour un URL donné sont requis, même si vous ne changez pas la valeur des paramètres.

Si vous ne donnez pas un paramètre, ce paramètre sera remis à sa valeur par défaut.
:::

les paramètres URL sont passé comme string en utilisant le format suivant:

`http://<device_name>.local:81/control/builtin/command/<endpoint>?<param>=<value>&<param>=<value>`

#### /wifi

::: info Note
Nous vous permettons de stocker j'usqu'a 3 réseaux wifi dans la mémoire. Si vous essayer d'en ajouter plus de 3, le réseau le plus ancien sera écrasé.
:::

| Param | Description |
| :---: | :---------: |
| `ssid` | Le ssid du réseau. |
| `password` | Le mot de passe du réseau. |
| `networkName` | Un nom unique (que vous lui donner) afin d'identifier un réseau dans la mémoire. |
| `channel` | Le canal du réseau wifi <br /> uniquement les caneaux de `1 - 14` sont autorisés. |
| `power` | La puissance de la transmission de votre ESP pour ce réseau. |
| `adhoc` | Si vous voulez activer le mode AP ou non. |

::: info Note - puissance de la transmission
Vous devez suivre le format suivant pour le paramètre `power`:

En utilisant l'énumération suivant, vosu passez le _nombre_ à droite du signe `=` qui correspond à la puissance en `dBm` que vous voulez utiliser.

```cpp
typedef enum {
    WIFI_POWER_19_5dBm = 78,// 19.5dBm
    WIFI_POWER_19dBm = 76,// 19dBm
    WIFI_POWER_18_5dBm = 74,// 18.5dBm
    WIFI_POWER_17dBm = 68,// 17dBm
    WIFI_POWER_15dBm = 60,// 15dBm
    WIFI_POWER_13dBm = 52,// 13dBm
    WIFI_POWER_11dBm = 44,// 11dBm
    WIFI_POWER_8_5dBm = 34,// 8.5dBm
    WIFI_POWER_7dBm = 28,// 7dBm
    WIFI_POWER_5dBm = 20,// 5dBm
    WIFI_POWER_2dBm = 8,// 2dBm
    WIFI_POWER_MINUS_1dBm = -4// -1dBm
} wifi_power_t;
```

:::

#### /setDevice

| Param | Description |
| :---: | :---------: |
| `hostname` | Le nom d'hôte pour votre ESP <br /> utilisé par `OTA` et `mDNS`. |
| `service` | Le service que l'on doit chercher quand on scannes les appareils `mDNS` sur un réseau <br /> ceci devrait être mis sur `openiristracker` afin de trouver les appareils `EyeTrackVR`  |
| `ota_password` | le mot de passe pour le service `OTA`. |
| `ota_port` | Le port pour le service `OTA`. |
| `firmware_name` | le nom du fichier binnaire `OTA` <br /> depricated and will be removed |

#### /setTxPower

::: info Note
Vous devez suivre le format suivant pour le paramètre `txPower`:

En utilisant l'énumération suivant, vosu passez le _nombre_ à droite du signe `=`:

```cpp
typedef enum {
    WIFI_POWER_19_5dBm = 78,// 19.5dBm
    WIFI_POWER_19dBm = 76,// 19dBm
    WIFI_POWER_18_5dBm = 74,// 18.5dBm
    WIFI_POWER_17dBm = 68,// 17dBm
    WIFI_POWER_15dBm = 60,// 15dBm
    WIFI_POWER_13dBm = 52,// 13dBm
    WIFI_POWER_11dBm = 44,// 11dBm
    WIFI_POWER_8_5dBm = 34,// 8.5dBm
    WIFI_POWER_7dBm = 28,// 7dBm
    WIFI_POWER_5dBm = 20,// 5dBm
    WIFI_POWER_2dBm = 8,// 2dBm
    WIFI_POWER_MINUS_1dBm = -4// -1dBm
} wifi_power_t;
```

:::

| Param | Description |
| :---: | :---------: |
| `txPower` | La puissance à mettre. |

### Params Camera

::: tip Coming Soon
Nous sommes en train de travailler sur cette section de la doccumentation.
:::
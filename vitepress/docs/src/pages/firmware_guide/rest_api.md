# REST API {.text-[var(--font-accent)]}

## What is it?

A REST API is a way to communicate with the ESP devices using HTTP requests. This is useful if you want to control the device from a computer or a mobile device.

We developed a REST API for this project so that we can control the devices more easily from our new app.

## How to use it

### REST API Client

Any REST API client can be used to communicate with the ESP devices. We recommend using [Thunder Client](https://www.thunderclient.com/) to test the REST API, as it's free and is a vscode extension.

For basic `GET` requests, you can use your browser of choice.

### Standard

The REST API follows the following standard:

```txt
http://{device_name}.local:81/control/builtin/command/{endpoint}?{param}={value}&{param}={value}
```

> For example, if the name of the device is `esp32`, you can connect to the device using `http://esp32.local:81/control/builtin/command/<endpoint>`.

### Endpoints

::: info Note
Any endpoint marked with `**` is currently not implemented, and will be implemented in the future.

If you would like to help us implement these endpoints, please contact us.

We are also open to suggestions for new endpoints.

> **Note**: Any endpoint that makes changes to the config will require a call to `/save` to write the changes to the flash.
> This is to prevent the flash from being written to too often, which can cause the flash to wear out.
> The device will write the changes to the flash and then restart itself after a call to `/save`.
:::

The REST API has the following endpoints:

| Endpoint | Method | Description |
| :------: | :----: | :---------: |
| /ping | GET | Returns the status of the device. |
| /save | GET | Writes any changes to the flash. |
| /restartDevice | GET | Restarts the ESP itself. |
| /restartCamera | GET | Restarts the camera. |
| /resetConfig | GET | Clears the current config in memory and RAM |
| /getStoredConfig | GET | Returns a _JSON_ object of the devices current config. |
| /setTxPower | POST | Sets the Transmission Power of the ESPs |
| /setDevice | POST | Sets the `OTA` and `mDNS` settings |
| /setCamera | POST | Sets all of the camera settings |
| /wifi | POST | Adds a new wifi network, or writes over an existing one |
| /wifi | DELETE | Deletes a wifi network `**` |

::: info Note
`/wifi` uses the `POST` method to add a new wifi network, and the `DELETE` method to delete a wifi network.
:::

### Params

The REST API has the following params:

::: danger Feature not a bug
All params for a given URL are required, even if you are not changing that params value.

If you do not supply a param, that param will be set to default settings.
:::

URL params are passed in the URL as a query string, using the following format:

`http://<device_name>.local:81/control/builtin/command/<endpoint>?<param>=<value>&<param>=<value>`

#### /wifi

::: info Note
We allow you to store up to 3 wifi networks in memory. If you try to add more than 3, the oldest network will be overwritten.
:::

| Param | Description |
| :---: | :---------: |
| `ssid` | The ssid of the network. |
| `password` | The password of the network. |
| `networkName` | The unique name (given by you) to refer to that network in memory. |
| `channel` | The channel for the wifi network to broadcast on <br /> only `1 - 14` are allowed. |
| `power` | The Transmittion power of the ESP for that network config. |
| `adhoc` | Whether to enable AP mode or not. |

::: info Note - Transmission Power
You must follow the following format for the `power` param:

Using the following enum, you pass the _number_ to the right of the `=` sign that corresponds with the power in `dBm` that you wish to use.

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
| `hostname` | The hostname for the ESP <br /> used by `OTA` and `mDNS`. |
| `service` | The service to look for when scanning `mDNS` devices on the network <br /> this should be set to `openiristracker` in order to look for `EyeTrackVR` devices  |
| `ota_password` | The password for the `OTA` service. |
| `ota_port` | The port for the `OTA` service. |
| `firmware_name` | The name of the binary file for `OTA` <br /> depricated and will be removed |

#### /setTxPower

::: info Note
You must follow the following format for the `txPower` param:

Using the following enum, you pass the _number_ to the right of the `=` sign.

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
| `txPower` | The power level to set. |

### Camera Params

::: tip Coming Soon
We are currently working on this section of documentation.
:::

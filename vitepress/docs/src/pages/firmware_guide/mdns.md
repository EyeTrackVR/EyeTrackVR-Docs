# MDNS {.text-[var(--font-accent)]}

## What is it?

`mDNS` is a protocol that allows you to connect to a device using a name instead of an IP address. This is useful if you do not know the IP address of the device, or if you do not want to keep track of the IP address of the device. This is also useful if you are using a device that does not have a static IP address.

In the `mDNS` protocol the IP address of the device can change, but the name of the device will always be the same. This means that you can connect to the device using the name of the device, even if the IP address of the device changes.

## How to use it

### Enable mDNS

The `mDNS` is enabled by default on the new firmware, and can not be disabled.

To use it, all you need to do is set the name of the device in the firmware config file.

This setting can be located under the `[wifi]` section of the `ini/user_config.ini` file.

```ini
mdnsname = "openiristracker" # do not add .local
```

By default, the name of the device is `openiristracker`, however you can change it to whatever you want.

::: warning Change the name
Since you have two ESP32 devices, you need to make sure that the name of the device is different for each device. If you do not change the name of the device, you will not be able to connect to both devices at the same time.
:::

### Connect to the device

To connect to the device, you need to use the name of the device followed by `.local`. For example, if the name of the device is `esp32`, you can connect to the device using `http://esp32.local`.

## Prerequisites `Bonjour`

`Bonjour` is required to use the `mDNS` protocol _for windows and mac only_. If you are using Windows, you can download Bonjour from [here](https://support.apple.com/kb/DL999?locale=en_US). If you are using macOS, Bonjour is already installed.

You can also get the fully tested Bonjour package from us [here](https://github.com/RedHawk989/EyeTrackVR/tree/GUI/GUI/assets/3rdParty) (for Windows only).

## Troubleshooting

### Can not connect to the device

If you can not connect to the device, make sure that the name of the device is correct. If the name of the device is correct, make sure that the device is connected to the network.

If the device is connected to the network, try to restart the device. If the device is still not connected, try to restart the router.

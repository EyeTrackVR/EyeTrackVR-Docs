<script setup>
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
</script>

# Firmware Flashing Tool {.text-[var(--font-accent)]}

## Before we proceed

::: info Note

- Ensure you have a **data transfer cable** ready, as it is necessary for the flashing process.
- Ensure that your camera is set up correctly [How to prepare a Seeed Studio XIAO Sense ESP32](../how_to_build/preparing_xiao).

:::

##

### Step 1: Download and Install the Firmware Flashing Tool

- Download the Firmware Flashing Tool Installer from the latest [GitHub release](https://github.com/EyeTrackVR/FirmwareFlashingTool/releases).
- Run the installer and follow the on-screen instructions to complete the installation of the Firmware Flashing Tool app.

##

### Step 2: Run the Firmware Flashing Tool app

After the installation is complete, you should see an icon on your desktop. To open the application, double-click the icon.

You then should be greeted with a GUI that looks like this:

<ImageCard :options="image_settings.flashing_tool_1"/>

##

### Step 3: Select board.

We now have a couple of options letting us decide how we want to build the firmware.

- `Debug`<br/>
  This is the default environment and does not need to be explicitly chosen. It includes extensive logging, making it ideal for initial setup and troubleshooting, as it provides comprehensive visibility into the system’s operation.

- `_release`<br/>
  Has a lot less debugging, may also be missing some things available only in debug for debug purposes, this should be flashed when everything is working.

Press left click on the `Select Board` dropdown, then choose your desired board from the list.
Once you've selected your board, click **Confirm** to move on to the next step.

<ImageCard :options="image_settings.flashing_tool_select_board"/>

##

### Step 4: Select port (optional).

The firmware flashing tool includes an option to automatically select the first active port.
<br/>
If you're not satisfied with this selection, you can manually choose your desired port.

<ImageCard :options="image_settings.flashing_tool_select_port"/>

##

### Step 5: Flash firmware.

Once you're ready, hold down the **B** or **IO0** button on your board and connect it to your PC. (The button may be small, but it's there).
Next, click **Install OpenIris** and select the port corresponding to your board to complete the installation.

<ImageCard :options="image_settings.flashing_tool_flash_firmware"/>

##

### Step 6: That's it!.

Installation complete! Everything is set up and ready to go.<br/>
Click **Show Logs** to view the results.

<ImageCard :options="image_settings.flashing_tool_flash_firmware_success"/>

##

### Step 7: Logs.

After the installation is complete, disconnect the board and then reconnect it to the PC without pressing any buttons, and click Show logs.

If you choose the wired option, the correct logs should appear as follows.
<br/>
If the logs don't look right, ensure that your camera is properly connected to the board.

<ImageCard :options="image_settings.flashing_tool_logs"/>

## How to configure wifi.

::: info Note

- Please note that 5GHz networks are not supported by the hardware, so you will need to use a 2.4GHz network.

:::

##

### Step 1: Select board

Ensure that the selected board has a **wireless mode** checkmark below it.

<ImageCard :options="image_settings.flashing_tool_select_board"/>

##

### Step 2: Configure wifi network

You'll need to provide information about the network you're planning to connect to.

`SSID`<br/>
The SSID is your Wi-Fi name, make sure it doesn't contain any `special characters`.

`Password`<br/>
You'll need to provide the password used to connect to the selected Wi-Fi network.

<ImageCard :options="image_settings.configure_wifi_network"/>

### Step 3: Select port (optional).

The firmware flashing tool includes an option to automatically select the first active port.
<br/>
If you're not satisfied with this selection, you can manually choose your desired port.

<ImageCard :options="image_settings.flashing_tool_select_port"/>

##

### Step 4: Send wifi credentials.

Once the installation is complete, unplug your board, then reconnect it to the PC without pressing any buttons and press **Send credentials**.

<ImageCard :options="image_settings.send_wifi_credentials"/>

##

### Step 5: Get working stream.

After sending is complete, disconnect your board, then reconnect it to the PC without pressing any buttons, and click **Show logs**.
<br/>

Scroll down to find the text labeled **`IP: 192.168.XXX.XXX`**, or use the "Tracker name" you set up in the previous step. It should be located at **`http://<tracker_name>.local`** .

<ImageCard :options="image_settings.flasher_camera_preview"/>

You can then enter this IP into the app or a tracker name, such as:
**`http://192.168.XXX.XXX`** or **`http://<tracker_name>.local`**.

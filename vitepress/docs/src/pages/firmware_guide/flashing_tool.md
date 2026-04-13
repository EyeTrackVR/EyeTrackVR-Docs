<script setup>
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
</script>

# Firmware Flashing Tool {.text-[var(--font-accent)]}

## Before We Proceed

::: info Note

- Make sure you have a **data transfer cable** ready, as it is required for the flashing process.
- Ensure your camera is properly set up: [How to prepare a Seeed Studio XIAO Sense ESP32](../how_to_build/preparing_xiao).

:::

## Flash Firmware

### Step 1: Download and Install the Firmware Flashing Tool

- Download the Firmware Flashing Tool Installer from the latest [GitHub release](https://github.com/EyeTrackVR/FirmwareFlashingTool/releases).
- Run the installer and follow the on-screen instructions to complete the installation of the Firmware Flashing Tool application.

##

### Step 2: Run the Firmware Flashing Tool

After installation, double-click the desktop icon to open the application.

You should see a GUI similar to this:

<ImageCard :options="image_settings.flashing_tool_1"/>

##

### Step 3: Select Board

Click the `Select Board` dropdown and choose your board from the list.  
Once selected, click **Next** to continue.

<ImageCard :options="image_settings.flashing_tool_select_board"/>

##

### Step 4: Select Port

Click the `Select port` dropdown, choose the port your board is connected to (e.g., COM3), then click **Install Openiris** to start the flashing process.

<ImageCard :options="image_settings.flashing_tool_select_port"/>

##

### Step 5: Installation

If the correct board and port are selected, the flashing process will begin automatically.  
No action is required during this step.

<ImageCard :options="image_settings.flashing_tool_pending_flash_action"/>

##

### Troubleshooting

If flashing fails, check the following:

- Verify that the correct port is selected.
- If your board has a **Boot (B) button**, press and hold it.
- Ensure your **data transfer cable** is connected properly.
- Confirm that your camera is correctly set up: [Preparing Seeed Studio XIAO Sense ESP32](../how_to_build/preparing_xiao).

<ImageCard :options="image_settings.flashing_tool_error_flash_action"/>

##

### That's all

Once the process finishes successfully, you will see `Firmware flashed!`.  
Click **Continue setup** to configure your board in **wired** or **wireless** mode.

<ImageCard :options="image_settings.flashing_tool_success_flash_action"/>

## Wired Mode

To use your board in wired mode, simply click **Wired mode**.

<ImageCard :options="image_settings.flashing_tool_wired_mode"/>

##

### Step 1: Setup Tracker Name

Enter a custom name for your tracker. This name will identify your device.  
Click **Setup tracker** to complete the setup.

<ImageCard :options="image_settings.flashing_tool_tracker_name"/>

##

### Step 2: That's all

Your board is now set up and ready to use in wired mode.

<ImageCard :options="image_settings.flashing_tool_tracker_name_success"/>

## Wireless Mode

### Step 1: Select Wireless Mode

Click **Wi-Fi mode** to use your board wirelessly.

<ImageCard :options="image_settings.flashing_tool_wireless_mode"/>

##

### Step 2: Select Network

Choose a network from the list.  
If your network is not listed, click `Manual setup` to enter the details manually.

<ImageCard :options="image_settings.flashing_tool_networks_list"/>

##

### Step 3: Enter Credentials

Enter the password for the selected network, check for errors, and click **Continue**.

<ImageCard :options="image_settings.flashing_tool_setup_credentials"/>

##

### Step 4: Configure mDNS

Set the name under which your board will appear on the network.  
To use a custom name, select `Setup custom mdns` and enter your preferred name.

<ImageCard :options="image_settings.flashing_tool_setup_mdns"/>

##

### Step 5: Connection Process

If the network and credentials are correct, the connection will start automatically.  
No further action is required during this step.

<ImageCard :options="image_settings.flashing_tool_setup_pending"/>

##

If the connection fails, double-check your credentials and try again.

<ImageCard :options="image_settings.flashing_tool_setup_error"/>

##

### Step 6: That's all

Your board is now connected to the network and ready to use in wireless mode.

<ImageCard :options="image_settings.flashing_tool_setup_success"/>

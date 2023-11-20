<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Setting up recalibration and recentering from VRChat.
ETVR has a mechanism that allows you to recalibrate and recenter your tracking without the need to interact with the app directly, here's how to set up your avatar to make use of OSC to trigger this from within VRC itself. 

<Alerts :options="alerts.parts_list_two">
    <template v-slot:content>
        <p>
           Note, while this page explains how to do it from the point of view of vrchat, it can be done in Neos and CVR too, all the app listens to are two OSC messages.
        </p>
    </template>
</Alerts>

## Setting up your parameters 

### Adding parameters
You'll need to add two parameters to your Parameters config, those being: 

- `etvr_recalibrate`: `Bool` 
- `etvr_recenter`: `Bool` 

Both of them do not have to be synced, meaning they won't increase your total memory count.

To do this, in Unity, select your avatar on the scene and find Avatar Descriptor in the inspector. In it, find the section named "expressions", expand it and click on the file assigned to the "`parameters`" field, that's your Parameters config.

<ImageCard :options="image_settings.unity_vrc_expressions" />

Clicking on it will highlight the associated asset in the asset browser, click on the highlighted file to get its content to show in the inspector panel. Now, in the inspector, click on the `Add` button to add the parameters mentioned above, both of them need to be of type Bool, they don't need to be synced nor saved. 

<ImageCard :options="image_settings.unity_vrc_expressions_add_fields"/>
<ImageCard :options="image_settings.unity_vrc_expressions_fields"/>

That's it for the parameters.

### Adding buttons to the menu

Now, you will need to add actual buttons for them in your gesture menu. 

The expressions section mentioned above also contains the menu, you can use that to either add the buttons there directly or create a small submenu to make it less cluttered, here we will add them directly. 

<ImageCard :options="image_settings.unity_vrc_expressions"/>

Once you have the menu file opened in the inspector, click on the "add control" button. This will add an empty action slot, expand it. 

<ImageCard :options="image_settings.unity_vrc_empty_control"/>

You'll see a bunch of fields, like name, icon, type and parameter. Firstly, let's give it a friendly name like "recalibrate eyes" or "recenter tracking" depending on the action you want to assign to them. 

Leave the type as is - as a button, it's more convenient as it bounces back into the off state by itself. 

Now, in the parameter section, click on the `[None]` and select one of the parameters you have created in the previous section. 

<ImageCard :options="image_settings.unity_vrc_control_setup"/>

Repeat the steps for the other one. 

Once done simply build and upload the updated version of your avatar.

And that's it, you now should be able to recenter and recalibrate your tracking form inside of VRC! 


## Resetting the OSC config in case the parameters don't work

Sometimes VRChat won't regenerate the config files that it to communicate the changes to anyone that's listening, to fix this it's enough to simply delete the auto generated configuration files and let VRC remake them. 

They are stored under 

`C:\Users\<user>\AppData\LocalLow\VRChat\VRChat\OSC\<your user uuid>\Avatars\` 

Deleting the contents of the Avatars directory will resolve the issue.

## Other platforms 

Like mentioned in the note, this functionality is not limited to VRC. 

The app itself listens to OSC messages sent on port `9001` to two addresses: 

- `/avatar/parameters/etvr_recenter`
- `/avatar/parameters/etvr_recalibrate` 

It only needs to receive a `Bool` value of `True` to trigger the recenter and calibration. 

The port and the addresses can be changed in the app settings, if need be. 
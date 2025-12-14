<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
import { Requirements } from '../../static/app_build_requirements'
</script>

# Build the app from source {.text-[var(--font-accent)]}

## This guide will show how to build the app from source

<Alerts :options="alerts.build_software_one">
    <template v-slot:content>
        <p>
           This is NOT a required step, you do not need to build the app from source.
        </p>
    </template>
</Alerts>

## Requirements

<CheckList :options="{...Requirements}"/>

## Install Python

EyeTrackVR is currently using [Python 3.13.0](https://www.python.org/downloads/release/python-31311/) Before you continue, please install it.

## Installing Poetry

Starting with version `0.1.7`, EyeTrackVR uses Poetry to manage app dependencies. To build the app, you must first install Poetry to fetch the required dependencies.

To install Poetry follow the [Poetry Installation Docs](https://python-poetry.org/docs/#installation)

## Install the required Python modules

After cloning the project and installing Poetry, open a command prompt in the EyeTrackApp folder. Then run the command: `poetry install`

This should install all of the required modules.

## Build the app

Now, you should be ready to build the app.
With a command prompt open in the EyeTrackApp folder, run the command `poetry run pyinstaller eyetrackapp.spec`

Give it time to build the app. Once done, the app should be under `dist/eyetrackapp`

<template>
 <div>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Choice</th>
          <th>Amount</th>
          <th>Cost</th>
          <th>Cost All</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="component in components" :key="component.name">
          <th>{{ component.name }}</th>
          <td>
            <select v-if="component.choices.length > 1" v-model="component.selectedChoice" @change="updatePrices">
              <option v-for="(choice, index) in component.choices" :key="index" :value="index">{{ choice.name }}</option>
            </select>
            <span v-else>{{ component.choices[0].name }}</span>
          </td>
          <td>{{ component.selectedChoice ? component.choices[component.selectedChoice].amount(tracker) : 0 }}</td>
          <td>{{ component.selectedChoice ? '$' + component.choices[component.selectedChoice].cost.toFixed(2) : 0 }}</td>
          <td>{{ component.selectedChoice ? '~$' + (component.choices[component.selectedChoice].costAll(tracker).toFixed(2)) : 0 }}</td>
          <td v-html="component.selectedChoice ? component.choices[component.selectedChoice].links : ''"></td>
        </tr>
      </tbody>
    </table>
    <p>Total: ${{ total.toFixed(2) }}</p>
 </div>
</template>
<script>
export default {
 data() {
    return {
      tracker: 2,
      components: [
        {
          name: 'Type A USB Breakout',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 1.85,
              costAll: () => this.tracker * 0 ,
              links: 'If you do not need or already have.'
            },
            {
              name: 'Type A USB Breakout Bare (AliExpress)',
              amount: () => 1,
              cost: 1.18,
              costAll: () => this.tracker + 1.18,
              links: '<a href="https://www.aliexpress.us/item/2255801092919590.html">AliExpress</a>'
            },
            {
              name: 'Type A USB Breakout Bare (Amazon)',
              amount: () => 1,
              cost: 6.49,
              costAll: () => this.tracker + 5.49,
              links: '<a href="https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/">Amazon</a>'
            },
            {
              name: 'Type A USB Breakout With Cover (AliExpress)',
              amount: () => 1,
              cost: 2.20,
              costAll: () => this.tracker + 1.20 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/2251832820552545.html/">AliExpress</a>'
            },
            {
              name: 'Type A USB Breakout With Wire and Cover (Amazon)',
              amount: () => 1,
              cost: 9.60,
              costAll: () => this.tracker + 8.60,
              links: '<a href="https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/">Amazon</a>'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'USB-C Breakout',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress Male & Female',
              amount: () => 1,
              cost: 1.19,
              costAll: () => this.tracker + 1.19 + 1.37,
              links: '<a href="https://www.aliexpress.us/item/3256801151667308.html">AliExpress</a> Choose: "Color: 5Set".'
            },
            {
              name: 'AliExpress Vertical Male',
              amount: () => 1,
              cost: 2.37,
              costAll: () => this.tracker + 0.37 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/3256804002116469.html">AliExpress</a>'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'Wire for ESPs',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0 ,
              links: 'If you do not need wire or already have.'
            },
            {
              name: 'Silicone Wire Kit',
              amount: () => 1,
              cost: 5.96,
              costAll: () => this.tracker + 5.96 + 0.99,
              links: '<a href="https://www.aliexpress.us/item/3256806164419666.html">AliExpress</a> 30 AWG or lower'
            },
            {
              name: 'Generic Wire',
              amount: () => 1,
              cost: 0.70,
              costAll: () => this.tracker + 0.70 + 1.24,
              links: '<a href="https://a.aliexpress.com/_mK72cy6">AliExpress</a> Select "Specification: 30 AWG or lower"'
            },
            ],
          selectedChoice: 0
        },
        {
          name: 'Wire for LEDs',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0 ,
              links: 'If you do not need wire or already have.'
            },
            {
              name: 'Silicone Wire Kit',
              amount: () => 1,
              cost: 5.96,
              costAll: () => this.tracker + 5.96 + 0.99,
              links: '<a href="https://www.aliexpress.us/item/3256806164419666.html">AliExpress</a> 30 AWG or higher'
            },
            {
              name: 'Generic Wire',
              amount: () => 1,
              cost: 0.70,
              costAll: () => this.tracker + 0.70 + 1.24,
              links: '<a href="https://a.aliexpress.com/_mK72cy6">AliExpress</a> Select "Specification: 30 AWG or higher"'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'Camera Extension Cables',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress 24pin 0.5mm Pitch',
              amount: () => 1,
              cost: 1.33,
              costAll: () => this.tracker + 0.33 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/2255799835842411.html">AliExpress</a> Choose: "Insert Type: 24p 0.5mm pitch" and Type A. Length depends on HMD, usually 150mm or 200mm.'
            },
            {
              name: 'Adafruit 24 pin 0.5mm pitch',
              amount: () => this.tracker,
              cost: 1.35,
              costAll: () => this.tracker * 1.35 + 6,
              links: '<a href="https://www.adafruit.com/product/4230">Adafruit</a> 250mm'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'Camera Extension Connectors',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress 24 pin',
              amount: () => 1,
              cost: 1.32,
              costAll: () => this.tracker + 0.32 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/3256804096715690.html">AliExpress</a> Choose: "Pins: 24P".'
            },
            {
              name: 'Adafruit 24 pin',
              amount: () => this.tracker,
              cost: 0.86,
              costAll: () => this.tracker * 0.865 + 6,
              links: '<a href="https://www.adafruit.com/product/4524">Adafruit</a>'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'External Antennas',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress Small',
              amount: () => 1,
              cost: 0.16,
              costAll: () => this.tracker * 0.16 + 3.48,
              links: '<a href="https://www.aliexpress.us/item/2251832800433720.html">AliExpress</a> Choose: "Color: 2.4G Antenna".'
            },
            {
              name: 'Amazon Large',
              amount: () => 1,
              cost: 9.99,
              costAll: () => this.tracker + 7.99,
              links: '<a href="https://www.amazon.com/Diymall-Antenna-Antennas-Arduino-ESP-072pcs/dp/B00ZBJNO9O/">Amazon</a>'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'USB-C Cables',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'Short USB-C to USB-C Amazon',
              amount: () => 1,
              cost: 6.29,
              costAll: () => this.tracker + 5.29,
              links: '<a href="https://www.amazon.com/gp/product/B09C2D9Z7T/ref=ox_sc_act_title_2?smid=A10X1BEP2GKRDQ&th=1">Amazon</a>'
            },
            {
              name: 'Short USB-A to USB-C Amazon',
              amount: () => 1,
              cost: 7.99,
              costAll: () => this.tracker + 5.99,
              links: '<a href="https://www.amazon.com/Charging-Durable-Station-Compatible-Samsung/dp/B08LL1SVZD/">Amazon</a>'
            },
          ],
          selectedChoice: 0
        },
        {
          name: 'V4 LED Wire Extensions/Replacements',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: '110mm Extension/Replacement',
              amount: () => 1,
              cost: 1.50,
              costAll: () => this.tracker + 1.50 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/2x-110mm-replacement-wires">ETVR Store</a>'
            },
            {
              name: '200mm Extension/Replacement',
              amount: () => 1,
              cost: 1.50,
              costAll: () => this.tracker + 1.50 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/2x-200mm-replacement-wires">ETVR Store</a>'
            },
          ],
          selectedChoice: 0
        },
        // Add other components similarly
      ],
      total: 0,
    };
 },
 methods: {
    updatePrices() {
      let total = 0;
      this.components.forEach(component => {
        if (component.choices.length > 1) {
          const choice = component.choices[component.selectedChoice];
          total += choice.costAll();
        }
      });
      this.total = total;
    },
 },
 mounted() {
    this.updatePrices();
 },
 
};
</script>
<style scoped>
/* Your styles here */
</style>
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
          <td>{{ component.selectedChoice ? '$' + component.choices[component.selectedChoice].cost : 0 }}</td>
          <td>{{ component.selectedChoice ? '~$' + (component.choices[component.selectedChoice].costAll(tracker) * 100) / 100 : 0 }}</td>
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
          name: 'ESP Microcontroller',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 1.85,
              costAll: () => this.tracker * 0 ,
              links: 'If you already have a supported camera capable ESP32 or sourced elsewhere.'
            },
            {
              name: 'Seeed Studio XIAO Sense ESP32-S3',
              amount: () => this.tracker,
              cost: 12.87,
              costAll: () => this.tracker * 12.87 + 3.18,
              links: '<a href="https://www.aliexpress.com/item/3256804601970891.html">AliExpress XIAO Sense</a> Recommended'
            },
            {
              name: 'ESP32-CAM',
              amount: () => this.tracker,
              cost: 12.87,
              costAll: () => this.tracker * 4.69 + 3.18,
              links: '<a href="https://www.aliexpress.us/item/3256806008099661.html">AliExpress ESP32 CAM</a> Requires additional programmer'
            },
            {
              name: 'FREENOVE ESP32-S3-WROOM',
              amount: () => this.tracker,
              cost: 19.95,
              costAll: () => this.tracker * 19.95,
              links: '<a href="https://www.amazon.com/FREENOVE-ESP32-S3-WROOM-Compatible-Wireless-Detailed/dp/B0BMQ8F7FN">Amazon</a> Large, more expensive than XIAO'
            },
            
            
          ],
          selectedChoice: 1
        },
        {
          name: 'Camera',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0 ,
              links: 'If you already have a supported camera or sourced elsewhere.'
            },
            {
              name: '130 Degree NO-IR',
              amount: () => this.tracker,
              cost: 5.41,
              costAll: () => this.tracker * 5.41,
              links: '<a href="https://www.aliexpress.com/item/3256802853835121.html">AliExpress</a> Select "Color: 75MM-130 Degree" Must manually remove IR filter'
            },
            {
              name: '160 Degree IR',
              amount: () => this.tracker,
              cost: 4.26,
              costAll: () => this.tracker * 4.26,
              links: '<a href="https://www.aliexpress.com/item/3256802853835121.html">AliExpress</a> Select "Color: 75MM-160 850nm"'
            }
            
          ],
          selectedChoice: 1
        },
        {
          name: 'IR LEDs',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0 ,
              links: 'If you already have safe IR LED hardware and know what you are doing.'
            },
            {
              name: 'Official V4 mini Solder-less Kit',
              amount: () => 1,
              cost: 28,
              costAll: () => this.tracker + 28 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit">ETVR Store</a> Length depending on HMD'
            },
            {
              name: 'Official V4 mini Bring Your Own Wires Kit',
              amount: () => 1,
              cost: 24,
              costAll: () => this.tracker + 24 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required">AliExpress</a> Must solder up your own wires'
            },
                        {
              name: 'Official V4 lite Assemble Yourself',
              amount: () => 1,
              cost: 7,
              costAll: () => this.tracker + 7 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-1-lite-diy-led-kit">AliExpress</a> Must assemble yourself'
            },
          ],
          selectedChoice: 1
        },
        {
          name: 'USB Hub',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you already have safe IR LED hardware and know what you are doing.'
            },
            {
              name: '4 port USB 3.2 LDLrui (MTT Usually)',
              amount: () => 1,
              cost: 17.99,
              costAll: () => this.tracker + 17.99,
              links: '<a href="https://www.amazon.com/dp/B09NDQRLBT/">Amazon</a> Usually these are MTT, but sometimes not'
            },
            {
              name: '4 port USB 3.2 Sitecom CN-385 Hub (MTT)',
              amount: () => 1,
              cost: 40.53,
              costAll: () => this.tracker + 17.99,
              links: '<a href="https://www.amazon.com/gp/product/B07YN54Q33/">Amazon</a> Known good MTT hub, but expensive'
            },
            {
              name: '4 port USB 2.0 Breakout (Not MTT)',
              amount: () => 1,
              cost: 1.41,
              costAll: () => this.tracker + 1.41 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/3256801220206638.html">AliExpress</a> Small but non MTT hub breakout'
            },
            {
              name: '3 port USB 3.0 Hub With Power Passthrough (Not MTT)',
              amount: () => 1,
              cost: 17.99,
              costAll: () => this.tracker + 1.41,
              links: '<a href="https://www.amazon.com/uni-Charging-Thunderbolt-Aluminum-Pixelbook/dp/B08SVZFFPP/">Amazon</a> Great for Quest due to power passthrough'
            }, 
          ],
          selectedChoice: 1
        },
        {
          name: '3D Printed Mounts',
          choices: [
            {
              name: 'Print Yourself',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you have a 3d printer or have access to one somewhere.'
            },
            {
              name: 'JLCPCB Print Service, JLC3DP',
              amount: () => this.tracker,
              cost: 2,
              costAll: () => this.tracker * 2 + 5,
              links: '<a href="https://jlc3dp.com/3d-printing-quote">JLC3DP</a> '
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
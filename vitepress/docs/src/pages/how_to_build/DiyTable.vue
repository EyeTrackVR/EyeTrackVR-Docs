<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="component-col">Component</th>
          <th class="choice-col">Choice</th>
          <th class="amount-col">Amount</th>
          <th class="cost-col">Cost</th>
          <th class="cost-all-col">Cost All</th>
          <th class="links-col">Links</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in components" :key="component.name">
          <th class="component-col">{{ component.name }}</th>
          <td class="choice-col">
            <div v-if="component.choices.length > 1" class="custom-select" @click="toggleDropdown(component, index)" :ref="`select-${component.name}`">
              <div class="selected-option">
                {{ component.choices[component.selectedChoice].name }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-arrow" :class="{ 'rotate': component.isOpen }">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div v-if="component.isOpen" class="options" :class="{ 'options-above': isOptionsAbove(index) }">
                <div v-for="(choice, choiceIndex) in component.choices" 
                     :key="choiceIndex" 
                     @click="selectOption(component, choiceIndex)"
                     class="option">
                  {{ choice.name }}
                </div>
              </div>
            </div>
            <span v-else>{{ component.choices[0].name }}</span>
          </td>
          <td>{{ component.selectedChoice ? component.choices[component.selectedChoice].amount(tracker) : 0 }}</td>
          <td>{{ component.selectedChoice ? '$' + component.choices[component.selectedChoice].cost.toFixed(2) : 0 }}</td>
          <td>{{ component.selectedChoice ? '~$' + (component.choices[component.selectedChoice].costAll().toFixed(2)) : 0 }}</td>
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
              name: '★ Seeed Studio XIAO Sense ESP32-S3',
              amount: () => this.tracker,
              cost: 12.87,
              costAll: () => this.tracker * 12.87 + 3.18,
              links: '<a href="https://www.aliexpress.com/item/3256804601970891.html">AliExpress</a> <a href="https://amzn.to/44ZZrhi">Amazon</a> ESP32 S3 XIAO Sense Recommended'
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
          selectedChoice: 1,
          isOpen: false
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
              name: '★ 130 Degree NO-IR',
              amount: () => this.tracker,
              cost: 5.41,
              costAll: () => this.tracker * 5.41,
              links: '<a href="https://www.aliexpress.com/item/3256802853835121.html">AliExpress</a> Select "Color: 75MM-130 Degree" Must manually remove IR filter This gives best tracking quality and supports smaller headsets (Beyond, quest 3) than 160 degree.'
            },
            {
              name: '160 Degree IR',
              amount: () => this.tracker,
              cost: 4.26,
              costAll: () => this.tracker * 4.26,
              links: '<a href="https://www.aliexpress.com/item/3256802853835121.html">AliExpress</a> Select "Color: 75MM-160 850nm" Most of the times these come without filters however it is not uncommon to receive ones with it still on.'
            }
            
          ],
          selectedChoice: 1,
          isOpen: false
        },
        {
          name: 'IR LEDs',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: '<a href="https://docs.eyetrackvr.dev/getting_started/led_safety">IR LED Safety<a/> If you already have safe IR LED hardware and know what you are doing.'
            },
            {
              name: '★ Official V4 mini No-Solder',
              amount: () => 1,
              cost: 37,
              costAll: () => this.tracker + 37 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit">ETVR Store</a> Length depending on HMD'
            },
            {
              name: 'Official V4 mini Solder-Required',
              amount: () => 1,
              cost: 34,
              costAll: () => this.tracker + 34 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required">ETVR Store</a> Must solder up your own wires'
            },
                        {
              name: 'Official V4 lite Assemble Yourself',
              amount: () => 1,
              cost: 15,
              costAll: () => this.tracker + 15 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-1-lite-diy-led-kit">ETVR Store</a> Must assemble yourself'
            },
          ],
          selectedChoice: 1,
          isOpen: false
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
              name: '★ 4 port USB 3.0 Hub (Best for Cost)',
              amount: () => 1,
              cost: 9.99,
              costAll: () => this.tracker + 9.99,
              links: '<a href="https://amzn.to/4eISjJw">Amazon</a>'
            },
            {
             name: '★ 4 port Adafruit CH334F USB Hub Breakout (MTT) (Best for Size)',
             amount: () => 1,
             cost: 4.99,
             costAll: () => this.tracker + 9,
             links: '<a href="https://www.adafruit.com/product/5997">Adafruit</a> Small, high quality MTT hub breakout'
            },
            {
              name: '★ 4 port USB 3.0 Hub With Power Passthrough (MTT) (Best for Quest)',
              amount: () => 1,
              cost: 27.99,
              costAll: () => this.tracker + 27.99,
              links: '<a href="https://amzn.to/40Q1K47">Amazon</a> Great for Quest due to power passthrough'
            }, 
            {
              name: '4 port USB 3.0 C to A Hub (Most compact for Index)',
              amount: () => 1,
              cost: 5,
              costAll: () => this.tracker + 5,
              links: '<a href="https://amzn.to/4nMGeqL">Amazon</a>'
            }, 
            
 
          ],
          selectedChoice: 3,
          isOpen: false
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
              name: '★ Very Short USB-C to USB-C Amazon',
              amount: () => 1,
              cost: 6.29,
              costAll: () => this.tracker + 6.29,
              links: '<a href="https://amzn.to/3U6OT9V">Amazon</a>'
            },
            {
              name: '★ Short USB-C to USB-C Amazon',
              amount: () => 1,
              cost: 7.99,
              costAll: () => this.tracker + 7.99,
              links: '<a href="https://amzn.to/4iUW1ln">Amazon</a>'
            },
            {
              name: 'Short USB-A to USB-C Amazon',
              amount: () => 1,
              cost: 7.99,
              costAll: () => this.tracker + 7.99,
              links: '<a href="https://amzn.to/3U8Y4Xn">Amazon</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: '3D Printed Mounts',
          choices: [
            {
              name: 'Print Yourself',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you have a 3d printer or have access to one somewhere such as a library, friend, or school.'
            },
            {
              name: 'JLCPCB Print Service, JLC3DP',
              amount: () => this.tracker,
              cost: 2,
              costAll: () => this.tracker * 2 + 5,
              links: '<a href="https://docs.eyetrackvr.dev/misc/jlc3dp">JLC3DP Printing Service</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
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
          total += choice.costAll(this.tracker);
        } else if (component.choices.length === 1) {
          total += component.choices[0].costAll(this.tracker);
        }
      });
      this.total = total;
    },
    toggleDropdown(component, index) {
      this.components.forEach(comp => {
        if (comp !== component) {
          comp.isOpen = false;
        }
      });
      component.isOpen = !component.isOpen;
    },
    isOptionsAbove(index) {
      return index >= this.components.length - 2;
    },
    selectOption(component, index) {
      component.selectedChoice = index;
      component.isOpen = false;
      this.updatePrices();
    },
    closeAllDropdowns() {
      this.components.forEach(component => {
        component.isOpen = false;
      });
    },
    handleOutsideClick(event) {
      if (!event.target.closest('.custom-select')) {
        this.closeAllDropdowns();
      }
    }
  },
  mounted() {
    this.updatePrices();
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>
<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th, td {
  padding: 5px;
  border: 1px solid #ddd;
  word-wrap: break-word;
  vertical-align: middle;
  text-align: center;
}

.component-col { width: 15%; }
.choice-col { width: 25%; }
.amount-col { width: 7%; }
.cost-col { width: 10%; }
.cost-all-col { width: 13%; }
.links-col { width: 30%; }

.custom-select {
  position: relative;
  width: 100%;
  cursor: pointer;
  z-index: 1;
}

.custom-select:hover,
.custom-select:focus-within {
  z-index: 2;
}

.selected-option {
  border: 1px solid #999;
  padding: 5px;
  background-color: #666;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;
}

.selected-option:hover {
  background-color: #444;
}

.options {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #222;
  border: 1px solid #444;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  top: 100%;
}

.options-above {
  bottom: 100%;
  top: auto;
}

.option {
  padding: 5px;
  border-bottom: 1px solid #444;
  color: #fff;
  background-color: #333;
}

.option:last-child {
  border-bottom: none;
}

.option:hover {
  background-color: #1e1e20;
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotate {
  transform: rotate(180deg);
}

.custom-select[aria-expanded="true"] .dropdown-arrow {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .table-container {
    overflow-x: auto;
  }
  
  table {
    table-layout: auto;
  }
  
  th, td {
    white-space: normal;
  }
  
  .component-col, .choice-col, .amount-col, .cost-col, .cost-all-col, .links-col {
    width: auto;
  }
}
</style>
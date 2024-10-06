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
        <tr v-for="component in components" :key="component.name">
          <th class="component-col">{{ component.name }}</th>
          <td class="choice-col">
            <div v-if="component.choices.length > 1" class="custom-select" @click="toggleDropdown(component)">
              <div class="selected-option">{{ component.choices[component.selectedChoice].name }}</div>
              <div v-if="component.isOpen" class="options">
                <div v-for="(choice, index) in component.choices" 
                     :key="index" 
                     @click="selectOption(component, index)"
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
              cost: 30,
              costAll: () => this.tracker + 30 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit">ETVR Store</a> Length depending on HMD'
            },
            {
              name: 'Official V4 mini Solder-Required',
              amount: () => 1,
              cost: 25,
              costAll: () => this.tracker + 25 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required">ETVR Store</a> Must solder up your own wires'
            },
                        {
              name: 'Official V4 lite Assemble Yourself',
              amount: () => 1,
              cost: 7,
              costAll: () => this.tracker + 7 + 3,
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
              name: '★ 4 port USB 3.2 LDLrui (MTT Usually) (Best for Cost)',
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
             name: '★ 4 port Adafruit CH334F USB Hub Breakout (MTT) (Best for Size)',
             amount: () => 1,
             cost: 4.99,
             costAll: () => this.tracker + 8,
             links: '<a href="https://www.adafruit.com/product/5997">Adafruit</a> Small, high quality MTT hub breakout'
            },
            {
              name: '★ 3 port USB 3.0 Hub With Power Passthrough (MTT) (Best for Quest)',
              amount: () => 1,
              cost: 17.99,
              costAll: () => this.tracker + 1.41,
              links: '<a href="https://www.amazon.com/uni-Charging-Thunderbolt-Aluminum-Pixelbook/dp/B08SVZFFPP/">Amazon</a> Great for Quest due to power passthrough'
            }, 
 
          ],
          selectedChoice: 1,
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
          total += choice.costAll(this.tracker);
        } else if (component.choices.length === 1) {
          total += component.choices[0].costAll(this.tracker);
        }
      });
      this.total = total;
    },
    toggleDropdown(component) {
      // Close all other dropdowns
      this.components.forEach(comp => {
        if (comp !== component) {
          comp.isOpen = false;
        }
      });
      // Toggle the clicked dropdown
      component.isOpen = !component.isOpen;
    },
    isOptionsAbove(component) {
    if (this.$refs[`select-${component.name}`]) {
      const rect = this.$refs[`select-${component.name}`].getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      return spaceBelow < 200 && rect.top > 200;
    }
    return false;
    },
    selectOption(component, index) {
      component.selectedChoice = index;
      component.isOpen = false;  // This line closes the dropdown
      this.updatePrices();
    },
    closeAllDropdowns() {
      this.components.forEach(component => {
      component.isOpen = false;
    });
  },
  // Add this new method
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

.multi-line-select {
  width: 100%;
  white-space: normal;
  word-wrap: break-word;
  height: auto;
  text-align: center;
}

select {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  white-space: normal;
  height: auto;
  text-align: center;
  text-align-last: center;
}

/* This targets Webkit browsers like Chrome and Safari */
select option {
  white-space: normal;
  word-wrap: break-word;
}

/* This targets Firefox */
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
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
  border: 1px solid #444;
  padding: 5px;
  background-color: #333;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #545454;
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
  color: #545454;
  background-color: #333;
}

.option:last-child {
  border-bottom: none;
}

.option:hover {
  background-color: #1e1e20;
}

/* Ensure text is visible in all states */
.custom-select, .selected-option, .option {
  color: #fff;
}

/* Add some contrast to the selected option */
.selected-option {
  background-color: #1e1e20;
}

/* Improve visibility of options */
.options {
  background-color: #222;
}

/* Add a subtle hover effect */
.option:hover {
  background-color: #555;
}
</style>
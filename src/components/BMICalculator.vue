<template>
  <section class="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50/50 to-white relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent)]"></div>
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 gradient-text text-shadow-sm animate-fade-in-up px-2">
        BMI Calculator
      </h2>
      
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <!-- Left Side: Calculator -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-2xl hover-lift card-transition relative overflow-hidden border border-blue-100">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <!-- Unit Selection Tabs -->
            <div class="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
              <button
                @click="unitSystem = 'metric'"
                :class="[
                  'flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm md:text-base',
                  'transition-all duration-300 ease-in-out',
                  unitSystem === 'metric' 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'text-gray-600 hover:bg-gray-200 hover:scale-[1.02]'
                ]"
              >
                Metric Units
              </button>
              <button
                @click="unitSystem = 'imperial'"
                :class="[
                  'flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm md:text-base',
                  'transition-all duration-300 ease-in-out',
                  unitSystem === 'imperial' 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'text-gray-600 hover:bg-gray-200 hover:scale-[1.02]'
                ]"
              >
                US Units
              </button>
            </div>

            <!-- Age and Gender -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <!-- Age Input -->
              <div class="space-y-2">
                <label for="age" class="block text-sm md:text-base font-semibold text-gray-700">
                  Age <span class="text-gray-500 font-normal text-xs">(2-120 years)</span>
                </label>
                <input
                  id="age"
                  v-model.number="age"
                  type="number"
                  min="2"
                  max="120"
                  placeholder="Enter age"
                  class="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                />
              </div>

              <!-- Gender Selection -->
              <div class="space-y-2">
                <label class="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <div class="flex gap-4">
              <button
                @click="gender = 'male'"
                :class="[
                  'flex-1 px-4 py-3 rounded-xl border-2 font-semibold text-sm md:text-base',
                  'transition-all duration-300 ease-in-out',
                  gender === 'male' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.02]'
                ]"
              >
                Male
              </button>
              <button
                @click="gender = 'female'"
                :class="[
                  'flex-1 px-4 py-3 rounded-xl border-2 font-semibold text-sm md:text-base',
                  'transition-all duration-300 ease-in-out',
                  gender === 'female' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.02]'
                ]"
              >
                Female
              </button>
                </div>
              </div>
            </div>

            <!-- Metric Units Inputs -->
            <div v-if="unitSystem === 'metric'" class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <!-- Height Input - Metric (Feet and Inches) -->
              <div class="space-y-2">
                <label class="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Height
                </label>
                <div class="flex gap-2">
                  <input
                    v-model.number="heightFeet"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="Feet"
                    @input="handleHeightInput"
                    class="flex-1 px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                  />
                  <input
                    v-model.number="heightInches"
                    type="number"
                    min="0"
                    max="11"
                    placeholder="Inches"
                    @input="handleHeightInput"
                    class="flex-1 px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              
              <!-- Weight Input - Metric -->
              <div class="space-y-2">
                <label for="weight" class="block text-sm md:text-base font-semibold text-gray-700">
                  Weight (kg)
                </label>
                  <input
                    id="weight"
                    v-model.number="weightKg"
                    type="number"
                    min="10"
                    max="300"
                    placeholder="Enter weight in kg"
                    @input="handleWeightInput"
                    class="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                  />
              </div>
            </div>

            <!-- Imperial/US Units Inputs -->
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <!-- Height Input - US Units -->
              <div class="space-y-2">
                <label class="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Height
                </label>
                <div class="flex gap-2">
                  <input
                    v-model.number="heightFeet"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="Feet"
                    class="flex-1 px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                  />
                  <input
                    v-model.number="heightInches"
                    type="number"
                    min="0"
                    max="11"
                    placeholder="Inches"
                    class="flex-1 px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              
              <!-- Weight Input - US Units -->
              <div class="space-y-2">
                <label for="weightLb" class="block text-sm md:text-base font-semibold text-gray-700">
                  Weight (lbs)
                </label>
                <input
                  id="weightLb"
                  v-model.number="weightLb"
                  type="number"
                  min="22"
                  max="660"
                  placeholder="Enter weight in pounds"
                  class="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-base md:text-lg outline-none bg-gray-50 focus:bg-white"
                />
              </div>
            </div>
            
            <!-- Calculate and Clear Buttons -->
            <div class="flex gap-4 mb-6 md:mb-8">
              <button
                @click="calculateBMI"
                :disabled="!isValid"
                :class="[
                  'flex-1 gradient-button text-white px-6 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold',
                  'group relative overflow-hidden touch-target',
                  'transition-all duration-300 ease-in-out',
                  isValid 
                    ? 'hover:scale-105 hover:shadow-2xl cursor-pointer opacity-100' 
                    : 'opacity-50 cursor-not-allowed'
                ]"
              >
                <span class="relative z-10 flex items-center gap-2 justify-center">
                  Calculate BMI
                  <svg 
                    :class="[
                      'h-5 w-5 transition-all duration-300 ease-in-out',
                      isValid ? 'group-hover:translate-x-1 group-hover:scale-110' : ''
                    ]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
                <span 
                  v-if="isValid"
                  class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                ></span>
              </button>
              <button
                @click="clearFields"
                class="px-6 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out touch-target active-scale"
              >
                Clear
              </button>
            </div>
            
            <!-- BMI Result -->
            <div v-if="bmiResult !== null" class="mt-6 md:mt-8 animate-fade-in">
              <div :class="resultCardClass" class="rounded-2xl p-6 md:p-8 shadow-xl">
                <div class="text-center">
                  <p class="text-sm md:text-base text-gray-600 mb-2 font-medium">BMI = {{ bmiResult.toFixed(1) }} kg/m²</p>
                  <div :class="categoryBadgeClass" class="inline-block px-4 py-2 rounded-xl font-semibold text-sm md:text-base mb-4">
                    ({{ bmiCategory }})
                  </div>
                  <div class="space-y-2 text-sm md:text-base text-gray-700">
                    <p class="font-semibold">Healthy BMI range: 18.5 kg/m² - 25 kg/m²</p>
                    <p class="leading-relaxed">{{ categoryDescription }}</p>
                  </div>
                </div>
              </div>
              
              <!-- BMI Categories Reference -->
              <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div class="bg-gray-100 rounded-xl p-3 text-center">
                  <p class="text-xs font-semibold text-gray-700 mb-1">Underweight</p>
                  <p class="text-xs text-gray-600">&lt; 18.5</p>
                </div>
                <div class="bg-green-100 rounded-xl p-3 text-center">
                  <p class="text-xs font-semibold text-green-700 mb-1">Normal</p>
                  <p class="text-xs text-green-600">18.5 - 24.9</p>
                </div>
                <div class="bg-yellow-100 rounded-xl p-3 text-center">
                  <p class="text-xs font-semibold text-yellow-700 mb-1">Overweight</p>
                  <p class="text-xs text-yellow-600">25 - 29.9</p>
                </div>
                <div class="bg-red-100 rounded-xl p-3 text-center">
                  <p class="text-xs font-semibold text-red-700 mb-1">Obese</p>
                  <p class="text-xs text-red-600">≥ 30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- Right Side: Graph Visualization -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-2xl card-transition relative overflow-hidden border border-blue-100">
            <h3 class="text-2xl md:text-3xl font-bold text-center mb-6 gradient-text">BMI Categories</h3>
            
            <!-- BMI Graph/Chart -->
            <div class="relative">
              <!-- Chart Container with Fixed Height -->
              <div class="relative w-full h-64 md:h-80 mb-16 flex items-end justify-center gap-2 md:gap-4 px-2">
                <!-- Underweight Bar -->
                <div class="flex-1 max-w-[90px] flex flex-col items-center h-full">
                  <div class="flex-1 w-full flex items-end">
                    <div 
                      class="w-full rounded-t-lg transition-all duration-500 ease-out relative group"
                      :class="[
                        bmiResult !== null && bmiResult < 18.5 
                          ? 'bg-blue-600 ring-4 ring-blue-300 ring-offset-2 shadow-xl' 
                          : 'bg-blue-200'
                      ]"
                      :style="{ 
                        height: bmiResult !== null && bmiResult < 18.5 
                          ? `${Math.min((bmiResult / 18.5) * 60 + 30, 90)}%` 
                          : '30%',
                        opacity: bmiResult !== null && bmiResult >= 18.5 ? '0.4' : '1'
                      }"
                    >
                      <div v-if="bmiResult !== null && bmiResult < 18.5" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg z-10">
                        {{ bmiResult.toFixed(1) }}
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 text-center w-full">
                    <p class="text-xs md:text-sm font-semibold" :class="bmiResult !== null && bmiResult < 18.5 ? 'text-blue-700' : 'text-gray-700'">Underweight</p>
                    <p class="text-xs text-gray-500">&lt; 18.5</p>
                  </div>
                </div>

                <!-- Normal Bar -->
                <div class="flex-1 max-w-[90px] flex flex-col items-center h-full">
                  <div class="flex-1 w-full flex items-end">
                    <div 
                      class="w-full rounded-t-lg transition-all duration-500 ease-out relative group"
                      :class="[
                        bmiResult !== null && bmiResult >= 18.5 && bmiResult < 25
                          ? 'bg-green-600 ring-4 ring-green-300 ring-offset-2 shadow-xl' 
                          : 'bg-green-200'
                      ]"
                      :style="{ 
                        height: bmiResult !== null && bmiResult >= 18.5 && bmiResult < 25 
                          ? `${Math.min(((bmiResult - 18.5) / (25 - 18.5)) * 40 + 60, 90)}%` 
                          : '60%',
                        opacity: bmiResult !== null && (bmiResult < 18.5 || bmiResult >= 25) ? '0.4' : '1'
                      }"
                    >
                      <div v-if="bmiResult !== null && bmiResult >= 18.5 && bmiResult < 25" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg z-10">
                        {{ bmiResult.toFixed(1) }}
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 text-center w-full">
                    <p class="text-xs md:text-sm font-semibold" :class="bmiResult !== null && bmiResult >= 18.5 && bmiResult < 25 ? 'text-green-700' : 'text-gray-700'">Normal</p>
                    <p class="text-xs text-gray-500">18.5 - 24.9</p>
                  </div>
                </div>

                <!-- Overweight Bar -->
                <div class="flex-1 max-w-[90px] flex flex-col items-center h-full">
                  <div class="flex-1 w-full flex items-end">
                    <div 
                      class="w-full rounded-t-lg transition-all duration-500 ease-out relative group"
                      :class="[
                        bmiResult !== null && bmiResult >= 25 && bmiResult < 30
                          ? 'bg-yellow-600 ring-4 ring-yellow-300 ring-offset-2 shadow-xl' 
                          : 'bg-yellow-200'
                      ]"
                      :style="{ 
                        height: bmiResult !== null && bmiResult >= 25 && bmiResult < 30 
                          ? `${Math.min(((bmiResult - 25) / (30 - 25)) * 20 + 70, 90)}%` 
                          : '70%',
                        opacity: bmiResult !== null && (bmiResult < 25 || bmiResult >= 30) ? '0.4' : '1'
                      }"
                    >
                      <div v-if="bmiResult !== null && bmiResult >= 25 && bmiResult < 30" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg z-10">
                        {{ bmiResult.toFixed(1) }}
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 text-center w-full">
                    <p class="text-xs md:text-sm font-semibold" :class="bmiResult !== null && bmiResult >= 25 && bmiResult < 30 ? 'text-yellow-700' : 'text-gray-700'">Overweight</p>
                    <p class="text-xs text-gray-500">25 - 29.9</p>
                  </div>
                </div>

                <!-- Obese Bar -->
                <div class="flex-1 max-w-[90px] flex flex-col items-center h-full">
                  <div class="flex-1 w-full flex items-end">
                    <div 
                      class="w-full rounded-t-lg transition-all duration-500 ease-out relative group"
                      :class="[
                        bmiResult !== null && bmiResult >= 30
                          ? 'bg-red-600 ring-4 ring-red-300 ring-offset-2 shadow-xl' 
                          : 'bg-red-200'
                      ]"
                      :style="{ 
                        height: bmiResult !== null && bmiResult >= 30 
                          ? `${Math.min(((bmiResult - 30) / 20) * 15 + 80, 95)}%` 
                          : '80%',
                        opacity: bmiResult !== null && bmiResult < 30 ? '0.4' : '1'
                      }"
                    >
                      <div v-if="bmiResult !== null && bmiResult >= 30" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg z-10">
                        {{ bmiResult.toFixed(1) }}
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 text-center w-full">
                    <p class="text-xs md:text-sm font-semibold" :class="bmiResult !== null && bmiResult >= 30 ? 'text-red-700' : 'text-gray-700'">Obese</p>
                    <p class="text-xs text-gray-500">≥ 30</p>
                  </div>
                </div>
              </div>

              <!-- BMI Scale Line Below Bars -->
              <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-green-200 via-yellow-200 to-red-200 rounded-full mb-8">
                <div 
                  v-if="bmiResult !== null"
                  class="absolute top-1/2 left-0 h-5 w-5 rounded-full border-2 border-white shadow-xl transition-all duration-500 ease-out z-20"
                  :class="categoryBadgeClass.split(' ')[0]"
                  :style="{ 
                    left: `${Math.min(Math.max(((bmiResult / 40) * 100), 3), 97)}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: bmiResult < 18.5 ? '#2563eb' : bmiResult < 25 ? '#16a34a' : bmiResult < 30 ? '#ca8a04' : '#dc2626'
                  }"
                >
                  <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold text-white whitespace-nowrap"
                    :style="{
                      backgroundColor: bmiResult < 18.5 ? '#2563eb' : bmiResult < 25 ? '#16a34a' : bmiResult < 30 ? '#ca8a04' : '#dc2626'
                    }"
                  >
                    BMI: {{ bmiResult.toFixed(1) }}
                  </div>
                </div>
              </div>
              
              <!-- Scale Markers -->
              <div class="absolute bottom-0 left-0 right-0 mb-1 flex justify-between text-xs text-gray-500 px-1">
                <span class="text-[10px] md:text-xs">0</span>
                <span class="text-[10px] md:text-xs">10</span>
                <span class="text-[10px] md:text-xs">20</span>
                <span class="text-[10px] md:text-xs">30</span>
                <span class="text-[10px] md:text-xs">40+</span>
              </div>
            </div>

            <!-- Info Text -->
            <div v-if="bmiResult === null" class="mt-6 text-center">
              <p class="text-sm text-gray-500 italic">Calculate your BMI to see the visualization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const unitSystem = ref('metric')
const age = ref(null)
const gender = ref('male')
const weightKg = ref(null)
const heightFeet = ref(null)
const heightInches = ref(null)
const weightLb = ref(null)
const bmiResult = ref(null)

const isValid = computed(() => {
  // Age is optional, only validate if provided
  if (age.value !== null && age.value !== '' && age.value !== undefined && (age.value < 2 || age.value > 120)) return false
  
  if (unitSystem.value === 'metric') {
    // Check height in feet and inches
    const validHeightFeet = heightFeet.value !== null && heightFeet.value !== '' && heightFeet.value !== undefined && 
                           !isNaN(heightFeet.value) && heightFeet.value > 0
    const validHeightInches = heightInches.value !== null && heightInches.value !== '' && heightInches.value !== undefined && 
                             !isNaN(heightInches.value) && heightInches.value >= 0 && heightInches.value <= 11
    const validHeight = validHeightFeet && validHeightInches
    // Check weight
    const validWeight = weightKg.value !== null && weightKg.value !== '' && weightKg.value !== undefined && 
                       !isNaN(weightKg.value) && weightKg.value > 0 && weightKg.value <= 300
    return validHeight && validWeight
  } else {
    const validHeightFeet = heightFeet.value !== null && heightFeet.value !== '' && heightFeet.value !== undefined && 
                           !isNaN(heightFeet.value) && heightFeet.value > 0
    const validHeightInches = heightInches.value !== null && heightInches.value !== '' && heightInches.value !== undefined && 
                             !isNaN(heightInches.value) && heightInches.value >= 0 && heightInches.value <= 11
    const validWeight = weightLb.value !== null && weightLb.value !== '' && weightLb.value !== undefined && 
                       !isNaN(weightLb.value) && weightLb.value > 0 && weightLb.value <= 660
    return validHeightFeet && validHeightInches && validWeight
  }
})


const handleHeightInput = () => {
  // Force reactivity update
}

const handleWeightInput = () => {
  // Force reactivity update
}

const calculateBMI = () => {
  if (!isValid.value) return
  
  let heightInMeters = 0
  let weightInKg = 0
  
  if (unitSystem.value === 'metric') {
    // Convert feet and inches to meters
    const totalInches = (Number(heightFeet.value) * 12) + (Number(heightInches.value) || 0)
    heightInMeters = totalInches * 0.0254
    weightInKg = Number(weightKg.value)
  } else {
    // Convert feet and inches to meters
    const totalInches = (Number(heightFeet.value) * 12) + (Number(heightInches.value) || 0)
    heightInMeters = totalInches * 0.0254
    // Convert pounds to kg
    weightInKg = Number(weightLb.value) * 0.453592
  }
  
  if (heightInMeters > 0 && weightInKg > 0) {
    bmiResult.value = weightInKg / (heightInMeters * heightInMeters)
  }
}

const clearFields = () => {
  age.value = null
  weightKg.value = null
  heightFeet.value = null
  heightInches.value = null
  weightLb.value = null
  bmiResult.value = null
}

const bmiCategory = computed(() => {
  if (bmiResult.value === null) return ''
  
  if (bmiResult.value < 18.5) return 'Underweight'
  if (bmiResult.value < 25) return 'Normal Weight'
  if (bmiResult.value < 30) return 'Overweight'
  return 'Obese'
})

const categoryDescription = computed(() => {
  if (bmiResult.value === null) return ''
  
  if (bmiResult.value < 18.5) {
    return 'Consider consulting a healthcare provider to discuss healthy weight gain strategies.'
  }
  if (bmiResult.value < 25) {
    return 'Congratulations! You are in a healthy weight range. Maintain a balanced diet and regular exercise.'
  }
  if (bmiResult.value < 30) {
    return 'Consider consulting with our healthcare provider about healthy weight management strategies.'
  }
  return 'Please consult with our healthcare provider for a comprehensive health assessment and personalized weight management plan.'
})

const resultCardClass = computed(() => {
  if (bmiResult.value === null) return ''
  
  if (bmiResult.value < 18.5) {
    return 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
  }
  if (bmiResult.value < 25) {
    return 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200'
  }
  if (bmiResult.value < 30) {
    return 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200'
  }
  return 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200'
})

const categoryBadgeClass = computed(() => {
  if (bmiResult.value === null) return ''
  
  if (bmiResult.value < 18.5) {
    return 'bg-blue-600 text-white'
  }
  if (bmiResult.value < 25) {
    return 'bg-green-600 text-white'
  }
  if (bmiResult.value < 30) {
    return 'bg-yellow-600 text-white'
  }
  return 'bg-red-600 text-white'
})
</script>

<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    <!-- Header -->
    <header class="gradient-primary text-white shadow-2xl relative overflow-hidden border-b-4 border-white/20">
      <!-- Animated Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/95 via-blue-700/95 to-blue-800/95"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(20,184,166,0.15),transparent_50%)]"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-1500 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
      </div>
      
      <div class="container mx-auto px-4 py-4 md:py-6 relative z-10">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <!-- Logo and Brand Section -->
          <div class="flex items-center gap-4 animate-fade-in group">
            <div class="relative">
              <div class="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="/logo.jpeg" 
                alt="Oza Polyclinic Logo" 
                class="relative h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              >
            </div>
            <div class="flex flex-col">
              <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-shadow-lg text-center sm:text-left leading-tight">
                OZA POLY CLINIC
              </h1>
              <p class="text-xs sm:text-sm md:text-base text-blue-100 font-medium text-center sm:text-left mt-0.5 opacity-90">
                Your complete health destination
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Border Glow -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </header>

    <!-- Hero Section -->
    <section class="gradient-hero py-12 md:py-20 lg:py-28 relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" :style="{ backgroundImage: `url('${currentBackgroundImage}')` }"></div>
      <!-- Overlay for better text readability with smooth transition -->
      <div class="absolute inset-0 bg-black/75 md:bg-black/30 transition-opacity duration-500"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      <div class="container mx-auto px-4 text-left relative z-10">
        <div class="max-w-3xl animate-fade-in opacity-90">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-shadow-sm animate-fade-in-up stagger-1">
            Dr. Deep Oza (B.H.M.S.)
          </h2>
          <p class="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4 md:mb-6 font-semibold text-shadow-sm animate-fade-in-up stagger-2">
            Your Health, Our Priority
          </p>
          <p class="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-2xl px-2 animate-fade-in-up stagger-3">
            Established practice in patient care and general consultation in Madhapar. 
            Skip the waiting line and book your appointment online.
          </p>
          <button 
            @click="bookAppointment"
            class="gradient-button text-white px-6 py-3 md:px-10 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-bounce hover-lift animate-pulse-once group relative overflow-hidden touch-target active-scale opacity-90"
          >
            <span class="relative z-10 flex items-center gap-2">
              Book Appointment
              <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </button>
        </div>
      </div>
    </section>


        <!-- About Section -->
        <section class="py-12 md:py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.03),transparent)]"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 gradient-text text-shadow-sm animate-fade-in-up px-2">
            About Dr. Deep Kishorbhai Oza
          </h2>
          <div class="bg-gradient-to-br from-blue-50/50 via-white to-green-50/30 rounded-3xl p-6 md:p-10 shadow-xl hover-lift card-transition border border-blue-100/50">
            <div class="prose prose-lg max-w-none">
              <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up stagger-1">
                Dr. Deep Kishorbhai Oza is a practicing physician in <strong>Madhapar-Bhuj</strong>, providing holistic and patient-focused healthcare. Dr. Oza treats both acute and chronic conditions and offers general physician consultations for common health concerns such as fever, cold, cough, infections, diabetes, and blood pressure monitoring.
              </p>
              <p class="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in-up stagger-2">
                He follows an integrated and ethical approach to patient care, emphasizing accurate diagnosis, safe treatment, and long-term wellness. The clinic is known for delivering comprehensive primary care services with a strong focus on personalized treatment plans, patient education, and overall well-being for individuals and families in <strong>Madhapar-Bhuj</strong>.
              </p>
            </div>
            
            <!-- Key Highlights -->
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mt-8 md:mt-10 mb-6 animate-fade-in-up stagger-3">Key Highlights</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up stagger-3">
              <div class="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-blue-100">
                <div class="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">General Physician</h3>
                  <p class="text-sm text-gray-600">Comprehensive primary healthcare services</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-green-100">
                <div class="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Holistic Approach</h3>
                  <p class="text-sm text-gray-600">Integrated treatment for acute and chronic conditions</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-purple-100">
                <div class="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">General Consultation</h3>
                  <p class="text-sm text-gray-600">Care for common illness and routine health monitoring</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-yellow-100">
                <div class="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                  <svg class="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Personalized Care</h3>
                  <p class="text-sm text-gray-600">Customized treatment plans tailored to individual needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Cards Section -->
    <section class="py-12 md:py-16 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <!-- Opening Hours -->
          <div class="gradient-card-blue rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-1 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex flex-col sm:flex-row items-start sm:items-center mb-4 md:mb-6 gap-3 sm:gap-0">
                <div class="bg-blue-600 p-2.5 md:p-3 rounded-xl shadow-lg group-hover:scale-110 transition-bounce">
                  <svg class="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 sm:ml-3">Opening Hours</h3>
              </div>

              <div class="space-y-2 md:space-y-3 text-gray-700">
                <h3 class="text-sm md:text-lg flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">Monday to Saturday </h3>
                <p class="text-base md:text-lg flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                  <span class="font-semibold text-blue-700 sm:w-32">Morning:</span>
                  <span class="sm:ml-2">10:00 AM - 1:00 PM</span>
                </p>
                <p class="text-base md:text-lg flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                  <span class="font-semibold text-blue-700 sm:w-32">Evening:</span>
                  <span class="sm:ml-2">5:00 PM - 9:00 PM</span>
                </p>
                <p>(On festivals & public holidays by appointment only)</p>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div 
            @click="openLocation"
            class="gradient-card-green rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-2 group relative overflow-hidden cursor-pointer active-scale"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex flex-col sm:flex-row items-start sm:items-center mb-4 md:mb-6 gap-3 sm:gap-0">
                <div class="bg-green-600 p-2.5 md:p-3 rounded-xl shadow-lg group-hover:scale-110 transition-bounce">
                  <svg class="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 sm:ml-4">Location</h3>
                  <svg class="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                Dwiti Complex, Bhudia Street, Junavas, Madhapar
              </p>
              <p class="text-sm text-green-600 font-medium mt-2 flex items-center gap-1">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Click to open in Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50/50 to-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent)]"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 gradient-text text-shadow-sm animate-fade-in-up px-2">
          Our Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <!-- Fever, Cold & Cough Treatment -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-1 group relative overflow-hidden border border-blue-100">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Fever, Cold & Cough</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 mt-1">•</span>
                  <span>Viral fever & seasonal infections</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 mt-1">•</span>
                  <span>Flu, sore throat & body ache</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 mt-1">•</span>
                  <span>Weakness & fatigue treatment</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Diabetes Management -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-2 group relative overflow-hidden border border-green-100">
            <div class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Diabetes Management</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-green-600 mt-1">•</span>
                  <span>Blood sugar monitoring</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 mt-1">•</span>
                  <span>Lifestyle & diet guidance</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 mt-1">•</span>
                  <span>Long-term diabetes care</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Blood Pressure Management -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-3 group relative overflow-hidden border border-red-100">
            <div class="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">BP Management</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-red-600 mt-1">•</span>
                  <span>High & low BP evaluation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-600 mt-1">•</span>
                  <span>Regular BP monitoring</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-600 mt-1">•</span>
                  <span>Lifestyle counselling</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Infections & Common illness -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-4 group relative overflow-hidden border border-purple-100">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Infections & Illness</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 mt-1">•</span>
                  <span>Respiratory & digestive infections</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 mt-1">•</span>
                  <span>UTI & skin infections</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 mt-1">•</span>
                  <span>Fungal infections treatment</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Digestive & Gastric Problems -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-5 group relative overflow-hidden border border-yellow-100">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Digestive & Gastric</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-yellow-600 mt-1">•</span>
                  <span>Acidity & indigestion</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-600 mt-1">•</span>
                  <span>Constipation & gas</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-600 mt-1">•</span>
                  <span>Stomach pain & bloating</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Allergy & Respiratory Care -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-6 group relative overflow-hidden border border-teal-100">
            <div class="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Allergy & Respiratory</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-teal-600 mt-1">•</span>
                  <span>Allergic rhinitis & sinus</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-600 mt-1">•</span>
                  <span>Seasonal allergies</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-teal-600 mt-1">•</span>
                  <span>Breathing discomfort</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- General Health Check-ups -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-7 group relative overflow-hidden border border-indigo-100">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Health Check-ups</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 mt-1">•</span>
                  <span>Routine medical examination</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 mt-1">•</span>
                  <span>Lab report review</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600 mt-1">•</span>
                  <span>Preventive health screening</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Lifestyle & Preventive Care -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-8 group relative overflow-hidden border border-pink-100">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Lifestyle & Preventive</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-pink-600 mt-1">•</span>
                  <span>Weight management guidance</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-600 mt-1">•</span>
                  <span>Stress & sleep counselling</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-600 mt-1">•</span>
                  <span>Diet & exercise advice</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Child & Elderly Care -->
          <div class="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover-lift card-transition animate-scale-in stagger-9 group relative overflow-hidden border border-cyan-100">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <svg class="h-10 w-10 md:h-12 md:w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Child & Elderly Care</h3>
              <ul class="text-sm md:text-base text-gray-600 space-y-2">
                <li class="flex items-start gap-2">
                  <span class="text-cyan-600 mt-1">•</span>
                  <span>Pediatric common illness</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-600 mt-1">•</span>
                  <span>Geriatric health monitoring</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-cyan-600 mt-1">•</span>
                  <span>Immunity & nutrition guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BMI Calculator Section -->
    <BMICalculator />

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-gray-300 mb-2 text-base md:text-lg">© 2025 Oza Poly Clinic | Dr. Deep Oza</p>
        <p class="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">Madhapar, Bhuj - Gujarat</p>
        <a
          href="https://www.instagram.com/ozapolyclinic"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 text-white hover:text-pink-400 transition-colors duration-300 group"
          aria-label="Follow us on Instagram"
        >
          <svg class="h-6 w-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span class="text-sm md:text-base">Follow us on Instagram</span>
        </a>
      </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-20 left-4 md:bottom-20 md:left-6 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 md:p-4 rounded-full shadow-2xl transform hover:scale-110 transition-bounce z-50 animate-bounce-slow hover-glow group touch-target active-scale"
      aria-label="Share on WhatsApp"
    >
      <svg class="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>

    <!-- Floating Call Button -->
    <a
      href="tel:+917359647410"
      class="fixed bottom-4 left-4 md:bottom-6 md:left-6 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 md:p-4 rounded-full shadow-2xl transform hover:scale-110 transition-bounce z-50 animate-pulse-slow hover-glow group touch-target active-scale"
      aria-label="Call Clinic"
    >
      <svg class="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import BMICalculator from './components/BMICalculator.vue'

const phoneNumber = '+917359647410'
const whatsappNumber = '917359647410'

// Background slideshow
const backgroundImages = ['/clinic1.jpeg', '/clinic2.jpeg']
const currentImageIndex = ref(0)
let slideshowInterval = null

const currentBackgroundImage = computed(() => {
  return backgroundImages[currentImageIndex.value]
})

onMounted(() => {
  // Change image every 5 seconds
  slideshowInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.length
  }, 5000)
})

onUnmounted(() => {
  if (slideshowInterval) {
    clearInterval(slideshowInterval)
  }
})

const whatsappUrl = computed(() => {
  const message = encodeURIComponent('Hello, I would like to book an appointment with Dr.Deep Oza.')
  return `https://wa.me/${whatsappNumber}?text=${message}`
})

const bookAppointment = () => {
  const message = encodeURIComponent('Hello, I would like to book an appointment with Dr.Deep Oza.')
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
}

const consultDoctor = () => {
  const message = encodeURIComponent('Hello, I would like to consult with Dr. Deep Oza.')
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
}

const openLocation = () => {
  // Plus Code: 6PQ4+C7 Madhapar, Bhuj, Gujarat
  const plusCode = 'Oza PolyClinic No.1, 1-2 Dwiti Complex, Street Bhudia Street, opp. Local Board, Junavas, Madhapar, Gujarat 370020'
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`
  window.open(mapsUrl, '_blank')
}
</script>

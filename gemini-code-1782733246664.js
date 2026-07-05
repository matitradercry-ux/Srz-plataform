import React, { useState } from 'react';

export default function HomeSrZ() {
  const [busqueda, setBusqueda] = useState('');

  // Simulación de sugerencias rápidas para el buscador
  const sugerencias = ['NE555', 'US30', 'LM317', 'Fibonacci', 'ESP32', 'Gestión de Riesgo'];

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* Fondo decorativo con sutiles destellos de fondo (Glow de fondo) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <header className="relative max-w-5xl mx-auto pt-16 pb-12 px-4 text-center z-10">
        {/* Logo Placeholder / Efecto de Brillo Central */}
        <div className="relative inline-block mb-6 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r flex items-center justify-center from-cyan-500 to-orange-500 rounded-full blur-2xl opacity-20 w-32 h-32 mx-auto"></div>
          <div className="relative text-6xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 via-slate-100 to-orange-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Sr.Z
          </div>
        </div>
        
        <h1 className="text-xl md:text-2xl font-medium text-slate-400 tracking-wide uppercase">
          Docente de Electrónica <span className="text-slate-600">|</span> <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.2)]">Trader</span>
        </h1>
        <p className="mt-3 text-sm md:text-base text-slate-500 max-w-xl mx-auto">
          Laboratorio interactivo de desarrollo técnico, simulación de circuitos y análisis de mercados financieros.
        </p>

        {/* Buscador Inteligente */}
        <div className="mt-10 max-w-2xl mx-auto relative px-2">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-xl blur-xl opacity-70"></div>
          <div className="relative flex items-center bg-[#0d1321] border border-slate-800 focus-within:border-cyan-500/50 rounded-xl px-4 py-3.5 transition-all shadow-2xl">
            <span className="text-xl mr-3 text-slate-500">🔍</span>
            <input 
              type="text"
              placeholder="¿Qué quieres aprender o analizar hoy? (Ej: NE555, US30...)"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base font-medium"
            />
          </div>
          {/* Tags de sugerencia rápida */}
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-slate-500">
            <span>Sugerencias:</span>
            {sugerencias.map((item) => (
              <button 
                key={item} 
                onClick={() => setBusqueda(item)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Bento Grid Principal */}
      <main className="max-w-5xl mx-auto px-4 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Tarjeta 1: Electrónica (Doble ancho en desktop) */}
          <section className="md:col-span-2 group relative bg-[#0d1321]/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between h-64">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
            <div>
              <div className="flex items-center space-x-3 text-cyan-400 mb-4">
                <span className="text-2xl">⚡</span>
                <h2 className="text-lg font-bold uppercase tracking-wider">Electrónica</h2>
              </div>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Accede al taller virtual. Diseña circuitos, simula componentes en tiempo real, calcula etapas astables y revisa apuntes técnicos de cátedra.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs bg-cyan-950/60 text-cyan-400 border border-cyan-800/30 px-2.5 py-1 rounded-md">Simulador</span>
              <span className="text-xs bg-cyan-950/60 text-cyan-400 border border-cyan-800/30 px-2.5 py-1 rounded-md">Osciloscopio</span>
              <span className="text-xs bg-cyan-950/60 text-cyan-400 border border-cyan-800/30 px-2.5 py-1 rounded-md">Calculadoras</span>
            </div>
          </section>

          {/* Tarjeta 2: Trading Room (US30) */}
          <section className="group relative bg-[#0d1321]/60 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between h-64">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-300"></div>
            <div>
              <div className="flex items-center space-x-3 text-orange-400 mb-4">
                <span className="text-2xl">📈</span>
                <h2 className="text-lg font-bold uppercase tracking-wider">Trading</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Análisis técnico enfocado en US30 y Bitcoin bajo Smart Money Concepts. Gestión de riesgo integrada y calculadoras de lotaje.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs bg-orange-950/60 text-orange-400 border border-orange-800/30 px-2.5 py-1 rounded-md">US30</span>
              <span className="text-xs bg-orange-950/60 text-orange-400 border border-orange-800/30 px-2.5 py-1 rounded-md">BitCheck</span>
              <span className="text-xs bg-orange-950/60 text-orange-400 border border-orange-800/30 px-2.5 py-1 rounded-md">Riesgo</span>
            </div>
          </section>

          {/* Tarjeta 3: Biblioteca de Herramientas y Enlaces */}
          <section className="group relative bg-[#0d1321]/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between h-60">
            <div>
              <div className="flex items-center space-x-3 text-slate-300 mb-4">
                <span className="text-xl">🧰</span>
                <h2 className="text-base font-bold uppercase tracking-wider">Herramientas</h2>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Tu ecosistema diario centralizado: accesos rápidos directos a Wokwi, Tinkercad, TradingView y hojas de datos oficiales.
              </p>
            </div>
            <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer">
              Ver utilidades externas →
            </span>
          </section>

          {/* Tarjeta 4: IA Laboratorio (Bloqueado / Meta V2) */}
          <section className="md:col-span-2 group relative bg-[#0a0e1a]/40 border border-slate-900/80 rounded-2xl p-6 overflow-hidden flex flex-col justify-between h-60 select-none">
            {/* Patrón de líneas simulando código/circuitos de fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-slate-600">
                  <span className="text-xl">🤖</span>
                  <h2 className="text-base font-bold uppercase tracking-wider">IA Sr.Z <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded ml-2">PRÓXIMAMENTE V2</span></h2>
                </div>
                <span className="text-xs text-slate-600 font-mono">⚡ OFFLINE</span>
              </div>
              <p className="text-slate-600 text-xs max-w-md leading-relaxed">
                Asistente predictivo inteligente entrenado con el material didáctico, guías de trabajos prácticos de electrónica y bitácoras de trading propias.
              </p>
            </div>
            <div className="w-full bg-slate-950/40 rounded border border-slate-900 p-2 font-mono text-[11px] text-slate-700">
              <span className="text-emerald-800">sr-z-system:~$</span> learning_model --status [LOCKED]
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
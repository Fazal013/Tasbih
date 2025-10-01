import { useState } from 'react';
import { RotateCcw, Edit3, Check, X, Settings, ChevronUp, ChevronDown, BookOpen, ChevronRight, ChevronDown as ChevronDownIcon } from 'lucide-react';

export default function TasbihCounter() {
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [stepValue, setStepValue] = useState(1);
  const [isEditingStep, setIsEditingStep] = useState(false);
  const [stepEditValue, setStepEditValue] = useState('');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [isDhikrOpen, setIsDhikrOpen] = useState(false);

  const increment = () => {
    setCount(prev => prev + stepValue);
  };

  const decrement = () => {
    setCount(prev => Math.max(0, prev - stepValue));
  };

  const reset = () => {
    setCount(0);
    setShowResetConfirm(false);
  };

  const handleResetClick = () => {
    setShowResetConfirm(true);
  };

  const handleEdit = () => {
    setEditValue(count.toString());
    setIsEditing(true);
  };

  const saveEdit = () => {
    const newValue = parseInt(editValue, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setCount(newValue);
    }
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  const handleStepEdit = () => {
    setStepEditValue(stepValue.toString());
    setIsEditingStep(true);
  };

  const saveStepEdit = () => {
    const newValue = parseInt(stepEditValue, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      setStepValue(newValue);
    }
    setIsEditingStep(false);
  };

  const cancelStepEdit = () => {
    setIsEditingStep(false);
    setStepEditValue('');
  };

  const handleStepKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveStepEdit();
    } else if (e.key === 'Escape') {
      cancelStepEdit();
    }
  };

  const toggleDhikr = () => {
    setIsDhikrOpen(prev => !prev);
  };

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
      </div>

      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40,20 L45,35 L60,35 L48,44 L53,59 L40,50 L27,59 L32,44 L20,35 L35,35 Z" 
                    fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" opacity="0.4"/>
              <path d="M40,10 L55,15 L65,25 L70,40 L65,55 L55,65 L40,70 L25,65 L15,55 L10,40 L15,25 L25,15 Z" 
                    fill="none" stroke="currentColor" strokeWidth="0.8" className="text-amber-700" opacity="0.3"/>
              <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-500" opacity="0.5"/>
              <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-600" opacity="0.3"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-orange-600" opacity="0.4"/>
              <circle cx="60" cy="20" r="2" fill="currentColor" className="text-orange-600" opacity="0.4"/>
              <circle cx="20" cy="60" r="2" fill="currentColor" className="text-orange-600" opacity="0.4"/>
              <circle cx="60" cy="60" r="2" fill="currentColor" className="text-orange-600" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-screen px-4 gap-8 lg:gap-12">
        {/* Dhikr Sidebar - Large Screens */}
        <div className="hidden lg:block w-80 xl:w-96 flex-shrink-0 max-h-[70vh]">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl border-4 border-orange-300/50 p-6 pb-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
            <div className="border-b-2 border-orange-400/30 pb-3 mb-4 flex-shrink-0">
              <h2 className="text-2xl font-bold text-orange-900 text-center">Recite Dhikr</h2>
              <p className="text-sm text-orange-700/70 text-center mt-1">Remembrance of Allah</p>
            </div>
            
            <div className="space-y-3 text-orange-900 overflow-y-auto pr-2 flex-1 custom-scrollbar" style={{ maxHeight: '350px' }}>
              <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 8px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: linear-gradient(to bottom, #fed7aa, #fdba74);
                  border-radius: 10px;
                  margin: 4px 0;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: linear-gradient(to bottom, #f97316, #ea580c);
                  border-radius: 10px;
                  border: 2px solid #fed7aa;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: linear-gradient(to bottom, #ea580c, #c2410c);
                  box-shadow: 0 0 6px rgba(249, 115, 22, 0.5);
                }
              `}</style>
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Subhan Allah</p>
                  <p className="text-xs text-orange-700/80">Glory be to Allah (33x after prayer)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Alhamdulillah</p>
                  <p className="text-xs text-orange-700/80">Praise be to Allah (33x after prayer)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Allahu Akbar</p>
                  <p className="text-xs text-orange-700/80">Allah is the Greatest (34x after prayer)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">La ilaha illa Allah</p>
                  <p className="text-xs text-orange-700/80">There is no god except Allah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Astaghfirullah</p>
                  <p className="text-xs text-orange-700/80">I seek forgiveness from Allah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">La Hawla Wala Quwatta illa Billah</p>
                  <p className="text-xs text-orange-700/80">There is no power except with Allah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Subhan Allahi wa bihamdihi</p>
                  <p className="text-xs text-orange-700/80">Glory and praise be to Allah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Subhan Allahil Adhim</p>
                  <p className="text-xs text-orange-700/80">Glory be to Allah, The Most Great</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">La ilaha illa Anta subhanaka inni kuntu minaz zalimin</p>
                  <p className="text-xs text-orange-700/80">There is no deity except You, glory to You. I have been of the wrongdoers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Bismillah ir-Rahman ir-Rahim</p>
                  <p className="text-xs text-orange-700/80">In the name of Allah, the Most Gracious, the Most Merciful</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">Allahumma salli ala Muhammad</p>
                  <p className="text-xs text-orange-700/80">O Allah, send blessings upon Muhammad</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <div>
                  <p className="font-bold text-base">SubhanAllah wa bihamdihi SubhanAllahil Adhim</p>
                  <p className="text-xs text-orange-700/80">Glory and praise to Allah, Glory to Allah the Most Great</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t-2 border-orange-400/30 flex-shrink-0">
              <p className="text-xs text-center text-orange-700/70 italic">
                Remember Me, and I will remember you - Quran 2:152
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-1">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 mb-2">
              Digital Tasbih
            </h1>
            <p className="text-sm md:text-base text-orange-700 opacity-80 mb-4 md:mb-6">
              Keep track of your dhikr with ease
            </p>
            
            {/* Control Buttons */}
            <div className="flex gap-3 md:gap-4 lg:gap-5 justify-center flex-wrap">
              {isEditingStep ? (
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-white/90 backdrop-blur-sm text-orange-700 rounded-2xl md:rounded-3xl shadow-lg border border-orange-200/50">
                  <input
                    type="number"
                    value={stepEditValue}
                    onChange={(e) => setStepEditValue(e.target.value)}
                    onKeyDown={handleStepKeyPress}
                    className="w-12 md:w-16 text-center bg-transparent font-semibold focus:outline-none text-sm md:text-base"
                    autoFocus
                    min="1"
                  />
                  <button onClick={saveStepEdit} className="text-green-600 hover:text-green-700">
                    <Check size={14} className="md:w-4 md:h-4" />
                  </button>
                  <button onClick={cancelStepEdit} className="text-red-600 hover:text-red-700">
                    <X size={14} className="md:w-4 md:h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleStepEdit}
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm text-orange-700 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-200/50"
                  title={`Step: +${stepValue}`}
                >
                  <Settings size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </button>
              )}

              <button
                onClick={handleEdit}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm text-orange-700 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-200/50"
              >
                <Edit3 size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>

              <button
                onClick={handleResetClick}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm text-orange-700 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-200/50"
              >
                <RotateCcw size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Dhikr Toggle Button - Small Screens */}
              <button
                onClick={toggleDhikr}
                className="lg:hidden w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm text-orange-700 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-200/50"
                title="View Dhikr"
              >
                <BookOpen size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>

          {/* Dhikr Dropdown - Small Screens */}
          <div className="lg:hidden w-full max-w-md mx-auto mb-4">
            <button
              onClick={toggleDhikr}
              className="w-full flex items-center justify-between py-3 px-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-orange-300/50 text-left transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-orange-700" />
                <span className="font-semibold text-orange-900">Recite Dhikr</span>
                <span className="text-sm text-orange-700/70">Remembrance of Allah</span>
              </div>
              {isDhikrOpen ? (
                <ChevronDownIcon size={20} className="text-orange-700 transition-transform duration-300" />
              ) : (
                <ChevronRight size={20} className="text-orange-700 transition-transform duration-300" />
              )}
            </button>
            
            {isDhikrOpen && (
              <div className="mt-2 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-200/50 max-h-60 overflow-y-auto custom-scrollbar">
                <div className="space-y-3 text-orange-900 pr-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Subhan Allah</p>
                      <p className="text-xs text-orange-700/80">Glory be to Allah (33x after prayer)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Alhamdulillah</p>
                      <p className="text-xs text-orange-700/80">Praise be to Allah (33x after prayer)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Allahu Akbar</p>
                      <p className="text-xs text-orange-700/80">Allah is the Greatest (34x after prayer)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">La ilaha illa Allah</p>
                      <p className="text-xs text-orange-700/80">There is no god except Allah</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Astaghfirullah</p>
                      <p className="text-xs text-orange-700/80">I seek forgiveness from Allah</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">La Hawla Wala Quwatta illa Billah</p>
                      <p className="text-xs text-orange-700/80">There is no power except with Allah</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Subhan Allahi wa bihamdihi</p>
                      <p className="text-xs text-orange-700/80">Glory and praise be to Allah</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Subhan Allahil Adhim</p>
                      <p className="text-xs text-orange-700/80">Glory be to Allah, The Most Great</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">La ilaha illa Anta subhanaka inni kuntu minaz zalimin</p>
                      <p className="text-xs text-orange-700/80">There is no deity except You, glory to You. I have been of the wrongdoers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Bismillah ir-Rahman ir-Rahim</p>
                      <p className="text-xs text-orange-700/80">In the name of Allah, the Most Gracious, the Most Merciful</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">Allahumma salli ala Muhammad</p>
                      <p className="text-xs text-orange-700/80">O Allah, send blessings upon Muhammad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                    <div>
                      <p className="font-bold text-sm">SubhanAllah wa bihamdihi SubhanAllahil Adhim</p>
                      <p className="text-xs text-orange-700/80">Glory and praise to Allah, Glory to Allah the Most Great</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t-2 border-orange-400/30">
                  <p className="text-xs text-center text-orange-700/70 italic">
                    Remember Me, and I will remember you - Quran 2:152
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Counter Display */}
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="relative flex-shrink-0">
              {isEditing ? (
                <div className="flex items-center gap-2 md:gap-4">
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center bg-transparent text-orange-800 border-2 border-orange-300 rounded-3xl px-4 md:px-6 py-2 md:py-3 w-32 md:w-48 lg:w-64 focus:outline-none focus:border-orange-500 transition-colors"
                    autoFocus
                  />
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={saveEdit}
                      className="p-1.5 md:p-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                    >
                      <Check size={16} className="md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="p-1.5 md:p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X size={16} className="md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-orange-800 text-center leading-none select-none">
                  {count}
                </div>
              )}
            </div>
          </div>

          {/* Main Counter Button */}
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-teal-300/30 to-emerald-300/30 rounded-full blur-xl"></div>
            
            <button
              onClick={increment}
              className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-2 md:inset-3 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ChevronUp size={40} className="md:w-12 md:h-12 text-white" strokeWidth={3} />
              </div>
            </button>

            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={decrement}
                className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronDown size={24} className="md:w-7 md:h-7 text-white" strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-orange-600/70 text-xs md:text-sm">
              SubhanAllah • Alhamdulillah • Allahu Akbar
            </p>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-orange-200/50 p-6 md:p-8 max-w-sm md:max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <RotateCcw size={28} className="md:w-8 md:h-8 text-red-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-2">Reset Counter?</h3>
              <p className="text-sm md:text-base text-orange-700 mb-4 md:mb-6">
                Are you sure you want to reset the counter to 0?
              </p>
              <div className="flex gap-3 md:gap-4 justify-center">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-gray-200 text-gray-700 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={reset}
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-red-500 text-white rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-red-600 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
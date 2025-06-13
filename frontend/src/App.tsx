import React from 'react';

function App(): JSX.Element {
  console.log('🚀 App component mounted');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CRM Le Pillier ✨
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up">
            Application démarrée avec succès !
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto animate-slide-up">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎉 Système opérationnel
            </h2>
            <p className="text-gray-600 mb-6">
              Tailwind CSS : ✅<br/>
              Animations : ✅<br/>
              Google Fonts : ✅
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                console.log('✅ Button clicked - Everything works!');
                alert('🎯 CRM Ready to go!');
              }}
            >
              Tester l'interaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
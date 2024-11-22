import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApiKeyPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();

  const handleSaveApiKey = () => {
    localStorage.setItem('apiKey', apiKey);
    setConfirmationMessage('Je API-sleutel is opgeslagen.');
    setTimeout(() => {
      navigate('/app');
    }, 1000); // Wacht 1 seconde voordat je doorstuurt
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black p-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-4">API-sleutel Invoeren</h2>
        <p className="text-slate-300 mb-4">
          Volg de onderstaande stappen om je API-sleutel te verkrijgen:
        </p>
        <ul className="list-disc list-inside text-slate-300 mb-6">
          <li>Ga naar de API-console.</li>
          <li>Maak een gratis account aan.</li>
          <li>Klik op 'Maak API-sleutel aan' en kopieer de sleutel.</li>
        </ul>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Voer je API-sleutel in"
          className="w-full p-3 rounded-lg mb-4 border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSaveApiKey}
          className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
        >
          API-sleutel Opslaan
        </button>
        {confirmationMessage && (
          <p className="text-green-500 mt-4">{confirmationMessage}</p>
        )}
        <p className="text-slate-300 mt-6 text-sm">
          Je API-sleutel wordt lokaal opgeslagen in je browser en nooit gedeeld met onze servers.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyPage;
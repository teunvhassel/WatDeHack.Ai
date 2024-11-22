import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center space-x-4">
        <Shield className="w-12 h-12 text-cyan-400" />
        <h1 className="text-4xl font-bold text-white">WatDeHack</h1>
      </div>
      <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
        Uw persoonlijke cybersecurity-expert. Upload een screenshot of foto van uw beveiligingsprobleem voor directe analyse en advies.
      </p>
    </header>
  );
};

export default Header;
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface AnalysisResultProps {
  result: string;
}

const AnalysisResult = ({ result }: AnalysisResultProps) => {
  return (
    <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
      <div className="flex items-start space-x-4">
        <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Analyse Resultaat</h3>
          <p className="text-slate-300 leading-relaxed">{result}</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <h4 className="text-emerald-500 font-medium">Aanbevolen Actie</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Verwijder het verdachte bericht direct en deel geen persoonlijke informatie.
              </p>
            </div>
            
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <h4 className="text-blue-500 font-medium">Preventieve Tip</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Controleer altijd de afzender en gebruik twee-factor authenticatie waar mogelijk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
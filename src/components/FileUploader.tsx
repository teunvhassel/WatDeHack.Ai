import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader } from 'lucide-react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  isAnalyzing: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload, isAnalyzing }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
        ${isDragActive ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 hover:border-white/40'}`}
    >
      <input {...getInputProps()} />
      
      <div className="flex flex-col items-center space-y-4">
        {isAnalyzing ? (
          <>
            <Loader className="w-12 h-12 text-cyan-400 animate-spin" />
            <p className="text-white text-lg">Bezig met analyseren...</p>
          </>
        ) : (
          <>
            <Upload className="w-12 h-12 text-cyan-400" />
            <div>
              <p className="text-white text-lg mb-2">
                {isDragActive
                  ? "Laat los om te uploaden"
                  : "Sleep een bestand hierheen of klik om te uploaden"}
              </p>
              <p className="text-slate-400 text-sm">
                Ondersteunde formaten: PNG, JPG, JPEG, GIF
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
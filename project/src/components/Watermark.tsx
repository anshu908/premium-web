import React from 'react';
import { Code } from 'lucide-react';

export default function Watermark() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 text-gray-400 text-sm animate-fade-in">
      <Code className="h-4 w-4" />
      <span>Developed by Ansh</span>
    </div>
  );
}
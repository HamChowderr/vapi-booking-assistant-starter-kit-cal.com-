"use client";

import React, { useState, useEffect } from 'react';
import { Mic, PhoneCall } from 'lucide-react';
import ReactSiriwave, { IReactSiriwaveProps } from 'react-siriwave';
import { motion, AnimatePresence } from 'framer-motion';
import useVapi from '@/hooks/use-vapi'; // Adjust the import path as needed
import Button from "@/components/ui/button"; // Corrected import for default export

// Define CurveStyle type
type CurveStyle = "ios" | "ios9";

interface SiriProps {
  theme: CurveStyle;
}

const Siri: React.FC<SiriProps> = ({ theme }) => {
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const [siriWaveConfig, setSiriWaveConfig] = useState<IReactSiriwaveProps>({
    theme: theme || "ios9",
    ratio: 1,
    speed: 0.2,
    amplitude: 1,
    frequency: 6,
    color: '#fff',
    cover: false,
    width: 300,
    height: 100,
    autostart: true,
    pixelDepth: 1,
    lerpSpeed: 0.1,
  });

  useEffect(() => {
    setSiriWaveConfig(prevConfig => ({
      ...prevConfig,
      amplitude: isSessionActive ? (volumeLevel > 0.01 ? volumeLevel * 7.5 : 0) : 0,
      speed: isSessionActive ? (volumeLevel > 0.5 ? volumeLevel * 10 : 0) : 0,
      frequency: isSessionActive ? (volumeLevel > 0.01 ? volumeLevel * 5 : 0) : (volumeLevel > 0.5 ? volumeLevel * 10 : 0),
    }));
  }, [volumeLevel, isSessionActive]);

  const handleToggleCall = () => {
    toggleCall();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="flex items-center justify-center">
        <motion.button
          key="callButton"
          onClick={handleToggleCall}
          className="p-2 rounded-xl bg-secondary"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: 0 }}
          animate={{ x: isSessionActive ? -40 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: 10, position: 'relative' } as React.CSSProperties} // Cast zIndex here
        >
          <AnimatePresence>
            {!isSessionActive ? (
              <motion.div
                key="micIcon"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Mic size={20} />
              </motion.div>
            ) : (
              <PhoneCall size={20} />
            )}
          </AnimatePresence>
        </motion.button>

        <motion.div
          className="rounded-4xl p-4 overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginLeft: '10px' } as React.CSSProperties} // Cast marginLeft here
        >
          <ReactSiriwave {...siriWaveConfig} />
        </motion.div>
      </div>
    </div>
  );
};

export default Siri;

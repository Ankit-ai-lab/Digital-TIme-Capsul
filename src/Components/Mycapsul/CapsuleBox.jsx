// src/Components/Mycapsul/CapsuleBox.jsx
import React, { useEffect, useState } from 'react';

export default function CapsuleBox({ capsule }) {
  const [remainingTime, setRemainingTime] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const unlockDate = new Date(capsule.unlock_date);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = unlockDate - now;

      if (diff <= 0) {
        setUnlocked(true);
        setRemainingTime('');
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(interval);
  }, [unlockDate]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 max-w-xl mx-auto w-full">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{capsule.title}</h3>

      {!unlocked && (
        <p className="text-sm text-gray-500">Unlocks in: <span className="font-medium">{remainingTime}</span></p>
      )}

      {unlocked && (
        <>
          <p className="text-gray-800 mt-4">{capsule.message}</p>
          {capsule.media_url && (
            <div className="mt-4">
              {capsule.media_url.endsWith('.pdf') ? (
                <a href={capsule.media_url} target="_blank" rel="noreferrer" className="text-blue-600 underline">View PDF</a>
              ) : capsule.media_url.includes('video') ? (
                <video src={capsule.media_url} controls className="w-full mt-2 rounded" />
              ) : (
                <img src={capsule.media_url} alt="Capsule media" className="w-full mt-2 rounded" />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

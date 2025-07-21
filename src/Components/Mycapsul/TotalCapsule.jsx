// src/Components/Mycapsul/TotalCapsule.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../auth/supabaseClient';
import CapsuleBox from './CapsuleBox';
import { useNavigate } from 'react-router-dom';

export default function TotalCapsule() {
  const [capsules, setCapsules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCapsules = async () => {
      const { data, error } = await supabase
        .from('capsules')
        .select('*')
        .order('unlock_date', { ascending: true });

      if (error) {
        console.error('Error fetching capsules:', error);
      } else {
        setCapsules(data);
      }
    };

    fetchCapsules();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        onClick={() => navigate('/mycapsule')}
        className="mb-4 text-blue-600 underline hover:text-blue-800"
      >
        ← Back to My Capsule
      </button>

      <h1 className="text-2xl font-semibold mb-6 text-[#1e4a90]">All Your Capsules</h1>

      {capsules.length === 0 ? (
        <p className="text-gray-500">No capsules found.</p>
      ) : (
        capsules.map((cap) => <CapsuleBox key={cap.id} capsule={cap} />)
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient'; // ✅ corrected path
import Sidebar from './Sidebar';
import CapsuleBox from './Mycapsul/CapsuleBox'; // ✅ make sure this path is also correct


export default function MyCapsule() {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    const fetchCapsules = async () => {
      const { data, error } = await supabase
        .from('capsules')
        .select('*')
        .order('unlock_date', { ascending: true });

      if (error) {
        console.error('Error fetching capsules:', error.message); // ✅ Good to log errors
      } else {
        setCapsules(data);
      }
    };

    fetchCapsules();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-[#1e4a90]">My Capsules</h2>

        {capsules.length === 0 ? (
          <p className="text-gray-500">No capsules found.</p>
        ) : (
          capsules.map((cap) => (
            <CapsuleBox key={cap.id} capsule={cap} />
          ))
        )}
      </div>
    </div>
  );
}

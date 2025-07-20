// src/components/UploadFile.jsx
import React, { useState } from 'react'
import { supabase } from '../auth/supabaseClient'  // adjust path if needed

export default function UploadFile() {
  const [file, setFile] = useState(null)

  const uploadFile = async () => {
    if (!file) return alert("Please select a file")

    const { data, error } = await supabase.storage
      .from('digitaltimecapsul')  // ✅ correct bucket name
      .upload(`uploads/${Date.now()}_${file.name}`, file)

    if (error) {
      alert("Upload error: " + error.message)
    } else {
      const { publicUrl } = supabase
        .storage
        .from('digitaltimecapsul')
        .getPublicUrl(data.path).data

      alert("✅ File uploaded!\nPublic URL: " + publicUrl)
    }
  }

  return (
    <div>
      <h2>Upload File to Supabase</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload File</button>
    </div>
  )
}

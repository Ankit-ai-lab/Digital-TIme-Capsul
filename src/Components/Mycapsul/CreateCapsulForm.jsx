import React, { useState } from "react";
import { Upload } from "lucide-react";
import { supabase } from "../../auth/supabaseClient";

export default function CreateCapsulForm() {
  const [capsule, setCapsule] = useState({
    title: "",
    message: "",
    unlockDate: "",
    media: null,
  });

  const [uploading, setUploading] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCapsule((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedUrl = null;

    // 1. Upload media if exists
    if (capsule.media) {
      setUploading(true);

      const fileExt = capsule.media.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `capsules/${fileName}`;

      const { data, error: uploadError } = await supabase.storage
        .from("digitaltimecapsul") // make sure this is your bucket name
        .upload(filePath, capsule.media);

      if (uploadError) {
        alert("File upload failed: " + uploadError.message);
        setUploading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("digitaltimecapsul")
        .getPublicUrl(filePath);

      uploadedUrl = publicUrlData?.publicUrl;
      setMediaUrl(uploadedUrl);
      setUploading(false);
    }

    // 2. Insert into Supabase DB
    const { error: insertError } = await supabase.from("capsules").insert([
      {
        title: capsule.title,
        message: capsule.message,
        unlock_date: capsule.unlockDate,
        media_url: uploadedUrl,
      },
    ]);

    if (insertError) {
      alert("Capsule save failed: " + insertError.message);
    } else {
      alert("✅ Capsule created successfully!");
      setCapsule({
        title: "",
        message: "",
        unlockDate: "",
        media: null,
      });
      setMediaUrl(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#1e4a90]">
        Create Your Time Capsule
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={capsule.title}
          onChange={handleChange}
          placeholder="Capsule Title"
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <textarea
          name="message"
          value={capsule.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full px-4 py-2 border rounded-md"
          rows={4}
          required
        />

        <input
          type="datetime-local"
          name="unlockDate"
          value={capsule.unlockDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <div className="flex items-center gap-3">
          <label
            htmlFor="mediaUpload"
            className="flex items-center gap-2 text-blue-700 cursor-pointer hover:underline"
          >
            <Upload className="w-5 h-5" />
            Upload Media
          </label>
          <input
            id="mediaUpload"
            name="media"
            type="file"
            accept="image/*,video/*,application/pdf"
            onChange={handleChange}
            className="hidden"
          />
          {capsule.media && (
            <span className="text-sm text-gray-600">{capsule.media.name}</span>
          )}
        </div>

        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}

        {mediaUrl && (
          <p className="text-xs text-green-600">
            Media uploaded:{" "}
            <a href={mediaUrl} target="_blank" rel="noreferrer">
              {mediaUrl}
            </a>
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#1e4a90] text-white py-2 rounded-md hover:bg-[#163c74] transition"
        >
          Create Capsule
        </button>
      </form>
    </div>
  );
}

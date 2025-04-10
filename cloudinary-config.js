const cloudName = "df707yqrc";
const uploadPreset = "ml_default";
async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
    method: "POST",
    body: formData
  });
  const data = await res.json();
  return data.secure_url;
}

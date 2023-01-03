import { Message } from "@mui/icons-material";

export const fileUpload = async (file) => {
  if (!file) throw new Error("No hay ningun archivo a subir");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dtjrunb2k/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    console.log(resp);
    if (!resp.ok) throw new Error("No se pudo subir el archivo");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.log("error", error);
    throw new Error(error, Message);
  }
};

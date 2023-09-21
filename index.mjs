import fetch from "node-fetch";
import { promises as fs } from "fs";

const API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

const headers = {
  Authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
};

async function query(data) {
  const response = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.arrayBuffer();
  return result;
}

async function generateImage(caption) {
  try {
    const imageBytes = await query({
      inputs: caption,
    });
    // Generate a file name with the caption and save the image
    const fileName = `${caption.replace(/\s+/g, "-")}.png`;
    const filePath = "output/" + fileName;
    await fs.writeFile(filePath, Buffer.from(imageBytes));
    console.log(`Image saved to: ${filePath}`);
  } catch (error) {
    console.error(error);
  }
}

generateImage("photo of rocket launching into space");

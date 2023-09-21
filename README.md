# NodeJS example: Stable Diffusion using Hugging Face Inference API

## Installation

To set up and run this example, follow these steps:

1. Clone this repo.

2. Navigate to the project directory.

3. Open `index.mjs` Replace `"Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"` in the code with your Hugging Face API token. You can obtain an API token by signing up on the [Hugging Face website](https://huggingface.co/).

4. Install the required Node.js packages by running the following command:

   ```bash
   npm install
   ```

## How to use?

Open index.mjs and change your image caption

```js
generateImage("photo of rocket launching into space");
```

Open terminal and run

```bash
node index.mjs
```

Once the image is processed, it will return

```
Image saved to: output/photo-of-rocket-launching-into-space.png
```

## Examples

<img src="output/photo-of-rocket-launching-into-space.png" />
<img src="output/astronaut-riding-a-horse.png" />
<img src="output/cyberpunk-city-nightscape.png" />

## Further reading

https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0 <br />
https://huggingface.co/docs/api-inference/index <br />
https://huggingface.co/docs/inference-endpoints/index

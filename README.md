
# AI Image Generator

This is a simple AI Image Generator web app built using Node.js, Express, and the Together API. Users can generate images based on prompts, select a model, and configure parameters such as aspect ratio, width, height, and number of steps.

## Features

- Choose between two AI models: `FLUX.1-schnell-Free` and `FLUX.1.1-pro`
- Input custom prompts to generate images
- Select common aspect ratios (1:1, 3:4, 9:16, landscape, portrait)
- Customize width, height, and number of generation steps
- Responsive design for viewing generated images

## Requirements

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14+)
- [npm](https://www.npmjs.com/) (v6+)
- Together.ai API key

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ai-image-generator.git
   cd ai-image-generator
   ```

2. **Install dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Set up the environment:**

   Create a `.env` file in the root directory and add your Together API key:

   ```bash
   TOGETHER_API_KEY=your_api_key_here
   ```

## Usage

1. **Start the server:**

   Run the following command to start the server:

   ```bash
   node app.js
   ```

2. **Open the app:**

   Once the server is running, open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. **Generate images:**

   - Enter an image prompt
   - Select a model (`FLUX.1-schnell-Free` or `FLUX.1.1-pro`)
   - Set the width, height, and number of steps
   - Optionally, choose from common aspect ratios for predefined dimensions
   - Click `Generate Image` to generate an AI-generated image

4. **View the generated image:**

   The generated image will be displayed on the page after processing.

## File Structure

```bash
ai-image-generator/
│
├── app.js               # Main application entry point
├── package.json         # Project metadata and dependencies
├── public/              # Static files (optional, not used here)
├── views/
│   └── index.ejs        # Main EJS template for the frontend
└── .env                 # API key environment variable
```

## Customization

You can customize the app further by adjusting the following:

- **Aspect Ratios**: Modify the `setAspectRatio` function in the `index.ejs` file to add more predefined ratios.
- **Steps**: You can adjust the default number of steps based on the model by modifying the `updateSteps` function.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built using the [Together AI](https://together.ai/) API
- UI styled with basic CSS for simplicity

import Together from 'together-ai';

// Initialize Together instance with API key
const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

(async () => {
    try {
        // Create an image using the FLUX.1-schnell-Free model
        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",  // Model to use
            prompt: "Two cute spiders in victorian outfits having a miniature tea party with a tiny table and teapot on a leaf, macro photo",
            width: 1024,  // Set the width of the image
            height: 768,  // Set the height of the image
            steps: 4,     // Number of steps to generate the image
            n: 1,         // Number of images to generate
            response_format: "b64_json"  // Image format as base64 JSON
        });

        // Log the response (base64 encoded image data)
        console.log(response.data[0].b64_json);
    } catch (error) {
        console.error("Error generating image:", error);
    }
})();

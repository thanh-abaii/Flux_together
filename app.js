import express from 'express';
import bodyParser from 'body-parser';
import Together from 'together-ai';

const app = express();
const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
    res.render('index', { image: null });
});

// Handle form submission to generate an image
app.post('/generate', async (req, res) => {
    try {
        const { model, prompt, width, height, steps } = req.body;

        // Generate image with the Together.ai API using the provided parameters
        const response = await together.images.create({
            model: model,           // Use the model selected in the form
            prompt: prompt,         // Image prompt from the form
            width: parseInt(width), // Width from the form
            height: parseInt(height), // Height from the form
            steps: parseInt(steps), // Number of steps from the form
            n: 1,                   // Fixed number of images to 1
            response_format: "b64_json"
        });

        const imageBase64 = response.data[0].b64_json;

        // Render the page with the generated image
        res.render('index', { image: imageBase64 });
    } catch (error) {
        console.error("Error generating image:", error);
        res.render('index', { image: null });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

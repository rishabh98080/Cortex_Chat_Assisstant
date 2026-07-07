const { GoogleGenAI } = require("@google/genai");

class LLMService {

    constructor() {

        this.ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        this.model =
            process.env.MODEL ||
            "gemini-2.5-flash";
    }

    async generateResponse(
        prompt,
        imageBase64 = null,
        mimeType = "image/png"
    ) {

        try {

            const parts = [];

            if (imageBase64) {

                parts.push({
                    inlineData: {
                        mimeType,
                        data: imageBase64
                    }
                });

            }

            parts.push({
                text: prompt
            });

            const response =
                await this.ai.models.generateContent({

                    model: this.model,

                    contents: [
                        {
                            role: "user",
                            parts
                        }
                    ]

                });

            return response.text;

        }
        catch (err) {

            console.error(err);

            throw err;

        }

    }

}

module.exports = new LLMService();
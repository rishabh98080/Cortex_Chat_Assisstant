const express = require("express");
const multer = require("multer");

const router = express.Router();

const excelService = require("../services/excelService");
const promptService = require("../services/promptService");
const llmService = require("../services/llmService");

const upload = multer({
    storage: multer.memoryStorage()
});

router.post(
    "/",
    upload.single("image"),
    async (req, res) => {

        try {

            console.log("========== REQUEST ==========");

            console.log("Body:", req.body);

            console.log("File:", req.file);

            const telemetry =
                excelService.getSampledData(20);;

            const prompt =
                promptService.buildPrompt(
                    req.body.message,
                    telemetry
                );

            const imageBase64 =
                req.file
                    ? req.file.buffer.toString("base64")
                    : null;

            const answer =
                await llmService.generateResponse(
                    prompt,
                    imageBase64,
                    req.file?.mimetype
                );

            res.json({
                success: true,
                answer
            });

        }
        catch (err) {

            console.error(err);

            res.status(500).json({
                success: false,
                message: err.message
            });

        }

    }
);

module.exports = router;
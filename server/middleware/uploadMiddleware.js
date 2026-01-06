import multer from 'multer';


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

// ALLOWED MIME TYPES
const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];


// COMMON FILE FILTER
const fileFilter = (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPG, PNG, JPEG, and WEBP images are allowed."), false);
    }
};


const produceStorage = multer.memoryStorage();
export const uploadProduceImages = multer({
    storage: produceStorage,
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter,
}).fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 }
]);


export const uploadFiles = multer({
    storage: produceStorage,
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter,
}).fields([
    { name: "files", maxCount: 5 }
]);


// 🚧 Middleware wrapper to catch Multer errors cleanly
export const handleUploadErrors = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ error: "File too large. Maximum size is 5 MB per file." });
        }
        return res.status(400).json({ error: `Upload error: ${err.message}` });
    } else if (err) {
        return res.status(400).json({ error: err.message });
    }
    next();
};

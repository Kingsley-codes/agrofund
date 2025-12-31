import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import Produce from "../models/Produce.js";


// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// Helper function to upload a file buffer to Cloudinary
const uploadToCloudinary = (fileBuffer, folder) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    });
};


const deleteFromCloudinary = (publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

export const createProduce = async (req, res) => {
    try {
        const admin = req.admin;

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access. Admin credentials required.'
            });
        }

        const { produceName, title, totalUnit, description, price, category } = req.body;

        if (!produceName || !title || !totalUnit || !description || !price || !category) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingProduce = await Produce.findOne({ title: title });
        if (existingProduce) {
            return res.status(400).json({
                message: "Produce with this title already exists"
            });
        }

        if (!req.files || !req.files.image1 || !req.files.image2 || !req.files.image3) {
            return res.status(400).json({
                error: "All images are required"
            });
        }

        const uploadResult1 = await uploadToCloudinary(
            req.files.image1.buffer,
            "AgroFund Hub/produce_images"
        );

        const uploadResult2 = await uploadToCloudinary(
            req.files.image2.buffer,
            "AgroFund Hub/produce_images"
        );

        const uploadResult3 = await uploadToCloudinary(
            req.files.image3.buffer,
            "AgroFund Hub/produce_images"
        );

        const newProduce = await Produce.create({
            produceName,
            title,
            totalUnit,
            description,
            price,
            category,
            image1: {
                publicId: uploadResult1.public_id,
                url: uploadResult1.secure_url
            },
            image2: {
                publicId: uploadResult2.public_id,
                url: uploadResult2.secure_url
            },
            image3: {
                publicId: uploadResult3.public_id,
                url: uploadResult3.secure_url
            },
        });

        res.status(201).json({
            message: "Produce created successfully",
            produce: newProduce
        });
    }
    catch (error) {
        console.error("Error creating produce:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


export const deleteProduce = async (req, res) => {
    try {
        const admin = req.admin;
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access. Admin credentials required.'
            });
        }
        const { produceId } = req.params;

        const produce = await Produce.findByIdAndDelete(produceId);
        if (!produce) {
            return res.status(404).json({
                message: "Produce not found"
            });
        }

        await deleteFromCloudinary(produce.image1.publicId);
        await deleteFromCloudinary(produce.image2.publicId);
        await deleteFromCloudinary(produce.image3.publicId);

        await Produce.findByIdAndDelete(produceId);

        res.status(200).json({
            message: "Produce deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting produce:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


export const editProduce = async (req, res) => {
    try {
        const admin = req.admin;
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access. Admin credentials required.'
            });
        }
        const { produceId, produceName, title, totalUnit, description, price, category } = req.body;

        const image1file = req.files?.image1;
        const image2file = req.files?.image2;
        const image3file = req.files?.image3;

        const existingProduce = await Produce.findOne({ title: title });
        if (existingProduce) {
            return res.status(400).json({
                message: "Produce with this title already exists"
            });
        }

        if (!produceId) {
            return res.status(400).json({
                message: "Produce ID is required"
            });
        }

        const updatedProduce = await Produce.findById(produceId);

        if (!updatedProduce) {
            return res.status(404).json({
                message: "Produce not found"
            });
        }

        if (produceName) updatedProduce.produceName = produceName;
        if (title) updatedProduce.title = title;
        if (totalUnit) updatedProduce.totalUnit = totalUnit;
        if (description) updatedProduce.description = description;
        if (price) updatedProduce.price = price;
        if (category) updatedProduce.category = category;

        if (image1file) {
            if (updatedProduce.image1 && updatedProduce.image1.publicId) {
                await deleteFromCloudinary(updatedProduce.image1.publicId);
            }

            const uploadResult1 = await uploadToCloudinary(
                image1file.buffer,
                "AgroFund Hub/produce_images"
            );
            updatedProduce.image1 = {
                publicId: uploadResult1.public_id,
                url: uploadResult1.secure_url
            };
        }

        if (image2file) {

            if (updatedProduce.image2 && updatedProduce.image2.publicId) {
                await deleteFromCloudinary(updatedProduce.image2.publicId);
            }

            const uploadResult2 = await uploadToCloudinary(
                image2file.buffer,
                "AgroFund Hub/produce_images"
            );
            updatedProduce.image2 = {
                publicId: uploadResult2.public_id,
                url: uploadResult2.secure_url
            };
        }

        if (image3file) {
            if (updatedProduce.image3 && updatedProduce.image3.publicId) {
                await deleteFromCloudinary(updatedProduce.image3.publicId);
            }

            const uploadResult3 = await uploadToCloudinary(
                image3file.buffer,
                "AgroFund Hub/produce_images"
            );
            updatedProduce.image3 = {
                publicId: uploadResult3.public_id,
                url: uploadResult3.secure_url
            };
        }

        await updatedProduce.save();

        res.status(200).json({
            message: "Produce updated successfully",
            produce: updatedProduce
        });
    } catch (error) {
        console.error("Error editing produce:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

export const getAllProduce = async (req, res) => {
    try {
        const admin = req.admin;
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access. Admin credentials required.'
            });
        }

        const produceList = await Produce.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            produce: produceList
        });
    } catch (error) {
        console.error("Error fetching produce:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
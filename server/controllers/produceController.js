import Produce from "../models/ProduceModel.js";


export const getAllProduce = async (req, res) => {
    try {

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

export const fetchSingleProduce = async (req, res) => {
    try {
        const { produceId } = req.params;
        const produceItem = await Produce.findById(produceId);

        if (!produceItem) {
            return res.status(404).json({
                message: "Produce item not found"
            });
        }
        res.status(200).json({
            produce: produceItem
        });
    } catch (error) {
        console.error("Error fetching single produce item:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
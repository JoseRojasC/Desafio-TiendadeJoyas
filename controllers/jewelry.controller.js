import { getJewels, filterJewels } from "../models/jewelry.model.js";

export const listJewels = async (req, res) => {
    try {
        const { limits = 5, page = 1, order_by = "id_ASC" } = req.query;
        const results = await getJewels({ limits, page, order_by });

        res.json({
            total: results.length,
            results,
            next: `/joyas?limits=${limits}&page=${+page + 1}&order_by=${order_by}`,
            previous: page > 1 ? `/joyas?limits=${limits}&page=${+page - 1}&order_by=${order_by}` : null,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const filterJewelry = async (req, res) => {
    try {
        const results = await filterJewels(req.query);
        res.json({ total: results.length, results });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

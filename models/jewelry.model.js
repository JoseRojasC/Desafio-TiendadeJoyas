import format from "pg-format";
import { pool } from "../database/connection.js";

export const getJewels = async ({ limits = 5, page = 1, order_by = "id_ASC" }) => {
    const offset = (page - 1) * limits;
    const [field, direction] = order_by.split("_");

    const query = format(
        "SELECT * FROM inventario ORDER BY %I %s LIMIT %s OFFSET %s",
        field, direction, limits, offset
    );

    const { rows } = await pool.query(query);
    return rows;
};

export const filterJewels = async ({ precio_max, precio_min, categoria, metal }) => {
    const filters = [];
    const values = [];

    if (precio_max) {
        filters.push(`precio <= $${filters.length + 1}`);
        values.push(precio_max);
    }
    if (precio_min) {
        filters.push(`precio >= $${filters.length + 1}`);
        values.push(precio_min);
    }
    if (categoria) {
        filters.push(`categoria = $${filters.length + 1}`);
        values.push(categoria);
    }
    if (metal) {
        filters.push(`metal = $${filters.length + 1}`);
        values.push(metal);
    }

    const query = `SELECT * FROM inventario WHERE ${filters.join(" AND ")}`;
    const { rows } = await pool.query(query, values);

    return rows;
};

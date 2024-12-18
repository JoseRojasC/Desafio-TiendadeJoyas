export const logger = (req, res, next) => {
    console.log(`Route Accessed: ${req.method} ${req.originalUrl}`);
    next();
};

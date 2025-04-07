import { checkSchema, validationResult } from "express-validator";

const platforms_Schema = {
    description: {
        in: 'body',
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'Description must be a string'
        },
        notEmpty: {
            errorMessage: 'Description is required'
        },
    }
};

export const platform_middleware = [
    checkSchema(platforms_Schema),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
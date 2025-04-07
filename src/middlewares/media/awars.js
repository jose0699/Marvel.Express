import { checkSchema, validationResult } from "express-validator";

const awards_schema = {

    awards_name: {
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The award name must be a text string',
        },
        notEmpty: {
            errorMessage: 'The award name cannot be empty',
        },
        isLength: {
            options: { min: 3, max: 128 },
            errorMessage: 'Award name must be between 3 and 128 characters.',
        },
    },
    awards_description: {
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The award description must be a text string',
        },
        notEmpty: {
            errorMessage: 'The award description cannot be empty',
        },
    },
    fk_video_games_awars:{
        in:['body'],
        trim: true,
        escape: true,
        isNumeric: {
            errorMessage: 'The fk_video_games_awars must be a number',
        },
        notEmpty: {
            errorMessage: 'The fk_video_games_awars cannot be empty',
        },
    }
};

export const awards_middleware = [
    checkSchema(awards_schema),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
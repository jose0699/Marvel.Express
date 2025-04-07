import {checkSchema, validationResult} from 'express-validator';

const video_game_schema = {
    category:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The category must be a text string',
        },
        notEmpty: {            
            errorMessage: 'The category cannot be empty',
        },
        isLength: {
            options: { min: 3, max: 128 },
            errorMessage: 'Category must be between 3 and 128 characters.',
        },
    }, 
    publisher:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The publisher must be a text string',
        },
        notEmpty: {
            errorMessage: 'The publisher cannot be empty',
        },
        isLength: {
            options: { min: 3, max: 256 },
            errorMessage: 'Publisher must be between 3 and 256 characters.',
        },
    }
}

export const video_game_middleware = [
    checkSchema(video_game_schema),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
import { checkSchema, validationResult } from 'express-validator';
import { format } from 'sequelize/lib/utils';

const user_schame = {
    users_name:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The username must be a text string',
        },
        notEmpty: {            
            errorMessage: 'The username cannot be empty',
        },
        isLength: {
            options: { min: 3, max: 16 },
            errorMessage: 'Username must be between 3 and 16 characters.',
        },
    }, 
    email:{
        in: ['body'],
        trim: true,
        escape: true,
        isEmail: {
            errorMessage: 'The email is not valid',
        },
        notEmpty: {
            errorMessage: 'The email cannot be empty',
        },
        isLength: {
            options: { min: 5, max: 256 },
            errorMessage: 'Email must be between 5 and 256 characters.',
        },
    },
    password:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The password must be a text string',
        },
        notEmpty: {
            errorMessage: 'The password cannot be empty',
        },
        isLength: {
            options: { min: 8, max: 256 },
            errorMessage: 'The password must be between 8 and 256 characters.',
        },
    },
    first_name:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The name must be a text string',
        },
        notEmpty: {
            errorMessage: 'The name cannot be empty',
        },
        isLength: {
            options: { min: 3, max: 128 },
            errorMessage: 'The name must be between 3 and 128 characters',
        },
    },
    last_name:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The last name must be a text string',
        },
        notEmpty: {
            errorMessage: 'The last name cannot be empty',
        },
        isLength: {
            options: { min: 3, max: 128 },
            errorMessage: 'The last name must be between 3 and 128 characters long.',
        },
    }, 
    birthdate:{
        in: ['body'],
        trim: true,
        escape: true,
        isDate: {
            format: 'YYYY-MM-DD',
            errorMessage: 'The date of birth is not valid',
        },
        notEmpty: {
            errorMessage: 'The date of birth cannot be empty',
        },
    }, 
    gender:{
        in: ['body'],
        trim: true,
        escape: true,
        isString: {
            errorMessage: 'The gender must be a text string',
        },
        isIn:{ 
            options: [['M', 'F']],
            errorMessage:'The gender value must be "Male" or "Female"'
        },
    }, 
    countries_user:{
        in: ['body'],
        trim: true,
        escape: true,
        isNumeric: {
            errorMessage: 'The country must be a number',
        },
        notEmpty: {
            errorMessage: 'The country cannot be empty',
        },
    }
}

export const verify_user_schema= [
    checkSchema(user_schame),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
]
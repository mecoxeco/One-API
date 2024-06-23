import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
    constructor(validationErrors: string[]) {
        super({
            message: 'Erro de validação',
            errors: validationErrors,
        }, HttpStatus.BAD_REQUEST);
    }
}

export const validationPipe = new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(error => Object.values(error.constraints));
        throw new ValidationException(messages);
    },
});

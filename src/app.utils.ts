import { HttpStatus, ValidationPipe } from "@nestjs/common";


const PASSWORD_RULE=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const VALIDATE_PIPE= new ValidationPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})
export const REGEX={

    PASSWORD_RULE
}

export const validations={
    VALIDATE_PIPE
}
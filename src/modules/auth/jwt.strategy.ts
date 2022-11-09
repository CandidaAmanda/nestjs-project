import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy)
{
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'abcdefg'
        });
    }

    async validate(payload)
    {
        console.log(payload)
           return {
            id: payload.sub,
            name: payload.name
           }
    }

}
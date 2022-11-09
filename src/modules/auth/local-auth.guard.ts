
import { Injectable } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){


    handleRequest(err, user, info, context, status) { 
        const request = context.switchToHttp().getRequest();
        //console.log(request)
        console.log(request.body);
        //console.log({ err, user, info, context, status}); 
        return super.handleRequest(err, user, info, context, status); }
    
}



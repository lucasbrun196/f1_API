import ErrorResponse from "../../../../responses/error";
import { Password } from "../../../../utils/hash_password/hash_password";
import { IPassword } from "../../../../utils/hash_password/i_hash_password";
import { UserCredentialsJson } from "../entities/params/user_credentials_params";
import { IAuthUserRepository } from "../repository/i_auth_user_repository";
import { IAuthUserService } from "./i_auth_user_service";
import jwt  from 'jsonwebtoken';

export class AuthUserService implements IAuthUserService{

    private readonly repository;

    constructor(repository: IAuthUserRepository){
        this.repository = repository;
    }
    async call(params: UserCredentialsJson): Promise<string> {
        const userToken = await this.repository.call(params);
        const password: IPassword = new Password(params.password!, userToken.password);
        return await password.verifyPassword().then((valid) => {
            if(valid){
                return jwt.sign(
                    {
                        data: {
                            admin: userToken.admin
                        },  
                        sub: userToken.id,
                        iat: Math.floor(Date.now() / 1000)
                    },
                    String(process.env.SECRET_KEY),
                    {
                        expiresIn: '2d',
                    }
                )
            }
            throw new ErrorResponse(403, 'Invalid credentials');
        });
        
    }
}
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    // Método para determinar si la solicitud puede ser procesada
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest(); // Obtiene la solicitud HTTP
        const token = this.extractTokenFromHeader(request); // Extrae el token de autorización de la cabecera
        if (!token) {
            throw new UnauthorizedException('Token de acceso no proporcionado'); // Lanza una excepción si el token no está presente
        }
        try {
            const payload = await this.jwtService.verifyAsync( // Verifica el token y obtiene el payload
                token,
                {
                    secret: jwtConstants.secret
                }
            );
            request.user = payload; // Agrega el payload a la solicitud para su posterior uso
            return true; // Retorna verdadero si la autenticación fue exitosa
        } catch (error) {
            throw new UnauthorizedException('Token de acceso inválido'); // Lanza una excepción si el token es inválido
        }
    }

    // Método para extraer el token de autorización de la cabecera de la solicitud
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []; // Divide la cabecera de autorización en tipo y token
        return type === 'Bearer' ? token : undefined; // Retorna el token si el tipo es 'Bearer', de lo contrario, retorna indefinido
    }
}
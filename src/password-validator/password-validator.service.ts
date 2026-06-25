import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordValidatorService {
  validarPassword(password: string): boolean {
    if (password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!@#$%]/.test(password)) return false;
    return true;
  }
}

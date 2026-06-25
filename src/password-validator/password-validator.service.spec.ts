import { PasswordValidatorService } from './password-validator.service';

describe('PasswordValidatorService', () => {
  let service: PasswordValidatorService;

  beforeEach(() => {
    service = new PasswordValidatorService();
  });

  it('deberia retornar true para una contraseña valida', () => {
    expect(service.validarPassword('Segura1!')).toBe(true);
  });

  it('deberia retornar false si tiene menos de 8 caracteres', () => {
    expect(service.validarPassword('Cor1!')).toBe(false);
  });

  it('deberia retornar false si no tiene letra mayuscula', () => {
    expect(service.validarPassword('segura1!')).toBe(false);
  });

  it('deberia retornar false si no tiene numero', () => {
    expect(service.validarPassword('Segura!!')).toBe(false);
  });

  it('deberia retornar false si no tiene caracter especial', () => {
    expect(service.validarPassword('Segura12')).toBe(false);
  });
});

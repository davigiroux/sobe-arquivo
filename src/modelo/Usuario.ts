class Usuario {
  private _nome: string;
  private _email: string;
  private _senha: string;

  public constructor(nome: string, email: string, senha?: string) {
    this._nome = nome;
    this._email = email;
    this._senha = senha ?? "";
  }

  public get nome() {
    return this._nome;
  }

  public get email() {
    return this._email;
  }

  public get senha() {
    return this._senha;
  }
}

export default Usuario;

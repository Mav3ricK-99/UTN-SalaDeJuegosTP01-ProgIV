export class Usuario {

    private id: string;
    private email: string;
    private nombreUsuario: string;

    private ultimoLogin: number;
    private fechaRegistro: number;

    constructor(id?: string, email?: string, nombreUsuario?: string) {
        this.id = id ?? '';
        this.email = email ?? '';
        this.nombreUsuario = nombreUsuario ?? '';
    }

    public setId(id: string) {
        this.id = id;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setUltimoLogin(unix: number) {
        this.ultimoLogin = unix;
    }

    public setFechaRegistro(unix: number) {
        this.fechaRegistro = unix;
    }

    public setNombreUsuario(nombreUsuario: string) {
        this.nombreUsuario = nombreUsuario;
    }

    public getId(): string {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getNombreUsuario(): string {
        return this.nombreUsuario;
    }
}

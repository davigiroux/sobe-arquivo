import { Auth } from "../firebase/auth";
import Usuario from "../modelo/Usuario";
import store from "../store/index";

class Autenticador {
  public async criarUsuario(usuario: Usuario): Promise<void> {
    return Auth.createUserWithEmailAndPassword(
      usuario.email,
      usuario.senha
    ).then(credenciaisDoUsuario => {
      if (credenciaisDoUsuario.user == null) return;

      credenciaisDoUsuario.user
        .updateProfile({
          displayName: usuario.nome
        })
        .then(() => store.commit("logarUsuario", usuario));
    });
  }

  public async autenticarUsuario(usuario: Usuario) {
    await Auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
  }

  public inicializarAutenticacao() {
    Auth.onAuthStateChanged(credenciaisDoUsuario => {
      if (credenciaisDoUsuario !== null) {
        const usuario = new Usuario(
          credenciaisDoUsuario.displayName ?? "",
          credenciaisDoUsuario.email ?? ""
        );
        store.commit("logarUsuario", usuario);
      } else {
        store.commit("logarUsuario", null);
      }
    });
  }

  public async deslogar() {
    await Auth.signOut()
      .then(() => console.log("Usuário deslogado com sucesso"))
      .catch(() => console.error("Erro ao deslogar usuário"));
  }
}

export default Autenticador;

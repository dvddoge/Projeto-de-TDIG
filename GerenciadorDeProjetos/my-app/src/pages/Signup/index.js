import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");  // novo state para o papel (professor/aluno)
  const [area, setArea] = useState("");  // novo state para a área de atuação (se professor)
  const [formacao, setFormacao] = useState("");  // novo state para a formação (se professor)
  const navigate = useNavigate();
  

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha | !role) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
  
    const res = signup(email, senha, role);
  
    if (res) {
      setError(res);
      return;
    }
  
    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };
  

  return (
    <C.Container>
      <C.Label>REGISTRE-SE</C.Label>
      <C.Content>
        <C.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Selecione o seu papel</option>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
        </C.Select>



        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        {role === 'professor' && (
          <>
            <Input
              type="text"
              placeholder="Digite sua área de atuação"
              value={area}
              onChange={(e) => [setArea(e.target.value), setError("")]}
            />
            <Input
              type="text"
              placeholder="Digite sua formação"
              value={formacao}
              onChange={(e) => [setFormacao(e.target.value), setError("")]}
            />
          </>
        )}

        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />

        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
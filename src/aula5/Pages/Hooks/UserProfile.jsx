import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useAuth } from "./useAuth";

const UserProfile = () => {
    const [signinEmail, setSigninEmail] = useState("ricardo.glodzinski@dataprev.gov.br");
    const [signinPassword, setSigninPassword] = useState("1234");
    const auth = useAuth();
    const { user, isLoggedIn, signin, signout } = auth;
    return (
        <div>
            {isLoggedIn &&
                <fieldset>
                    <label>Dados do Usuário Autenticado</label>
                    <p>Nome: {user.nome}</p>
                    <p>E-mail: {user.email}</p>
                    <br />
                    <Button secondary onClick={signout}>Sair</Button>
                </fieldset>
            }
            {!isLoggedIn &&
                <Grid direction="column" container>
                    <Grid item>
                        <TextField label="E-mail" value={signinEmail} name="signinEmail" onChange={e => setSigninEmail(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField type="password" label="Senha" value={signinPassword} name="signinPassword" onChange={e => setSigninPassword(e.target.value)} />
                    </Grid>
                    <Grid item sm={6}>
                        <Button primary onClick={() => signin(signinEmail, signinPassword)}>Entrar</Button>
                    </Grid>
                </Grid>
            }
        </div>
    );
};

export default UserProfile;

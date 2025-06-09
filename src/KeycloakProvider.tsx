import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import keycloak, { initKeycloak } from "./keycloak";

interface AuthContextProps {
    preferredName: string | null;
    authenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const KeycloakAuthProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [preferredName, setPreferredName] = useState<string | null>(null);

    useEffect(() => {
        initKeycloak()
            .then((auth) => {
                setAuthenticated(!!auth);
                if (auth && keycloak.tokenParsed?.preferred_username) {
                    setPreferredName(keycloak.tokenParsed.preferred_username);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                preferredName,
                authenticated,
                login: () => keycloak.login(),
                logout: () => keycloak.logout(),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within KeycloakAuthProvider");
    }
    return context;
};

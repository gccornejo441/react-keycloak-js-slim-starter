import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

// Global flag
let isKeycloakInitialized = false;

export const initKeycloak = async () => {
  if (!isKeycloakInitialized) {
    try {
      const authenticated = await keycloak.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
      });
      isKeycloakInitialized = true;
      return authenticated;
    } catch (err) {
      console.error("Keycloak init failed", err);
      throw err;
    }
  } else {
    console.warn("Keycloak was already initialized.");
    return keycloak.authenticated;
  }
};

export default keycloak;

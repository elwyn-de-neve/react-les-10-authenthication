import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  // Stap 1: Maak een state object aan voor de authenticatie
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  // Stap 2: Pas de verwijzingen naar de state aan (ook bij je logout functie)
  // Stap 5: Token ontvangen en decoderen
  // Stap 6: Token opslaan in de local storage
  // Stap 7: Gebruiker ophalen met de token
  // Stap 8: Zet gebruikers info in de state (NIET DE JWT TOKEN)
  // ---------------------------------------------
  // Stap 9: Gebruik useEffect om te checken of er een token in de localstorage zit
  // Stap 10: Als er een token in de localstorage zit, check dan of deze nog geldig is (checkTokenValidity)
  // Stap 11: Als de token nog geldig is, log de gebruiker in
  // Stap 12: Als de token niet meer geldig is, log de gebruiker uit
  // Stap 15: Haal de user data op uit de database en sla deze op in de state
  // Stap 16: Geef een redirect mee (optioneel)

  const login = () => {
    setIsAuth(true);
    console.log("De gebruiker is ingelogd 🔓");
    navigate("/profile");
  };

  const logout = () => {
    setIsAuth(false);
    console.log("De gebruiker is uitgelogd 🔒");
  };

  const data = {
    isAuth,
    logout,
    login,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
import styled, { ThemeProvider } from "styled-components";
import { MyRoutes } from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import React, { useState } from "react";
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const ThemeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={ThemeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
  &.active {
    grid-template-columns: 300px auto;
  }
`;

export default App;

import styled from "styled-components";
import LogoYM from "../assets/ym.svg";
import LogoYMW from "../assets/ym white.svg";
import { v } from "../styles//Variables";
import { FaAngleLeft, FaHome, FaChartLine, FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = useContext(ThemeContext);

  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="sidebarButton" onClick={ModSidebarOpen}>
        <FaAngleLeft />
      </button>
      <div className="LogoContent">
        <div className="ImgContent">
          {theme === "light" ? <img src={LogoYM} /> : <img src={LogoYMW} />}
        </div>
        <h2>YiMonk</h2>
      </div>

      {LinksArrays.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="LinkIcon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}

      <Divider />

      <div className="Themecontent">
        {sidebarOpen && (
          <span className="Tittletheme">
            {theme === "light" ? "Dark mode" : "Light mode"}
          </span>
        )}
        <div className="ToggleContent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch">
                  <input
                    type="checkbox"
                    className="themeSwitcher"
                    onClick={CambiarTheme}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

//#region Data Links

const LinksArrays = [
  {
    label: "Home",
    icon: <FaHome />,
    to: "/",
  },
  {
    label: "Stats",
    icon: <FaChartLine />,
    to: "/stats",
  },
  {
    label: "Products",
    icon: <FaCode />,
    to: "/products",
  },
];

//#endregion

//#region Styled Components
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;

  .sidebarButton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .LogoContent {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: ${v.lgSpacing};

    .ImgContent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }

  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    &:hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      height: 50px;
      .LinkIcon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }
      &.active {
        color: ${(props) => props.theme.bg4};
        .LinkIcon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .Tittletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
    }
    .ToggleContent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          width: 100vw;
          height: 100vh;
          font-family: "lato", sans-serif;
        }
        .demo {
          font-size: 40px;

          .switch {
            position: relative;
            display: inline-block;
            height: 34px;
            width: 60px;
            .themeSwitcher {
              opacity: 0;
              height: 0;
              width: 0;
              &:checked + .slider:before {
                left: -10px;
                content: "☀️";
                transform: translateX(-10px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
                themeUse === "light" ? v.lightcheckbox : v.darkcheckbox};
              transition: 0.4s;
              &::before {
                position: absolute;
                content: "🌙";
                height: 0;
                width: 0;
                top: 16px;
                left: 15px;
                line-height: 0;
                transition: 0.4s;
              }
              &.round {
                border-radius: 40px;
                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
//#endregion

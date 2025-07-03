import React from "react";
import {
  Hamburger,
  Text,
  Link,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Button,
} from "@fluentui/react-components";
import { Apps20Regular, BrainCircuit20Regular, Building20Regular, Home20Regular, SlideTextPerson20Regular } from "@fluentui/react-icons";

export const NavbarTop = ({ onMenuClick }) => {
  return (
    <header className="bg-[#0078D4] text-white shadow-md relative">
      {/* Hamburguesa a la izquierda */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-50">
        <Hamburger style={{ color: "white" }} onClick={onMenuClick} />
      </div>

      <nav className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center pl-10 space-x-4">
          <Text size={400} weight="semibold">
            {"<Portfolio Web />"}
          </Text>
        </div>
        <div className="hidden md:flex gap-4">
          <Button
            appearance="secondary"
            size="medium"
            icon={<BrainCircuit20Regular />}
            style={{ color: "#000000" }}
          >
            Habilidades
          </Button>
          <Button
            appearance="secondary"
            size="medium"
            icon={<Building20Regular />}
            style={{ color: "#000000" }}
          >
            Experiencia
          </Button>
          <Button
            appearance="secondary"
            size="medium"
            icon={<Apps20Regular />}
            style={{ color: "#000000" }}
          >
            Proyectos
          </Button>
          <Button
            appearance="secondary"
            size="medium"
            icon={<SlideTextPerson20Regular />}
            style={{ color: "#000000" }}
          >
            Acerca de mí
          </Button>
        </div>
        <div className="flex items-center space-x-3">
          <Text size={400} weight="semibold" className="hidden sm:inline">
            Javier
          </Text>
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
            <img
              src="./fotoPerfil.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

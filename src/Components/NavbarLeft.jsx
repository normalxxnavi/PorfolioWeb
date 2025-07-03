import React, { useEffect, useState } from "react";
import {
  Hamburger,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSectionHeader,
} from "@fluentui/react-components";
import {
  Home20Regular,
  DocumentOnePageSparkle20Regular,
  SlideTextPerson20Regular,
  BrainCircuit20Regular,
  Building20Regular,
  Mail20Regular,
  Apps20Regular,
} from "@fluentui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const NavbarLeft = ({ isOpen, setIsOpen }) => {
  const [drawerType, setDrawerType] = useState("inline");

  // Actualiza el tipo según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setDrawerType(window.innerWidth >= 1024 ? "inline" : "overlay");
    };

    handleResize(); // Inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavDrawer
      open={isOpen}
      type={drawerType}
      onOpenChange={() => setIsOpen(false)}
      multiple={true}
      defaultSelectedValue="1"
      className="bg-white shadow-md w-64 z-40"
    >
      {window.innerWidth <= 1024 &&
        <NavDrawerHeader>
          <Hamburger onClick={() => setIsOpen(false)} />
        </NavDrawerHeader>
      }

      <NavDrawerBody>
        <NavItem icon={<Home20Regular />} value="1">
          Inicio
        </NavItem>
        <NavItem icon={<DocumentOnePageSparkle20Regular />} value="2">
          CV
        </NavItem>
        <NavDivider />
        <NavSectionHeader>Sobre mí</NavSectionHeader>
        <NavItem icon={<BrainCircuit20Regular />} value="3">
          Habilidades
        </NavItem>
        <NavItem icon={<Building20Regular />} value="4">
          Experiencia
        </NavItem>
        <NavItem icon={<Apps20Regular />} value="5">
          Proyectos
        </NavItem>
        <NavItem icon={<SlideTextPerson20Regular />} value="6">
          Acerca de mí
        </NavItem>
        <NavDivider />
        <NavSectionHeader>Contacto</NavSectionHeader>
        <NavItem
          icon={<Mail20Regular />}
          value="7"
          as="a"
          href="mailto:javier@example.com"
        >
          Correo
        </NavItem>
        <NavItem
          icon={<FontAwesomeIcon icon={faLinkedin} />}
          value="8"
          as="a"
          href="https://linkedin.com/in/javierlopez"
          target="_blank"
        >
          LinkedIn
        </NavItem>
        <NavItem
          icon={<FontAwesomeIcon icon={faGithub} />}
          value="9"
          as="a"
          href="https://github.com/javiSiscom"
          target="_blank"
        >
          GitHub
        </NavItem>
      </NavDrawerBody>
    </NavDrawer>
  );
};

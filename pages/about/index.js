import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Navbar, Link, Text, Avatar,  Dropdown, Grid} from "@nextui-org/react";
import { icons } from "../../components/Icons";
import Info from '../../components/Collapse';


const AboutPage = () => {
    const collapseItems = [
        "Mi perfil",
        "Sobre mi",
        "Educacion",
        "Actividades Favoritas",
        "Habilidades",
        "Mi futuro",
        "Cerrar"
      ];
    
    return ( 
        
    <>
    <div className="about">
        
        
        <Navbar  variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
            css={{
            "@xs": {
                w: "12%",
            },
            }}
        >
            <Text b color="#0072f5" hideIn="xs">
            ACME
            </Text>
        </Navbar.Brand>
        <Navbar.Content
            enableCursorHighlight
            activeColor="primary"
            hideIn="xs"
            variant="highlight"
        >
            <Navbar.Link isActive href="./" color="#0072f5">Inicio</Navbar.Link>
            <Dropdown >
            <Navbar.Item>
                <Dropdown.Button
                auto
                light
                css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                    color: "#0072f5"
                }}
                iconRight={icons.chevron}
                ripple={false}
                >
                Sobre Mí
                </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
                aria-label="ACME features"
                css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                    color: "$primary",
                    mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                    },
                },
                }}
            >
                <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="Bueno... A jugar."
                icon={icons.scale}
                >
                
                <Link href='/actividades/.'>Actividades Favoritas</Link> 
                </Dropdown.Item>
                <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="¿Estudio mucho o poco?¿A qué escuela voy?"
                icon={icons.activity}
                >
                <Link href='/educacion/.'>Educación</Link>
                </Dropdown.Item>
                <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="Qué será de mi vida."
                icon={icons.flash}
                >
                <Link href='/futuro/.'>Mi futuro</Link>
                </Dropdown.Item>
                <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Mi CV."
                icon={icons.server}
                >
                <Link href='/cv/.'>Curriculum</Link>
                </Dropdown.Item>
                <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="¿Quién soy?¿Qué hay de mí?"
                icon={icons.user}
                >
                <Link href='/about/.'>Sobre Mí</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Navbar.Content>
        <Navbar.Content
            css={{
            "@xs": {
                w: "12%",
                jc: "flex-end",
            },
            }}
        >
            <Dropdown placement="bottom-right">
            <Navbar.Item>
                <Dropdown.Trigger>
                <Avatar
                    bordered
                    as="button"
                    color="primary"
                    size="md"
                    src="https://lh3.googleusercontent.com/a/AGNmyxbWv4Ut_iJs0rsx45BQy9EXjgdqHYetsb--xM6ofg=s288"
                />
                </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
                aria-label="User menu actions"
                color="primary"
                onAction={(actionKey) => console.log({ actionKey })}
            >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                    Comunicate vía mail
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                    julianmurno@iresm.edu.ar
                </Text>
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                Salir
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
            {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
                key={item}
                activeColor="primary"
                css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
                }}
                isActive={index === 0}
            >
                <Link
                color="inherit"
                css={{
                    minWidth: "100%",
                }}
                href="#"
                >
                {item}
                </Link>
            </Navbar.CollapseItem>
            ))}
        </Navbar.Collapse>
        </Navbar>
        <Info/>
    </div>
  </>
     );
}
 
export default AboutPage;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, Grid, Row, Text, Tooltip, Link } from "@nextui-org/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
    const settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <div>
        <Grid.Container gap={2} alignContent="center">
      <Grid css={{ dflex:"center" }} sm="6">
        <Tooltip
          content={"¡Aguante Boca, Verstappen y la Patagonia!"}
          trigger="click"
          color="success"
        >
          <Link>
            <Text h1>
              Actividades
            </Text>
          </Link>
        </Tooltip>
      </Grid>
      </Grid.Container>
        <Slider {...settings}>
          <div>
            <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={6}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        objectFit="cover"
                        width="100%"
                        height={250}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>PlayStation</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            </Grid.Container>
          </div>
          <div>
          <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={6}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        objectFit="cover"
                        width="100%"
                        height={250}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>Programar</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            </Grid.Container>
          </div>
          <div>
          <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={6}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        objectFit="cover"
                        width="100%"
                        height={250}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>Futbol</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            </Grid.Container>
          </div>
          <div>
          <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={6}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://images.pexels.com/photos/13408595/pexels-photo-13408595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        objectFit="cover"
                        width="100%"
                        height={250}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>Visitar Glaciar Perito Moreno</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            </Grid.Container>
          </div>
          <div>
          <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={6}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        objectFit="cover"
                        width="100%"
                        height={250}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>Aprender inglés</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            </Grid.Container>
          </div>
          <div>
          <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={6}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={"https://upload.wikimedia.org/wikipedia/commons/b/b4/2022_British_Grand_Prix_%2852381405112%29.jpg"}
                        objectFit="cover"
                        width="100%"
                        height={250}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>Ver Formula 1</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
            </Grid.Container>
          </div>
        </Slider>
      </div>
    );
  }
}
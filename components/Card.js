import { Card, Grid, Link, Row, Text } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Actividades favoritas",
      img: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$5.50",
      link: "/actividades/"
    },
    {
      title: "Educación",
      img: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$10.00",
      link: "/educacion/"
    },
    {
      title: "Mi futuro",
      img: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "$5.30",
      link: "/futuro/"
    },
    {
      title: "Curriculum",
      img: "https://portalvirtualempleo.us.es/wp-content/uploads/2016/06/cv_destacada.png",
      price: "$15.70",
      link: "/cv/"
    },

  ];

  return (
    <Grid.Container gap={2} justify="center">
      {list.map((item, index) => (
        <Grid xs={6} sm={5.5} key={index}>
          <Card isHoverable isPressable>
            <Card.Body css={{ p: 0  }}>
              <Card.Image
                src={item.img}
                objectFit="cover"
                width="100%"
                height={250}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b><Link href={item.link}>{item.title}</Link></Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}

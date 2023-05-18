import { Collapse, Grid, Text, Image } from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container gap={2} sm="6">
      <Grid >
        <Collapse.Group shadow >
          <Collapse title="Mi nacimiento" subtitle="Lo que puedes." >
            <Text>
                Naci el 30 de diciembre en el año 2005. A los 3 años, me mudé con mi mamá, mi papá y mi hermano a Córdoba, Tanti. 
                <br/>
                Allí completé la guardería, jardín de infantes y primaria. Gran parte fue en el Instituto San José.
            </Text>
            
            <Text>Luego, empecé la secundaria en Villa Carlos Paz, en el Instituto Remedios Escalada de San Martín.</Text>
          </Collapse>

        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}

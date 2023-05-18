import React from "react";
import { Modal, Input, Row, Grid, Button, Text, Loading } from "@nextui-org/react";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div style={{marginLeft: "43%", marginTop: "30px"}}>
      <Button auto color="gradient" shadow onPress={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{justifyContent:"center"}}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            
            <Text b size={18}>
            Página en construcción
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body className="modal">
        <Loading type="spinner" size="xl"/>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

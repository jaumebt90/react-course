import styled from "styled-components";
import { Formik, Form } from "formik";
import Input from "./components/Input";
import Container from "./components/Container";
import Section from "./components/Section";
import Button from "./components/Button";

function App() {
  const handleSubmit = () => {};
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Deposito inical" />
            <Input name="contribution" label="Contribución anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interés estimado" />
            <Button>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;

import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`;
const Content = styled.div`
  padding: 20px 25px;
`;
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
`;
//Afegint estils a nes ja creats a Button
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;
const Link = () =>
  function App() {
    return (
      <Content>
        <P>Hola soy un parrafo!</P>
        <Button>Enviar</Button>
        <Button primary>Enviar</Button>
        <BlockButton primary as="a" href="#">
          Enviar
        </BlockButton>
      </Content>
    );
  };

export default App;

import styled from 'styled-components';
import {ReactComponent as DigiLogo} from './assets/logo.svg';
import Cards from './Cards';

const Container  = styled.div`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-family: 'Roboto', sans-serif;
  padding: 10%;
`
const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-top: 50px;
`
const Card = styled.div`
  width: 300px;
  height: 200px;
  background: #eeece6;
  font-size: 25px;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
`
function App() {
  return (
    <Container>
          <DigiLogo style={{
            width: "20%",
            height: "20%",
          }}
          />
          <CardWrapper>
            {
              Cards.map((card)=>{
                return (
                  <Card>{card.name}</Card>
                );
              })
            }
          </CardWrapper>
    </Container>
  );
}

export default App;

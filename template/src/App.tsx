import "./styles.css";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <div className="App bg-gray-100">
      <DivWrapper>hello world</DivWrapper>
    </div>
  );
}

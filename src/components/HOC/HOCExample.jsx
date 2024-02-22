import About from "./About";
import Home from "./Home";
import Wrapper from "./Wrapper";
import Wrapper2 from "./Wrapper2";

export default function HOCExample() {
  return (
    <>
      <Wrapper>
        <Home />
      </Wrapper>
      <Wrapper>
        <About />
      </Wrapper>
      <Wrapper2 InnerComponent={Home} />
      <Wrapper2 InnerComponent={About} />
    </>
  );
}

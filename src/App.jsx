import { Footer } from "./components/Footer";
import { JoinUsBlock } from "./components/JoinUsBlock";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Steps } from "./components/Steps";
import { Features } from "./components/Features";
import { Faq } from "./components/FAQ";

export const App = () => {
  return (
    <div>
      <Header />
      <JoinUsBlock />
      <Form />
      <Features />
      <Steps />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;

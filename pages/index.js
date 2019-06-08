import Cover from "../components/cover";
import Continents from "../components/continents";
import Biometrics from "../components/biometrics";
import Advantages from "../components/advantages";
import Tours from "../components/tours";
import Services from "../components/services";

const Home = () => {
  return (
    <div>
      <Cover />
      <Continents />
      <Biometrics />
      <Advantages />
      <Tours />
      <Services />
    </div>
  );
};

export default Home;

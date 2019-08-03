import useTourTrans from "../effects/useTourTrans";
import { TourTransContainer } from "../components/styled";

const Tours = () => {
  useTourTrans();

  return (
    <TourTransContainer>
      <div
        className="ttv-hottours"
        data-catalog-url="http://localhost:3000/toursList"
      />
      <div
        className="ttv-search"
        data-catalog-url="http://localhost:3000/toursList"
      />
    </TourTransContainer>
  );
};

export default Tours;

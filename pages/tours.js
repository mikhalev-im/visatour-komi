import useTourTrans from "../effects/useTourTrans";
import { TourTransContainer } from "../components/styled";

const Tours = () => {
  useTourTrans();

  return (
    <TourTransContainer>
      <div className="ttv-hottours" data-catalog-url="/toursList" />
      <div className="ttv-search" data-catalog-url="/toursList" />
    </TourTransContainer>
  );
};

export default Tours;

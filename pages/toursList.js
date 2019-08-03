import useTourTrans from "../effects/useTourTrans";
import { TourTransContainer } from "../components/styled";

const TourList = () => {
  useTourTrans();

  return (
    <TourTransContainer>
      <div className="ttv-catalog" data-email="info@visatour-komi.ru" />
    </TourTransContainer>
  );
};

export default TourList;

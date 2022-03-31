import "./Main.css";

import BackgroundImage from "../BackgroundImage/Background";
export default function Main() {
  return (
    <div className="main-elements">
      <BackgroundImage />

      <div className="offers">
        <div className="left-part">
          <p>Jeni klient i ri?</p>
          <h2>Kemi nje dhurate per ty</h2>
          <p>
            Baboon ofron 300 Restorante & Sherbim Delivery, kudo 24/7 ne kushte
            te larta sigurie. Dhe per te gjithe klientet e pare, ju dhuron deri
            ne 5000 Leke kupona. Shkarkoni aplikacionin tani, dhe perfitoni
            dhuratat.
          </p>
        </div>
        <div className="right-part">
          <img
            src="https://lh3.googleusercontent.com/RJYWrdJB2M72zpEfZ8MxL5eu8oIlVIAywVyzONqd9CFM_GbDb-vEjIR_EWpfM1w5966lQXyBvPgE0fInxU4etjQc0eaitsTC3-M"
            alt="oferta"
          />
        </div>
      </div>
      <div className="advertising">
        <div className="left-part__advertising"></div>
        <div className="right-part__advertising"></div>
      </div>
    </div>
  );
}

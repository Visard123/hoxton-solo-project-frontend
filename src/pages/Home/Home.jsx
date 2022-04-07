import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Restaurants from "../../components/Restaurants/Restaurant";
export default function Home({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Restaurants />
      <Footer />
    </>
  );
}

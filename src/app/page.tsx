import Navbar from "./components/navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Essentials from "./components/Essential";
import BestAirMax from "./components/Best";
import Shop from "./components/Shop";
import Category from "./components/Category";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
   <div>
     <div><Header /></div>
     <div><Hero /></div>
     <div><BestAirMax /></div>
     <div><Feature /></div>
     <div><Shop /></div>
     <div><Essentials /></div>
     <div><Category /></div>
     <div><Footer /></div>
   
   </div>
   
  );
}

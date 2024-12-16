import Navbar from "./components/navbar";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Essentials from "./components/essential";
import BestAirMax from "./components/best";
import Shop from "./components/shop";
import Category from "./components/category";
import Footer from "./components/footer";

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

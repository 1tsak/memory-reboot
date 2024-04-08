
import Content from "@/components/Content";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="min-h-[100vh] bg-fixed" style={{ 
      backgroundImage: `url("/background.png")` 
    }}>
      <Navbar/>
      <Content/>
    </div>
  );
}

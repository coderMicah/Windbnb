import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stays from "@/components/Stays";
import { StaysContextProvider } from "@/context/StaysContext";

export default function Home() {
  return (
    <StaysContextProvider>
      <Navbar />
      <Hero />
      <Stays />
    </StaysContextProvider>
  );
}

import Footer from "./Footer";
import Headaer from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return (
    <>
      <Headaer />
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

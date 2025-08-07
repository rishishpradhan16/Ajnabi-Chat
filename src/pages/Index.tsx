import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ContentGrid from "@/components/ContentGrid";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <ContentGrid />
        </main>
      </div>
      
      <AudioPlayer title="Lift No. 4" />
    </div>
  );
};

export default Index;

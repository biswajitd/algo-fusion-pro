import Navigation from "@/components/Navigation";
import PlatformsList from "@/components/PlatformsList";

const Platforms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <PlatformsList />
      </main>
    </div>
  );
};

export default Platforms;

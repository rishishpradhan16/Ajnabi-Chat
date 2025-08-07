import ContentCard from "./ContentCard";
import liftImage from "@/assets/lift-no-4.jpg";
import bhootBanglaImage from "@/assets/bhoot-bangla.jpg";
import trainImage from "@/assets/train-to-paatal.jpg";

interface ContentItem {
  id: string;
  title: string;
  image: string;
}

const ContentGrid = () => {
  const content: ContentItem[] = [
    { id: "1", title: "Lift No. 4", image: liftImage },
    { id: "2", title: "Bhoot Bangla", image: bhootBanglaImage },
    { id: "3", title: "Train to Paatal", image: trainImage },
    { id: "4", title: "Bhoot Bangla", image: bhootBanglaImage },
  ];

  const handlePlay = (item: ContentItem) => {
    console.log("Playing:", item.title);
  };

  return (
    <div className="p-6 pb-32">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {content.map((item) => (
          <ContentCard
            key={item.id}
            title={item.title}
            image={item.image}
            onPlay={() => handlePlay(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentGrid;

import "../CSS/Page2.css";
import HightlightsCard from "../Cards/HighlightsCard";
import { highlights } from "../Components/highlights";

export default function Page3() {
  return (
    <>
      <div className="page3">
        {highlights.map((item, index) => (
          <HightlightsCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            commentIcon={item.commentIcon}
            comment={item.comment}
            dateIcon={item.dateIcon}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}

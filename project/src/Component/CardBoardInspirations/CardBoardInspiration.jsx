import CardBoardImgContent from "./CardBoardImgContent";
import DetailViewer from "../detailViewers/DetailViewer";
function CardBoardInspiration() {
  const p =
    "Cardboard packaging is the cornerstone of our packaging solutions. Our mastery in crafting dynamic and adaptable packaging based on this versatile material enables us to deliver solutions that are both functional and innovative.";
  return (
    <>
      <section className="box-inspirations">
        <DetailViewer
          heading={"Cardboards Inspirations"}
          secDisc={p}
          content={<CardBoardImgContent />}
        />
      </section>
    </>
  );
}
export default CardBoardInspiration;

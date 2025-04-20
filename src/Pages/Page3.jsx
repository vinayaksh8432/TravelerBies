import { beach, commentBlack, dateBlack } from "../assets";
import CardColumnA from "../Cards/CardColumnA";
import CardColumnB from "../Cards/CardColumnB";
import { cardcolumnA } from "../Components/cardcolumnA";
import { cardcolumnB } from "../Components/cardcolumnB";
import "../CSS/Page3.css";

export default function Page4() {
  return (
    <>
      <div className="page4">
        <div>
          <h1>Most Popular</h1>
        </div>
        <div className="columnSection">
          <div className="cardColumns">
            {cardcolumnA.map((item, index) => (
              <CardColumnA
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
          <div>
            <div className="beach">
              <img src={beach} alt="" className="beachimg" />
              <div className="beachContent">
                <div>
                  <h1>LifeStyle</h1>
                  <h2>Lorem ipsum is simply dummy Text of the printing</h2>
                  <div className="beachIcons">
                    <ul>
                      <li>
                        <img src={commentBlack} alt="" />2 Comments
                      </li>
                      <li>
                        <img src={dateBlack} alt="" />
                        11 July, 2016
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardColumns">
            {cardcolumnB.map((item, index) => (
              <CardColumnB
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
        </div>
      </div>
    </>
  );
}

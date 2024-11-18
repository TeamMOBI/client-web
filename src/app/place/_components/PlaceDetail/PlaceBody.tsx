import { CardDetail, Figure, Chart, Map } from "@/components";
import { vars } from "@/styles/theme.css";

import { cardContainer, twoColumnContainer } from "./index.css";
import { PlaceDetail } from "@/types/dto";
import Reviews from "./Reivews";

export const PlaceBody = (place: PlaceDetail) => {
  const {
    statusKeyword,
    trafficCommunicationMsg,
    populationDensityMsg,
    timeLine,
    location,
    latitude,
    longitude,
  } = place;

  const [densityMsg, trafficMsg] = populationDensityMsg.split(". ");

  return (
    <div className={cardContainer}>
      <div className={twoColumnContainer}>
        <CardDetail
          title="인구 밀도"
          text={densityMsg}
          rightChild={<Figure text={statusKeyword} />}
        />
        <CardDetail
          title="도로 소통"
          text={trafficMsg}
          rightChild={<Figure text={trafficCommunicationMsg} />}
        />
      </div>
      <CardDetail
        title="실시간 인구 추이"
        content={
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                background: vars.color.gray_06,
              }}
            >
              <Chart timeLine={timeLine} />
            </div>
            <Reviews />
          </div>
        }
      />
      <CardDetail
        title="위치 정보"
        text={location}
        content={
          <div
            style={{
              width: "100%",
              height: 400,
              borderRadius: "0.5rem",
              background: vars.color.gray_05,
            }}
          >
            <Map latitude={latitude} longitude={longitude} />
          </div>
        }
      />
    </div>
  );
};

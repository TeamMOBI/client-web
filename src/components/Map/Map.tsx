"use client";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  NavermapsProvider,
} from "react-naver-maps";

export const Map = ({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) => {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      <MapDiv
        style={{
          height: 400,
        }}
      >
        <NaverMap>
          <Marker
            defaultPosition={{ lat: Number(latitude), lng: Number(longitude) }}
          />
        </NaverMap>
      </MapDiv>
    </NavermapsProvider>
  );
};

import { Bubble } from "@/components";

const Reviews = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Bubble time="22:00" text="여기 사람 개많음" />
      <Bubble time="22:30" text="클럽거리 밤 10시 이후에 가지 마세요" />
      <Bubble time="22:00" text="너무 더러워요" />
    </div>
  );
};
export default Reviews;

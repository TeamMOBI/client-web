import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";

const PlaceVisitModal = () => {
  return (
    <Modal title="방문 리뷰" button={<Button state="active" text="완료" />}>
      <Input label="방문 장소*" icon={false} />
      <div style={{ display: "flex", gap: 20 }}>
        <Input label="방문 날짜*" icon={false} />
        <Input label="방문 시간*" icon={false} />
      </div>
      <Input label="한줄평" icon={false} />
    </Modal>
  );
};

export default PlaceVisitModal;

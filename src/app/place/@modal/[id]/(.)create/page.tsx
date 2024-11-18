"use client";

import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import Calendar from "@/components/Calendar/Calendar";
import { useSearchParams } from "next/navigation";

const PlaceVisitModal = ({ params: { id } }: { params: { id: string } }) => {
  const { register, handleSubmit } = useForm();
  const params = useSearchParams();

  return (
    <Modal
      title={`${params.get("name")}에 언제 방문하시나요?`}
      button={<Button state="active" text="완료" />}
    >
      <div style={{ display: "flex", gap: 20 }}>
        <Calendar />
        <Input label="방문 시간*" icon={false} />
      </div>
    </Modal>
  );
};

export default PlaceVisitModal;

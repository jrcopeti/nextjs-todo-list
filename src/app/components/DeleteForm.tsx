"use client";

import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error " disabled={pending}>
      {pending ? "please wait" : "delete"}
    </button>
  );
};

function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
}

export default DeleteForm;

"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
import {z} from "zod";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait" : "Add Task"}
    </button>
  );
};

interface FormInitialState {
  message: string | null;

}
const initialState: FormInitialState  = {
  message: null,
};

function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if(state.message === "error") {
      toast.error("Error creating task");
    }

    if(state.message === "success") {
      toast.success("Task created successfully");
    }
  }, [state])

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          className="input join-item input-bordered w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
}

export default TaskFormCustom;

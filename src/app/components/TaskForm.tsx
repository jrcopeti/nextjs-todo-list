import { createTask, createTaskCustom } from "@/utils/actions";
import { useFormState } from "react-dom";

function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input join-item input-bordered w-full"
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

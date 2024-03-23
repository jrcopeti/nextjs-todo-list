import db from "@/utils/db";
import { NextResponse } from "next/server";

// GET /api/tasks

export const GET = async () => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });

  return Response.json({ data: task });
};

import { NextResponse } from "next/server";
import data from "../../../data/data";

export async function GET(request) {
  return NextResponse.json(data);
}

import { NextResponse } from "next/server";
let list = [];

export async function GET(req) {
  const userId = req.nextUrl.searchParams.get("userId");
  const userList = userId
    ? list.find((user) => String(user.id) === String(userId) && user)
    : list;
  return NextResponse.json({ data: userList, success: true }, { status: 200 });
}

export async function POST(req) {
  const request = await req.json();
  list.push({ ...request, id: Math.ceil(Math.random() * 100) });
  return NextResponse.json(
    { message: "Signup successfully", success: true },
    { status: 201 }
  );
}
export async function PUT(req) {
  const request = await req.json();
  const userList = list.map((user) =>
    String(user.id) === String(request.id) ? request : user
  );
  list = userList;
  return NextResponse.json(
    { message: "Signup successfully", success: true },
    { status: 201 }
  );
}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  const newList = list.filter((user) => {
    if (String(user.id) !== String(id)) {
      return user;
    }
  });
  list = newList;
  return NextResponse.json(
    { message: "Deleted successfully", success: true },
    { status: 200 }
  );
}

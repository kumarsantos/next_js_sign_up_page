"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete, Edit } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function TableGrid({ data }) {
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/signup?userId=${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/crud?id=${id}`,
        {
          method: "DELETE",
        }
      );
      await res.json();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="max-w-screen px-16">
      <TableContainer component={Paper} className="mt-4">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Mobile No.</TableCell>
              <TableCell align="left">Country Name</TableCell>
              <TableCell align="left">State</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.company_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.company_name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.mobile}</TableCell>
                <TableCell align="left">{row.country}</TableCell>
                <TableCell align="left">{row.state}</TableCell>
                <TableCell align="left">
                  <Edit
                    onClick={() => handleEdit(row.id)}
                    className="cursor-pointer text-blue-500 "
                  />
                </TableCell>
                <TableCell align="left">
                  <Delete
                    onClick={() => handleDelete(row.id)}
                    className="cursor-pointer text-red-400 "
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

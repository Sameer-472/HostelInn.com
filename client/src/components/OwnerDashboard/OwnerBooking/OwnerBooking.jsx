import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import users  from "./usersArray/usersArray"
import {
  TableHeading,
  TableItems,
  BookingText
} from "./style";

function createData(Name, Room, DateTime, Hostel, Status, Button) {
  return { Name, Room, DateTime, Hostel, Status, Button };
}


function OwnerBooking() {
  return (
    <>
    <BookingText variant="h2" component={"h2"}>Bookings</BookingText>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeading>Name </TableHeading>
            <TableHeading align="right">Room</TableHeading>
            <TableHeading align="right">Date,Time</TableHeading>
            <TableHeading align="right">Hostel</TableHeading>
            <TableHeading align="right">Status</TableHeading>
            <TableHeading align="right">Button</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableItems component="th" scope="row">
                {user.Name}
              </TableItems>
              {/* <TableCell align="right">{row.Name}</TableCell> */}
              <TableItems align="right">{user.Room}</TableItems>
              <TableItems align="right">{user.Date_Time}</TableItems>
              <TableItems align="right">{user.Hostel}</TableItems>
              <TableItems align="right">{user.Status}</TableItems>
              <TableItems align="right">{user.Button}</TableItems>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default OwnerBooking;

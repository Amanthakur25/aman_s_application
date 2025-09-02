"use client";
import { Box, Card, Typography, TextField, Button, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Dashboard() {
  // Sample data source (to be replaced with API data later)
  const dataSource = [
    {
      sNo: "",
      bookingNumber: "...",
      date: "...",
      record: "...",
      name: "...",
      contactNumber: "...",
      type: "...",
      amount: "...",
      status: "...",
      country: "...",
      language: "...",
      source: "...",
      pujaDate: "...",
      bookingStatus: "...",
      otherDetails: "",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }} className="p-4">
      {/* Card Section */}
      <Box sx={{ p: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
            justifyItems: "center",
          }}
        >
          {[
            { value: 50, label: "Dashboard" },
            { value: 15, label: "Today Pooja Booking" },
            { value: 3, label: "Today Report" },
            { value: 5, label: "Today Chat" },
            { value: 9, label: "Today Call" },
            { value: 11, label: "Today Chadhawa" },
            { value: 5, label: "Today Manokamna" },
            { value: 6, label: "Today Order" },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                p: 3,
                width: "80%",
                maxWidth: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: 120,
                borderRadius: 5,
              }}
            >
              <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                {item.value}
              </Typography>
              <Typography variant="body1">{item.label}</Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Form Section */}
      <Box sx={{ p: { xs: 2, sm: 3 } }} className="mt-4 bg-white p-4 rounded-lg shadow">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TextField
            select
            label="Select By Date"
            defaultValue="Today"
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="Today">Today</MenuItem>
            {/* Add more date options as needed */}
          </TextField>
          <TextField
            label="Record"
            placeholder="Search by Record"
            variant="outlined"
            className="w-full"
          />
          <TextField
            label="User Name"
            placeholder="Search By Name"
            variant="outlined"
            className="w-full"
          />
          <TextField
            label="User Mobile Number"
            placeholder="Search Mobile Number"
            variant="outlined"
            className="w-full"
          />
          <TextField
            select
            label="Country"
            defaultValue=""
            variant="outlined"
            className="w-full"
            placeholder="Search by Country..."
          >
            <MenuItem value="">Search by Country...</MenuItem>
            {/* Add country options as needed */}
          </TextField>
          <TextField
            select
            label="Type"
            defaultValue=""
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="">Select</MenuItem>
            {/* Add type options as needed */}
          </TextField>
          <TextField
            select
            label="Currency Code"
            defaultValue=""
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="">Select</MenuItem>
            {/* Add currency options as needed */}
          </TextField>
          <TextField
            select
            label="Puja Date"
            defaultValue=""
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="">Select A Puja Date</MenuItem>
            {/* Add puja date options as needed */}
          </TextField>
          <TextField
            label="Booking Number"
            placeholder="Search By Booking Number"
            variant="outlined"
            className="w-full"
          />
          <TextField
            select
            label="Source"
            defaultValue="All"
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="All">All</MenuItem>
            {/* Add source options as needed */}
          </TextField>
          <TextField
            select
            label="Social Source"
            defaultValue="All"
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="All">All</MenuItem>
            {/* Add social source options as needed */}
          </TextField>
          <TextField
            select
            label="Payment Status"
            defaultValue=""
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="">Select</MenuItem>
            {/* Add payment status options as needed */}
          </TextField>
          <TextField
            select
            label="Select Booking Status"
            defaultValue=""
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="">Select</MenuItem>
            {/* Add booking status options as needed */}
          </TextField>
          <TextField
            select
            label="Language"
            defaultValue=""
            variant="outlined"
            className="w-full"
          >
            <MenuItem value="">Select</MenuItem>
            {/* Add language options as needed */}
          </TextField>
        </Box>
        <Box className="mt-4 flex justify-end space-x-2">
          <Button variant="contained" color="warning" className="bg-yellow-500">
            Filter
          </Button>
          <Button variant="contained" color="default" className="bg-gray-500 text-white">
            Reset
          </Button>
        </Box>
      </Box>

      {/* Table Section */}
      <Box sx={{ p: { xs: 2, sm: 3 } }} className="mt-4">
        <TableContainer component={Paper} className="shadow">
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#8B0000", color: "white" }}>
                <TableCell sx={{ color: "white" }}>S.No.</TableCell>
                <TableCell sx={{ color: "white" }}>Booking Number</TableCell>
                <TableCell sx={{ color: "white" }}>Date</TableCell>
                <TableCell sx={{ color: "white" }}>Record</TableCell>
                <TableCell sx={{ color: "white" }}>Name</TableCell>
                <TableCell sx={{ color: "white" }}>Contact Number</TableCell>
                <TableCell sx={{ color: "white" }}>Type</TableCell>
                <TableCell sx={{ color: "white" }}>Amount</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
                <TableCell sx={{ color: "white" }}>Country</TableCell>
                <TableCell sx={{ color: "white" }}>Language</TableCell>
                <TableCell sx={{ color: "white" }}>Source</TableCell>
                <TableCell sx={{ color: "white" }}>Puja Date</TableCell>
                <TableCell sx={{ color: "white" }}>Booking Status (Refund)</TableCell>
                <TableCell sx={{ color: "white" }}>Other Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSource.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.sNo}</TableCell>
                  <TableCell>{row.bookingNumber}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.record}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.contactNumber}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>{row.pujaDate}</TableCell>
                  <TableCell>{row.bookingStatus}</TableCell>
                  <TableCell>{row.otherDetails}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
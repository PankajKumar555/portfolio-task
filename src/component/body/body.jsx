import React from "react";
import { Box, Divider, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import styled from "@emotion/styled";
import Activity from "../activity/Activity";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  //   width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "0 1rem",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "0.5rem 0.5rem 0.5rem 3rem",
    border: "1px solid #cbc4c4",
    borderRadius: "8px",
    width: "100%",
  },
}));

export const Body = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        My portfolio
      </Typography>
      <Box sx={{ display: "flex", padding: "5px", marginTop: "1rem  " }}>
        <Typography sx={{ cursor: "pointer" }}>Dashboard</Typography>
        <Typography sx={{ marginLeft: "2rem", cursor: "pointer" }}>
          MIS & Updates
        </Typography>
        <Typography sx={{ marginLeft: "2rem", cursor: "pointer" }}>
          Insights
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by company name…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box
          sx={{
            display: "flex",
            border: "1px solid #cbc4c4",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 1rem",
            marginLeft: "1rem",
          }}
        >
          <FilterListIcon />
          &nbsp;
          <Typography>Filter</Typography>
        </Box>
      </Box>
      <Activity />
    </Box>
  );
};

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Groups2Icon from "@mui/icons-material/Groups2";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import logo from "../../assets/Logo.png";
import { Divider } from "@mui/material";
import NavBar from "../navbar/Navbar";
import { Body } from "../body/body";

const drawerWidth = 240;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        position="absolute"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <NavBar />
        <Divider />
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        PaperProps={{
          style: {
            backgroundColor: "#FFFAF4",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <img src={logo} alt="logo" style={{ width: "40px" }} />
              <ListItemText sx={{ paddingLeft: "10px" }}>
                Climate Angels
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          {[
            "Portfolio",
            "Invest",
            "Syndicates",
            "Ledger",
            "Messages",
            "Events",
            "News & Blogs",
            "Help & Support",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton style={{ paddingLeft: "30px" }}>
                <ListItemIcon style={{ paddingLeft: "10px" }}>
                  {index === 0 && <TrendingUpIcon />}
                  {index === 1 && <CurrencyRupeeIcon />}
                  {index === 2 && <Groups2Icon />}
                  {index === 3 && <ArticleIcon />}
                  {index === 4 && <ForumIcon />}
                  {index === 5 && <CalendarMonthIcon />}
                  {index === 6 && <FeedIcon />}
                  {index === 7 && <HelpOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Body />
      </Box>
    </Box>
  );
}

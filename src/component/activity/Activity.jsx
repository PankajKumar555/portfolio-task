import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Divider } from "@mui/material";
import Logo from "../../assets/ace_recycling_pte_ltd_logo.jpeg";

export default function Activity() {
  return (
    <>
      <Typography variant="h5" sx={{ margin: "1rem 0px", fontWeight: "500" }}>
        Activity Feed
      </Typography>
      <Card
        sx={{ maxWidth: "70%", border: "1px solid #cbc4c4", boxShadow: "none" }}
      >
        <Typography
          variant="body2"
          sx={{
            background: "#E8F0EB",
            width: "fit-content",
            borderRadius: "10px",
            padding: "2px 1rem",
            fontSize: "0.8rem",
            margin: "1rem 0px 0px 1rem",
          }}
        >
          Invester Update
        </Typography>
        <CardHeader
          avatar={<Avatar src={Logo} aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Ace Green Recylling"
          subheader="Battry Recyling | Bengluru"
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem rfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem rfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paella dish"
          style={{ width: "60%", marginLeft: "1rem" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: "#297d29",
            textAlign: "right",
            padding: "0px 1rem 1rem 1rem",
          }}
        >
          READ MORE
        </Typography>
        <Divider style={{ margin: "0px 1rem" }} />
        <Typography variant="body2" style={{ padding: "1rem" }}>
          4 days ago
        </Typography>
      </Card>
      {/* second  */}
      <Card
        sx={{
          maxWidth: "70%",
          border: "1px solid #cbc4c4",
          boxShadow: "none",
          marginTop: "1rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            background: "#E8F0EB",
            width: "fit-content",
            borderRadius: "10px",
            padding: "2px 1rem",
            fontSize: "0.8rem",
            margin: "1rem 0px 0px 1rem",
          }}
        >
          Feature launch
        </Typography>
        <CardHeader
          avatar={
            <Avatar src={Logo} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Ace Green Recylling"
          subheader="Battry Recyling | Bengluru"
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem rfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem rfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem This impressive paella is a perfect
            party dish and a fun meal to cook together with your guests. Add 1
            cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: "#297d29",
            textAlign: "right",
            padding: "0px 1rem 1rem 1rem",
          }}
        >
          READ MORE
        </Typography>
        <Divider style={{ margin: "0px 1rem" }} />
        <Typography variant="body2" style={{ padding: "1rem" }}>
          15/03/2024
        </Typography>
      </Card>

      {/* thired */}
      <Card
        sx={{
          maxWidth: "70%",
          border: "1px solid #cbc4c4",
          boxShadow: "none",
          marginTop: "1rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body2"
            sx={{
              background: "#E8F0EB",
              width: "fit-content",
              borderRadius: "10px",
              padding: "2px 1rem",
              fontSize: "0.8rem",
              margin: "1rem 0px 0px 1rem",
            }}
          >
            fund Investment update
          </Typography>
          <Typography
            variant="body2"
            sx={{
              background: "#E8F0EB",
              width: "fit-content",
              borderRadius: "10px",
              padding: "2px 1rem",
              fontSize: "0.8rem",
              margin: "1rem 0px 0px 1rem",
              color: "green",
            }}
          >
            Live deal
          </Typography>
        </Box>
        <CardHeader
          avatar={
            <Avatar src={Logo} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Ace Green Recylling"
          subheader="Battry Recyling | Bengluru"
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem rfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem rfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.lorem
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1570034863556-99c216039543?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paella dish"
          style={{ marginLeft: "1rem" }}
        />
        <Button
          variant="outlined"
          color="success"
          sx={{
            fontWeight: "bold",
            margin: "1rem",
            padding: " 0.5rem 2rem",
            borderRadius: "8px",
          }}
        >
          VIEW DEAL
        </Button>
        <Divider style={{ margin: "0px 1rem" }} />
        <Typography variant="body2" style={{ padding: "1rem" }}>
          15-03-2024
        </Typography>
      </Card>
    </>
  );
}

import { SickTwoTone, TurnedInNot } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth }) => {
  const { displayName, photoURL } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      components="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSixing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          {photoURL && (
            <Box
              component="img"
              sx={{
                height: 50,
                width: 45,
                borderRadius: "50%",
              }}
              alt="google photo."
              src={photoURL}
            />
          )}
          <Typography variant="h5" noWrap component="div">
            Welcome:
            <br />
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

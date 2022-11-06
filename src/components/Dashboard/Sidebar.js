// import * as React from "react";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from '@mui/material/Divider';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import Donut1 from "./Donut1";
import Donut2 from "./Donut2";
import Bar1 from "./Bar1";
import Bar2 from "./Bar2";
import StackedBar from "./StackedBar";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Profile from "./Profile";
import GridViewIcon from "@mui/icons-material/GridView";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PieChartIcon from "@mui/icons-material/PieChart";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PublicIcon from "@mui/icons-material/Public";
import MonitorIcon from "@mui/icons-material/Monitor";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FlagIcon from "@mui/icons-material/Flag";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
// import LogoutIcon from "@mui/icons-material/Logout";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
import FadeMenu from "./FadeMenu";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "rgb(213, 216, 222)"),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "16rem",
  // width: "90%",
  width: "20rem",
  marginLeft: "1rem",
  boxShadow: "3px 3px 2px rgba(145, 153, 153, 0.7)",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "2px 10px",
  marginLeft: "16rem",
  borderRadius: theme.shape.borderRadius,
  width: "15%",
}));

const drawerWidth = 260;

function SidenavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        backgroundColor: "#e6e8ed",
        height: "100vh",
        // chng
        // marginTop: "25%",
        // overflow: "hidden",
        marginTop: "0.5rem",
        borderRight: "solid 2px #2C66D",
      }}
    >
      {/* <Toolbar style={{backgroundColor:'primary'}}/> */}
      {/* <Divider /> */}
      <List style={{ paddingTop: "25%", overflow: "none", height: "90%" }}>
        {[
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <GridViewIcon />
            <span>Dashboard</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <TagFacesIcon />
            <span>Registration</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <MedicalServicesIcon />
            <span>Accussion</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PieChartIcon />
            <span>Operations</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <CallMergeIcon />
            <span>User Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <StorefrontIcon />
            <span>Center Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PhonelinkSetupIcon />
            <span>Test Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <InventoryIcon />
            <span>Order Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <SummarizeIcon />
            <span>Report Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <InventoryIcon />
            <span>Inventory</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PublicIcon />
            <span>Finance</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <MonitorIcon />
            <span>Monitor</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <AnalyticsIcon />
            <span>Analytics</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <SearchIcon />
            <span>Advance Search</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <FlagIcon />
            <span>Activity log</span>
          </div>,
          // "Dashboard",
          // "Registration",
          // "Accussion",
          // "Operations",
          // "User Management",
          // "Centerr Managment",
          // "Test Management",
          // "Order Management",
          // "Report Management",
          // "Inventory",
          // "Finance",
          // "Monitor",
          // "Analytics",
          // "Advance Search",
          // "Activity log",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              style={{
                backgroundColor: "#e6e8ed",
                borderBottom: "1px solid #2C566D",
                color: "#043752",
              }}
            >
              {/* <ListItemIcon> */}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   // chng
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <StyledToolbar style={{ backgroundColor: "#032b40" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <SearchIconWrapper sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIcon
              // sx={{ display: { xs: "none", md: "flex" } }}
              style={{
                color: "#043752",
                marginLeft: "16rem",
              }}
            />
          </SearchIconWrapper>
          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <InputBase
              style={{ marginLeft: "1.7rem" }}
              placeholder="search.."
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
              // style={{ marginRight: "1rem" }}
            >
              <Badge color="error">
                <CircleNotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <FadeMenu />
        </StyledToolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)`, marginTop: "7%" },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              rowGap: "2rem",
              width: "100%",
              height: "100%",
              gap: "0% 0% 5% 0%",
            }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Donut1 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Donut2 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Bar1 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <StackedBar />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Profile />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Bar2 />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

SidenavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SidenavBar;

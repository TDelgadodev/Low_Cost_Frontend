import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
import styles from "./SideBarDashboard.module.css";
import { Home } from "@mui/icons-material";


const drawerWidth = 240;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        className={`${styles.drawer}`}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#007BFF",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <a href="/">
          <img src="/logowhite.png" alt="logo" className={`${styles.logo}`} />
        </a>

        <List>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon sx={{ color: "white" }}>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/dashboard/users">
            <ListItemIcon sx={{ color: "white" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Lista de Usuarios" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/products">
            <ListItemIcon sx={{ color: "white" }}>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Lista de Productos" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/dashboard/products/create">
            <ListItemIcon sx={{ color: "white" }}>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Crear Producto" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/search">
            <ListItemIcon sx={{ color: "white" }}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Buscar un producto" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/dashboard/edit-price">
            <ListItemIcon sx={{ color: "white" }}>
              <EditNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Editar Precio Masivamente" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/edit-price-by-category">
            <ListItemIcon sx={{ color: "white" }}>
              <EditNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Editar Precio por Categoría" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/dinamic-carousel">
            <ListItemIcon sx={{ color: "white" }}>
              <EditNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Editar Carrusel Home" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemIcon sx={{ color: "white" }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Página Principal" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box >
  );
}

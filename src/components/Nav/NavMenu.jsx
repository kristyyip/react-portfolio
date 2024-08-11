import { Typography, MenuItem } from '@mui/material';

function NavMenu(pages, handleCloseNavMenu) {
  return (
    <>
      {pages.map((page) => (
        <MenuItem key={page.name} href={page.link} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page.name}</Typography>
        </MenuItem>
      ))}
    </>
  );
}


export default NavMenu;
import { Button } from '@mui/material';

function NavLink(pages, handleCloseNavMenu) {
  return (
    <>
        {pages.map((page) => (
        <Button
            key={page.name}
            href={page.link}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
            {page.name}
        </Button>
        ))}
    </>
  );
}

export default NavLink;
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

const actionButtonSx = {
  backgroundColor: 'var(--portfolio-accent)',
  color: 'var(--portfolio-background)',
  textTransform: 'none',
  '&:hover': { backgroundColor: '#ff7777' },
};

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className="portfolio-navbar"
      sx={{
        alignItems: 'center',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        boxShadow: 'none',
        pointerEvents: 'none',
        top: isScrolled ? 8 : 24,
        transition: 'top 250ms ease',
      }}
    >
      <Box
        className="portfolio-navbar-surface"
        sx={{
          alignItems: 'center',
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          pointerEvents: 'auto',
          width: 'fit-content',
        }}
      >
        <Button
          href="#top"
          onClick={closeMenu}
          sx={{
            color: '#f1f5f9',
            fontSize: isScrolled ? '1rem' : '1.25rem',
            fontWeight: 700,
            minWidth: 0,
            p: 0,
            textTransform: 'none',
            transition: 'font-size 250ms ease',
          }}
        >
          Blenis.
        </Button>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              sx={{ color: 'var(--portfolio-muted)', textTransform: 'none' }}
            >
              {link.label}
            </Button>
          ))}
          <Button href="mailto:hello@example.com" variant="contained" sx={actionButtonSx}>
            Get in touch
          </Button>
        </Box>

        <IconButton
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
          sx={{ color: '#f1f5f9', display: { xs: 'inline-flex', md: 'none' } }}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </IconButton>
      </Box>

      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={closeMenu}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'var(--portfolio-background)',
              color: '#f1f5f9',
              mt: isScrolled ? 8 : 13,
            },
          },
        }}
      >
        <Box sx={{ display: 'grid', gap: 1, p: 3 }}>
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              sx={{ color: 'var(--portfolio-muted)', justifyContent: 'flex-start', textTransform: 'none' }}
            >
              {link.label}
            </Button>
          ))}
          <Button href="mailto:hello@example.com" onClick={closeMenu} variant="contained" sx={actionButtonSx}>
            Get in touch
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

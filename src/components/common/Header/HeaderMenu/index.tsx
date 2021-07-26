import { Drawer, IconButton, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import React, { useState } from 'react'

export const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(true)
  }

  const handleClose = () => {
    setAnchorEl(false)
  }
  return (
    <>
      <IconButton
        edge="start"
        aria-haspopup="true"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={anchorEl} onClose={handleClose}>
        <Link href="/" passHref>
          <MenuItem onClick={handleClose}>Inicio </MenuItem>
        </Link>
        <Link href="/loja" passHref>
          <MenuItem onClick={handleClose}>Loja</MenuItem>
        </Link>

        <Link href="/sobre" passHref>
          <MenuItem onClick={handleClose}>Sobre Nós</MenuItem>
        </Link>

        <Link href="/perguntas-frequentes" passHref>
          <MenuItem onClick={handleClose}>Perguntas Frequentes</MenuItem>
        </Link>

        <Link href="/imprensa" passHref>
          <MenuItem onClick={handleClose}>Imprensa</MenuItem>
        </Link>

        <Link href="/contato" passHref>
          <MenuItem onClick={handleClose}>Contato</MenuItem>
        </Link>
      </Drawer>
    </>
  )
}

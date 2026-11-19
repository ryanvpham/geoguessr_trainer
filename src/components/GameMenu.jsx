import { useState, useEffect, useRef } from 'react'

// Hamburger menu in the game header. Holds the in-game navigation actions
// (Main Menu / Restart) so they don't compete with the title and score badge.
function GameMenu({ onMainMenu, onRestart }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  // Close on outside click or Escape while open.
  useEffect(() => {
    if (!open) return
    const handlePointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('touchstart', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('touchstart', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const choose = (action) => {
    setOpen(false)
    action()
  }

  return (
    <div className="game-menu" ref={rootRef}>
      <button
        className="back-arrow-btn game-menu-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Open menu"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="hamburger" aria-hidden="true"><span /><span /><span /></span>
      </button>
      {open && (
        <div className="game-menu-list" role="menu">
          <button role="menuitem" onClick={() => choose(onMainMenu)}>Main Menu</button>
          <button role="menuitem" onClick={() => choose(onRestart)}>Restart</button>
        </div>
      )}
    </div>
  )
}

export default GameMenu

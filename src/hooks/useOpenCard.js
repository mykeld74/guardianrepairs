import { useState, useMemo } from 'react'

export const useOpenCard = initial => {
  const [isOpen, setIsOpen] = useState(initial)
  const open = id => setIsOpen(prevState => !prevState)
  const bind = useMemo(() => {
    return {
      onClick: open,
    }
  }, [])
  return { isOpen, setIsOpen, open, bind }
}

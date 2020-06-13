import React, { createContext, useState } from 'react'
import useOpenCard from '../hooks/useOpenCard'

export const AppContext = createContext({
  isContactModalOpen: false,
})

const PageWrapper = ({ children }) => {
  const { isOpen, open } = useOpenCard(false)

  return (
    <AppContext.Provider
      value={{ isContactModalOpen: isOpen, openContact: open }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default PageWrapper

import {createContext} from 'react'
import { useToggle } from "./useToggle";


const SidebarContext = createContext({})

const SidebarContextProvider = (children) => {
const [toggle, handleToggle] = useToggle();

  return (
    <SidebarContext.Provide  >
        {children}
    </SidebarContext.Provide>
  )
}

export default SidebarContextProvider
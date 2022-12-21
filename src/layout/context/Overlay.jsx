import SidebarContextProvider from "./SidebarContext";

const Overlay = () => {
  const style = "";
  return (
    <SidebarContextProvider>
      <div className={toggle? style : ""} onClick={handleToggle}>
        
      </div>
    </SidebarContextProvider>
  );
};

export default Overlay;

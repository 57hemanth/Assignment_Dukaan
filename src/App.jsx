import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function App() {
  return(
    <div className="flex w-[1440px] h-[1482px]">
      <SideBar />
      <div className="w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}
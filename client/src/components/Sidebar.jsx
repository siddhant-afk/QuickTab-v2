import { useState } from "react";
import TabButton from "./TabButton";
import { IoIosAddCircle } from "react-icons/io";
 
function Sidebar() {
 const [Tab,selectTab] = useState("Dashboard");

 function handleClick(tab){
    console.log(tab);
    selectTab(tab);
 }
    return (
        <div className="sidebar">
        <div className="brand-heading py-4 px-10">
              <h1 className="text-xl text-slate-400">QuickTab</h1>
            </div>
        
        <div className="sidebar-content">
        <ul className="tabs">
                <TabButton isSelected = {Tab == "Dashboard"} onClick = {()=> handleClick("Dashboard")}>Dashboard</TabButton>
                <TabButton isSelected = {Tab == "Customers"} onClick = {()=> handleClick("Customers")}>Customers</TabButton>
                <TabButton isSelected = {Tab == "Items"} onClick = {()=> handleClick("Items")}>Items</TabButton>
                <TabButton isSelected = {Tab == "Invoices"} onClick = {()=> handleClick("Invoices")}>Invoices</TabButton>
                <TabButton isSelected = {Tab == "Expenses"} onClick = {()=> handleClick("Expenses")}>Expenses</TabButton>
               
            </ul>
        </div>
           
        </div>


    )
}

export default Sidebar;
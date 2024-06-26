import { useState } from "react";
import TabButton from "./TabButton";
import { IoIosAddCircle } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { TbInvoice } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

function Sidebar() {
 const [Tab,selectTab] = useState("Dashboard");

 function handleClick(tab){
    console.log(tab);
    selectTab(tab);
 }
    return (
        <div className="sidebar">
        <div className="brand-heading py-4 text-2xl text-white font-bold ps-10 flex">
        <LiaFileInvoiceDollarSolid className="my-2" />  <h1 className="ms-2 my-1">QuickTab</h1>
            </div>
        
        <div className="sidebar-content">
        <ul className="tabs">
                <TabButton isSelected = {Tab == "Dashboard"} onClick = {()=> handleClick("Dashboard")}> <IoHomeOutline className="sidebar-icon"/> Dashboard</TabButton>
                <TabButton isSelected = {Tab == "Customers"} onClick = {()=> handleClick("Customers")}><BsPeople className="sidebar-icon"/> Customers</TabButton>
                <TabButton isSelected = {Tab == "Items"} onClick = {()=> handleClick("Items")}><BsCart3 className="sidebar-icon"/> Items</TabButton>
                <TabButton isSelected = {Tab == "Invoices"} onClick = {()=> handleClick("Invoices")}><LiaFileInvoiceSolid className="sidebar-icon"/> Invoices</TabButton>
                <TabButton isSelected = {Tab == "Expenses"} onClick = {()=> handleClick("Expenses")}> <TbInvoice className="sidebar-icon"/> Expenses</TabButton>
               
            </ul>
        </div>
           
        </div>


    )
}

export default Sidebar;
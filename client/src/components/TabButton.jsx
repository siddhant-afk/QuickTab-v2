function TabButton(props){

    return(
        <li className={props.isSelected? "tab-button active" : "tab-button"} onClick={props.onClick}>{props.children}</li>
    );
}

export default TabButton;
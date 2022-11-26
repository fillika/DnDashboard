import React from "react";
import { IconType } from "./IconType";

const PlusIcon: React.FC<IconType> = ({className, color}) => {
    return <svg className={className} width="1em" height="1em" viewBox="0 0 14 14" color="#FFFFFF">
        <defs>
            <clipPath id="addnew_svg__a">
                <path d="M0 0h14v14H0z"></path>
            </clipPath>
        </defs>
        <g data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1379" fill="none"
           stroke={color} stroke-linecap="round" stroke-width="1.7" clip-path="url(#addnew_svg__a)">
            <path data-name="\u041B\u0438\u043D\u0438\u044F 147" d="M7 2v10"></path>
            <path data-name="\u041B\u0438\u043D\u0438\u044F 148" d="M12 7H2"></path>
        </g>
    </svg>
};

export default PlusIcon;
import { InputIcon } from "@/style/icons"
import { MediumFont } from "@/style/fonts"

import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import s from "./MInput.module.css"

/**
 * Стилизированное поле ввода
 *
 * 
 * @param {Function} setInputValue функция изменения состояния стейта.
 */
export default function MInput({ setInputValue }) {
    const textInput = useRef(null);
    const divInput = useRef(null);
    const [classList, setClassList] = useState([s.MInput])

    useClickAway(divInput, () => {
        setClassList([s.MInput])
      });

    return <div 
        ref={divInput}
        className={classList.join(' ')} 
        onClick={() => {textInput.current.focus()}}
    >
        <InputIcon />
        <input 
            ref={textInput}
            type="text" 
            id="link"
            name="link"
            placeholder="Ссылка..."
            className={MediumFont.className}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => {setClassList([s.MInput, 'shadow'])}}
        />
    </div>
}
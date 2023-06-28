import { BoldFont } from "@/style/fonts"
import Github from "@/components/UI/Github/Github"

import Image from 'next/image'
import s from './Header.module.css'


export default function Header() {
    return (
      <header className={[BoldFont.className, s.header].join(' ')}>
        <span className={s.header_logo}>
            <Image width={56} height={56} alt="logo" src="/icon.svg"/>
            сокращалка
        </span>
        <span className={s.header_github}><Github /></span>
      </header>
    )
}
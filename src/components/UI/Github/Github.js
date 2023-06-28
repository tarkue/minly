import { SemiBoldFont } from "@/style/fonts"
import { GithubIcon } from "@/style/icons"

import s from './Github.module.css'


/**
 * Компонент ссылка на github. 
 */
export default function Github() {
    return (
        <a href="https://github.com" alt="github-link" className={
            [SemiBoldFont.className, s.link].join(' ')}
        ><span>
            <GithubIcon/>
            github
        </span></a>
    )
}
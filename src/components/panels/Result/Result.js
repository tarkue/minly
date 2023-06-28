import Footer from "@/components/UI/Footer/Footer"
import Github from "@/components/UI/Github/Github"
import MButton from "@/components/UI/MButton/MButton"
import QrCode from "@/components/UI/QrCode/QrCode"
import ToHistory from "@/components/UI/ToHistory/ToHistory"

import { CopyIcon } from "@/style/icons"
import { MediumFont } from "@/style/fonts"

import s from "./Result.module.css"

import {useCopyToClipboard} from "react-use"


/**
 * Панель результата.
 *
 * 
 * @param {string} id идентификатор панели.
 */
export default function Result({ id, SetActivePanel }) {
    //const [state, copyToClipboard] = useCopyToClipboard()

    //function copyLink() {
    //
    //    copyToClipboard(ResultLink)
    //}

    return <div>
        <div className="panel">
            <MButton className={[s.CopyLink, "shadow"].join(' ')}> 
                <CopyIcon />
            </MButton>
            <div className={[s.Result__wrapper, "panel_shadow"].join(' ')}>
                <div>
                    <QrCode Link={''}/>
                </div>
                <div className={s.Result__content}>
                    <p className={s.Result__last_link}>
                        Изначальная ссылка:
                        <a href={''}>{'https://google.com'}</a>
                    </p>
                    <p className={s.Result__result_link}>
                        Результат: 
                        <a href={''}>{'minly.ru/gU4Fd'}</a>
                    </p>
                    <p 
                        className={
                            [
                                s.Result__counter,
                                MediumFont.className
                            ].join(' ')
                        }
                    >
                        Эту ссылку сокращали уже {3} раз!
                    </p>
                </div>
            </div>
            <MButton 
                onClick={() => {SetActivePanel('main')}}
                className="BackButton shadow"
            >
                Вернуться назад
            </MButton>
        </div>
        <Footer>
            <span className='footer__github_link'><Github /></span>
            <ToHistory SetPanel={SetActivePanel}/>
        </Footer>
    </div>
}
import Footer from "@/components/UI/Footer/Footer"
import Github from "@/components/UI/Github/Github"
import MButton from "@/components/UI/MButton/MButton"
import QrCode from "@/components/UI/QrCode/QrCode"
import ToHistory from "@/components/UI/ToHistory/ToHistory"

import { CopyIcon } from "@/style/icons"
import { MediumFont, SemiBoldFont } from "@/style/fonts"

import s from "./Result.module.css"

import {useCopyToClipboard} from "react-use"
import { useEffect, useState } from "react"
import { HistoryStorage } from "@/storage/HistoryStorage"
import { server } from "@/server/server"


/**
 * Панель результата.
 *
 * 
 * @param {string} id идентификатор панели.
 * @param {function} SetActivePanel устанавливает стейт панели.
 */
export default function Result({ id, SetActivePanel }) {
    const [value, copy] = useCopyToClipboard()
    const [InitialLink, SetInitialLink] = useState(null)
    const [ResultLink, SetResultLink] = useState(null)
    const [Counter, SetCounter] = useState(null)

    useEffect(() => {
        const h = HistoryStorage.get()
        SetInitialLink(h[h.length-1])
        
        server.getResult(h[h.length-1], false)
        .then((data) => {
            SetResultLink("min.ly/" + data.data["result"])
            SetCounter(data.data["counter"])
        })        
    }, [])
    return <div>
        <div className="panel">
            <MButton 
                className={s.CopyLink} 
                onClick={() => copy(ResultLink)}
            > 
                <CopyIcon />
            </MButton>
            <div className={[s.Result__wrapper].join(' ')}>
                <div className={s.QrCode__wrapper}>
                    <QrCode Link={ResultLink}/>
                </div>
                <div className={s.Result__content}>
                    <p className={s.Result__last_link}>
                        Изначальная ссылка:
                        <a href={InitialLink}>{InitialLink}</a>
                    </p>
                    <div className={s.Result__result_link}>
                        <span className={s.Result__res_text}>Результат:</span> 
                        <div className={s.ResultMobile}>
                            <a 
                                href={ResultLink}
                            >
                                {ResultLink}
                            </a>
                            <span className={s.SplitMobile}> </span>
                            <MButton 
                                className={s.CopyLinkMobile} 
                                onClick={() => copy(ResultLink)}
                            > 
                                <CopyIcon />
                            </MButton>
                        </div>
                    </div>
                    <p 
                        className={
                            [
                                s.Result__counter,
                                MediumFont.className
                            ].join(' ')
                        }
                    >
                        Эту ссылку сокращали уже {Counter} раз!
                    </p>
                </div>
            </div>
            <MButton 
                onClick={() => {SetActivePanel('main')}}
                className={["BackButton", "shadow", s.Back__button].join(' ')}
            >
                Вернуться назад
            </MButton>
        </div>
        <Footer>
            <p 
                className={[s.Result__counter_m, SemiBoldFont.className].join(' ')}
            >
                Эту ссылку сокращали уже {Counter} раз!
            </p>
            <span className='footer__github_link'><Github /></span>
            <ToHistory SetPanel={SetActivePanel}/>
            <MButton 
                onClick={() => {SetActivePanel('main')}}
                className={["BackButton", "shadow", s.Back__button_m].join(' ')}
            >
                Вернуться назад
            </MButton>
        </Footer>
    </div>
}
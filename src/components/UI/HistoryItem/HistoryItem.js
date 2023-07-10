import MButton from "../MButton/MButton"

import { QrIcon, CopyIcon } from "@/style/icons"
import { MediumFont } from "@/style/fonts"

import s from "./HistoryItem.module.css"
import { useEffect, useState } from "react"
import { server } from "@/server/server"
import { HistoryStorage } from "@/storage/HistoryStorage"

import { useCopyToClipboard } from "react-use"


/**
 * Сокращённая ссылка в истории.
 *
 * 
 * @param {string} Link изначальная ссылка.
 * @param {function} SetActivePanel устанавливает стейт панели.
 */
export default function HistoryItem({ Link, SetPanel }) {
    const [ResultLink, SetResultLink] = useState(null)
    const [value, copy] = useCopyToClipboard()
    useEffect(() => {
        server.getResult(Link, true)
        .then((data) => {
            SetResultLink("min.ly/" + data.data)
        })
    }, [])

    const QRGet = () => {
        SetPanel('result')
        HistoryStorage.add(Link)
    }
    return <div className={s.HistoryItem}>
        <div>
            <a className={s.HistoryItem__result} href={Link}>
                {ResultLink}
            </a>
            <p className={[
                s.HistoryItem__lastLink, MediumFont.className
            ].join(' ')}>
                Ссылка:
                <a href={Link}>{Link}</a>
            </p>
        </div>
        <div className={s.HistoryItem__actions}>
            <MButton className="shadow" onClick={QRGet}>
                <QrIcon />
                <span>QR-код</span>
            </MButton>
            <MButton className="shadow" onClick={() => copy(ResultLink)}>
                <CopyIcon />
                <span>Скопировать</span>
            </MButton>
        </div> 
    </div>
}
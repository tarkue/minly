import MButton from "../MButton/MButton"

import { QrIcon, CopyIcon } from "@/style/icons"
import { MediumFont } from "@/style/fonts"

import s from "./HistoryItem.module.css"


/**
 * Сокращённая ссылка в истории.
 *
 * 
 * @param {string} Link изначальная ссылка.
 */
export default function HistoryItem({ Link }) {
    return <div className={s.HistoryItem}>
        <div>
            <a className={s.HistoryItem__result} href={Link}>
                {Link}
            </a>
            <p className={[
                s.HistoryItem__lastLink, MediumFont.className
            ].join(' ')}>
                Ссылка:
                <a href={Link}>{Link}</a>
            </p>
        </div>
        <div className={s.HistoryItem__actions}>
            <MButton className="shadow">
                <QrIcon />
            </MButton>
            <MButton className="shadow">
                <CopyIcon />
            </MButton>
        </div> 
    </div>
}
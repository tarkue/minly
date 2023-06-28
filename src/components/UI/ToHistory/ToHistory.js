"use client"
import MButton from '@/components/UI/MButton/MButton'
import { HistoryIcon } from '@/style/icons'

import s from "./ToHistory.module.css"

import { HistoryStorage } from '@/storage/HistoryStorage'


/**
 * Кнопка переключения панели к History.
 * Вынесена по причине переиспользования компонента
 *
 * 
 * @param {Function} setPanel установка значения панели
 */
export default function ToHistory({ SetPanel }) {
    const length = HistoryStorage.length()

    function toHistory() {
        if (length > 0) SetPanel('history')
    }

    return <MButton 
        onClick={toHistory}
        className={s.ToHistory}
    >
        <HistoryIcon />
        {length ? "История сокращалок" : "История пуста"}
        {length ? 
        <div className={s.ToHistory__counter}>
            {HistoryStorage.length()}
        </div> : ''}
    </MButton>
}
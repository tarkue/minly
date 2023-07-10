import Footer from "@/components/UI/Footer/Footer"
import Github from "@/components/UI/Github/Github"
import MButton from "@/components/UI/MButton/MButton"
import HistoryItem from "@/components/UI/HistoryItem/HistoryItem"
import { HistoryIcon, TrashIcon } from "@/style/icons"

import s from './History.module.css'
import { HistoryStorage } from "@/storage/HistoryStorage"
import { useEffect, useState } from "react"


/**
 * Панель история запросов.
 *
 * 
 * @param {string} id идентификатор панели.
 * @param {function} SetActivePanel устанавливает стейт панели.
 */
export default function History({ id, SetActivePanel }) {
    const deleteHistory = () => {
        HistoryStorage.delete()
        SetActivePanel('main')
    }

    const ItemsList = HistoryStorage.get().reverse().map((item, i) => {
        return <HistoryItem 
            Link={item}
            SetPanel={SetActivePanel}
            key={i}
        />
    })
    
    return <div>
        <div className="panel">
            <div className={[s.History__wrapper, "panel_shadow"].join(' ')}>
                <div className={s.History__title}>
                    <div>
                        <HistoryIcon />
                        Ваша история
                    </div>
                    <MButton 
                        className={s.TrashButton} 
                        onClick={deleteHistory}
                    >
                        <TrashIcon />
                    </MButton>
                </div>

                <div className={s.History__List}>
                    {ItemsList}
                </div>
            </div>
            <MButton 
                onClick={() => {SetActivePanel('main')}}
                className={[s.History__btn_panel, "BackButton", "shadow"].join(' ')}
            >
                Вернуться назад
            </MButton>
        </div>
        <Footer>
            <span className='footer__github_link'><Github /></span>
            <MButton 
                onClick={() => {SetActivePanel('main')}}
                className={[s.History__btn_footer, "BackButton", "shadow"].join(' ')}
            >
                Вернуться назад
            </MButton>
        </Footer>
    </div>
}
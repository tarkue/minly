import Footer from "@/components/UI/Footer/Footer"
import Github from "@/components/UI/Github/Github"
import MButton from "@/components/UI/MButton/MButton"
import HistoryItem from "@/components/UI/HistoryItem/HistoryItem"
import { HistoryIcon, TrashIcon } from "@/style/icons"

import s from './History.module.css'
import { HistoryStorage } from "@/storage/HistoryStorage"


/**
 * Панель история запросов.
 *
 * 
 * @param {string} id идентификатор панели.
 */
export default function History({ id, SetActivePanel }) {
    
    function deleteHistory() {
        HistoryStorage.delete()
        SetActivePanel('main')
    }
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
                    <HistoryItem 
                        Link={'https://google.com'}
                    />
                   
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
        </Footer>
    </div>
}
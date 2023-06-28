import Footer from '@/components/UI/Footer/Footer'
import Github from '@/components/UI/Github/Github'
import MButton from '@/components/UI/MButton/MButton'
import MInput from '@/components/UI/MInput/MInput'
import ToHistory from '@/components/UI/ToHistory/ToHistory'

import s from './Main.module.css'

import { useState } from "react";
import { HistoryStorage } from '@/storage/HistoryStorage'

import { URLREG, WithProtocolURLREG } from '@/regexp'


/**
 * Панель главного экрана.
 *
 * 
 * @param {string} id идентификатор панели.
 */
export default function Main({ id, SetActivePanel }) {
    const [Link, SetLink] = useState('');

    function GetResult() {
        if (WithProtocolURLREG.test(Link) || URLREG.test(Link)) {
            HistoryStorage.add(Link)
            SetActivePanel('result')
        } else {
            console.log('warning')
        }
    }

    return <div>
            <div className="panel">
                <h3 className={s.main__title}>
                    Заполните, чтобы получить сокращённую ссылку!
                </h3>
                <div className={[s.main__form, "panel_shadow"].join(' ')}>
                    <MInput setInputValue={SetLink}/>
                    <MButton onClick={GetResult} className={s.GetLink_Button}>
                        Получить ссылку
                    </MButton>
                </div>
            </div>
        <Footer>
            <span className='footer__github_link'><Github /></span>
            <ToHistory SetPanel={SetActivePanel}/>
        </Footer>
    </div>
}
import QRCode from "qrcode.react";
import { useRef, useState } from "react";

import s from "./QrCode.module.css"

import { useClickAway } from "react-use";


/**
 * Компонент qr-кода
 *
 * 
 * @param {string} Link ссылка по которой генерируется qr.
 */
export default function QrCode({ Link }) {
    const QRCodeWrapper = useRef()
    const QRRef = useRef(null)
    const [MobileButtonView, SetMobileButtonView] = useState(
        window.innerWidth > 945 ? false : true
    )

    useClickAway(QRCodeWrapper, () => {
        if (window.innerWidth < 945 && !MobileButtonView) {
            SetMobileButtonView(true)
        }
    })

    function DownloadQR() {
        let canvas = QRRef.current.children[0].toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = canvas;
        anchor.download = `QRCode.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    const QRButton = <div 
        className={s.QrCodeButtonMobile}
        onClick={() => SetMobileButtonView(false)}
    >
        Показать QR-код
    </div>
    return <>
        {MobileButtonView ? QRButton :
            <div className={s.QrCode} onClick={DownloadQR} ref={QRCodeWrapper}>
                <div className={s.QrCode__wrapper} ref={QRRef}>
                    <QRCode
                        value={Link}
                        size={512}
                        style={{width: "auto", height: "auto"}}
                        className={s.QrCode__svg}
                    />
                </div>
                <p className={s.QrCode__title}>
                    Скачать QR-код
                </p>
            </div>
        }
    </>
}
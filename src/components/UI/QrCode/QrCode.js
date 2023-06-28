import QRCode from "qrcode.react";
import { useRef } from "react";

import s from "./QrCode.module.css"


/**
 * Компонент qr-кода
 *
 * 
 * @param {string} Link ссылка по которой генерируется qr.
 */
export default function QrCode({ Link }) {
    const QRRef = useRef(null)

    function DownloadQR() {
        let canvas = QRRef.current.children[0].toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = canvas;
        anchor.download = `QRCode.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    return <div className={s.QrCode} onClick={DownloadQR}>
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
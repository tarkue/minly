/**
 * Возвращает активную панель.
 *
 * 
 * @param {string} ActivePanel id активной панели.
 */
export default function Panel({ children, ActivePanel }) {
    var panelList = new Object();
    children.forEach( (child, key) => {
        if (child.props.id === undefined) return;
        panelList[child.props.id] = key
    });

    return <> {children[ panelList[ActivePanel] ]} </>
}

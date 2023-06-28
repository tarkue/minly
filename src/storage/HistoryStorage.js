const HistoryStorage = {
    get() {
        const h = window.localStorage.getItem("HISTORY")
        if (h === null) return []
        return JSON.parse(h)
    },
    add(item) {
        const h = this.get()
        h.push(item)

        window.localStorage.setItem("HISTORY", JSON.stringify(h))
    },
    delete() {
        window.localStorage.removeItem("HISTORY")
    },
    length() { 
        return this.get().length
    }
}

export {
    HistoryStorage
}


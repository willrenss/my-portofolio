export const getLocalStorage = () => {
    const storedData = localStorage.getItem('contact')
    return storedData ? JSON.parse(storedData) : []
}

export const getCountDataStorage = () => {
    const countData = localStorage.getItem('count')
    return countData ? parseInt(countData) : 0
}

export const getSearchStorage = () => {
    const search = localStorage.getItem('search')
    return search ? search : ''
}

export const getLimitDataStorage = () => {
    const limit = localStorage.getItem('limit')
    return limit ? parseInt(limit) : 10
}

export const getOffsetDataStorage = () => {
    const offset = localStorage.getItem('offset')
    return offset ? parseInt(offset) : 0
}
export const getCountPageDataStorage = () => {
    const count = localStorage.getItem('countPage')
    return count ? parseInt(count) : 1
}
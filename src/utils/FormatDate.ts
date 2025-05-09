//Format dates
export const FormatDate = () => {
    const date = new Date()
    const time = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    const month = date.toLocaleDateString([], {month: 'short', day: '2-digit'})

    return `${month} | ${time}`
}
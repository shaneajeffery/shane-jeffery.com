export const sortByDate = (a: any, b: any) => {
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
    const dateA: any = new Date(a.frontMatter.date)
    const dateB: any = new Date(b.frontMatter.date)
    longEnUSFormatter.format(dateA)
    longEnUSFormatter.format(dateB)

    return dateB - dateA
}

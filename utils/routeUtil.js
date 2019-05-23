export default function(modules) {
    return modules
        .reduce((acc, cur) => {
            const subMoudles = cur.reduce((a, c) => {
                return [...a, c]
            }, [])
            return [...acc, ...subMoudles]
        }, [])
        .reduce((acc, cur) => {
            return { ...acc, [cur.path]: cur.Comp }
        }, {})
}

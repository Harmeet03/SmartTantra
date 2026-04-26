import { useMemo } from "react"

const Loader = () => {
    const data = [
        'Please Wait...',
        'Loading Data...',
        'Fetching...',
        'Just a moment...'
    ]

    const randomText = useMemo(() => {
        return data[Math.floor(Math.random() * data.length)]
    }, [])

    return (
        <div className="flex justify-center items-center h-screen flex-col h-screen bg-black text-white">
            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <p> {randomText} </p>
        </div>
    )
}

export default Loader
import {useParams} from "react-router-dom"

export default function User() {
        const {Userid} = useParams()
    return (
        <div className="bg-red-600 text-white text-3xl p-4">User:{Userid}</div>
    )
}

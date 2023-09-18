import Image from "next/image";
import logo from "../../public/logo.svg"

export default function Header() {

    return (
        <div className="w-[100%] bg-gray-800 py-8 px-8 flex justify-between align-middle">

            <Image alt="logo" width={200} height={200} className="mb-2" src={logo}/>

            <div className="flex align-middle justify-center p-1 text-xl text-white gap-3">
                <span className="text-red-600 font-bold"> Home </span>
                <span> Options </span>
                <span> Application </span>
                <span> Stuff </span>
            </div>

        </div>
    )

}
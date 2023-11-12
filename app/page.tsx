import {MainPage} from "@/app/components/MainPage";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function Home() {

    return (
            <main className="flex min-h-screen flex-col bg-sky-500">
                <div className="flex justify-between items-center p-4 bg-gradient-to-b from-sky-400 to-sky-500 h-20">
                    <h1 className="font-mono font-bold text-2xl tracking-light
                    text-amber-300 hover:text-amber-100 transition duration-300 ease-in-out">
                        Web3 Message Board
                    </h1>
                    <w3m-button />
                </div>
                <MainPage />
            </main>
    )
}

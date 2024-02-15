import {useEffect, useState} from "react";
import {readContract} from "wagmi/actions";
import {messageBoardABI} from "@/src/generated";
import {MessageData, messagesDataToMessages} from "@/src/messageBoard";

export function MainPage() {
    const [data, setData] = useState<MessageData>();

    useEffect(() => {
        (async () => {
            const data = await readContract({
                address: '0xe526c72317f140AB9301d15D6e4C5f8C75422588',
                abi: messageBoardABI,
                functionName: 'getLastFiveMessages',
            });
            setData(data);
        })()
    }, []);

    const messageLoading = data == undefined;

    let content;
    if (!messageLoading) {
        const messages = messagesDataToMessages(data);
        console.log(messages)
        content = messages.map(msg =>
            <div className="bg-amber-300 p-6 rounded-lg shadow-md w-4/12 flex flex-col relative" key={msg.address}>
                <div className="bg-white px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold">{msg.address}</span>
                </div>
                <div className="mt-4 flex-grow">
                    <p className="text-lg font-medium">{msg.text}</p>
                </div>
                <div className="flex items-end justify-end absolute bottom-2 right-2">
                    <button className="pr-2">❤️</button>
                    <span className="text-gray-600">{msg.likes} likes</span>
                </div>
            </div>
        )
    } else {
        content = <span>Loading...</span>
    }

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            {content}
            <button className="bg-pink-300 hover:bg-pink-400 p-4 rounded-full shadow-md w-4/12 my-5 transition duration-300 ease-in-out">Add your message</button>
        </div>
    )
}
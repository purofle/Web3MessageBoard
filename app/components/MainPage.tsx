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
        content = messages.map(msg=>
            <div>{msg.address}: {msg.text}<br/>{msg.likes} likes</div>
        )
    } else {
        content = <span>Loading...</span>
    }

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            {content}
        </div>
    )
}
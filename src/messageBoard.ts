export type MessageData = readonly [readonly `0x${string}`[], readonly string[], readonly bigint[], readonly bigint[]];
export interface Message {
    address: `0x${string}`;
    text: string;
    time: number;
    likes: number;
}
export function messagesDataToMessages(data: MessageData) {
    const [address, text, time, likes] = data;
    const messages: Message[] = address.map((address, index) => ({
        address: `0x${address}`,
        text: typeof text[index] === 'bigint' ? text[index].toString() : text[index],
        time: Number(time[index]),
        likes: Number(likes[index]),
    }));
    return messages;
}
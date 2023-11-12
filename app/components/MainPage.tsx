import getConfig from 'next/config';

export function MainPage() {
    const { publicRuntimeConfig } = getConfig();

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl font-bold text-white">Hello World!</h1>
        </div>
    )
}
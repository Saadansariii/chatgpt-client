export const fetchResponse =  async(chat) => {
    try {
        // after depoloyment you should change the fetch URL below
        const response = await fetch('https://gpt-backendd.vercel.app/', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "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"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ")
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

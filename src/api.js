// export const fetchResponse =  async(chat) => {
//     try {
//         // after depoloyment you should change the fetch URL below
//         const response = await fetch('https://gpt-backendd.vercel.app/', { 
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 message: chat.map((message)=> message.message).join(" \n ")
//             })
//         })

//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// }

async function fetchResponse(chat) {
    const apiUrl = 'https://gpt-backendd.vercel.app/';
    
    const headers = {
        'Content-Type': 'application/json',
    };
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                message: chat.map((message) => message.message).join(' \n '),
            }),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        // Handle the error gracefully, e.g., display an error message to the user.
        throw error;
    }
}


export { fetchResponse }
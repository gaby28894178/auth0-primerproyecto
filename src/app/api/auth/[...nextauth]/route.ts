import  NexAuth from 'next-auth'

import GoogleProvides from 'next-auth/providers/google'

const  handler = NexAuth({
    providers:[
        GoogleProvides({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
})

export { handler as GET, handler as POST };
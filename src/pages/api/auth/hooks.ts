import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";
import type {User} from "@prisma/client";

type Data = User | {};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {username, email, name, secret} = JSON.parse(req.body) as {username: string, email: string, name: string, secret: string};

    if (secret === process.env.AUTH0_HOOK_SECRET) {
        const user = await prisma.user.create({
            data: {
                username, email, name
            }
        });
        res.status(200).json(user ? user : {message: "error"});
    }
    res.status(500).json({message: "error"});
}

export default handler;
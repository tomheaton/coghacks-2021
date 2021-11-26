import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";
import type {Posting} from "@prisma/client";

type Data = Posting | {};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {id} = req.query;

    const parsed_id: number = typeof id === "string" ? parseInt(id) : 0

    const data = await prisma.posting.findUnique({
        where: {
            id: parsed_id
        },
    });

    res.status(200).json(data ? data : {message: "no data found"});
}

export default handler;
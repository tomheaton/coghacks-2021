import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";
import type {User} from "@prisma/client";

type Data = User[] | {};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const data = await prisma.user.findMany();

    res.status(200).json(data ? data : {message: "no data found"});
}

export default handler;
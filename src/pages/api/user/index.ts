import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";
import type {User} from "@prisma/client";

type Data = User[] | null;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const data = await prisma.user.findMany();

    res.status(200).json(data);
}

export default handler;
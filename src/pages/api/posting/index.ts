import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";
import type {Posting} from "@prisma/client";

type Data = Posting[] | null;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const data = await prisma.posting.findMany();

    res.status(200).json(data);
}

export default handler;
import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from "../../../lib/prisma";
import type {Company} from "@prisma/client";

type Data = Company[] | {};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const data = await prisma.company.findMany();

    res.status(200).json(data ? data : {message: "no data found"});
}

export default handler;
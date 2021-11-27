import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from "../../lib/prisma";
import type {Application, Company, Posting, User} from "@prisma/client";

type Data = {
    company_data: Company[],
    user_data: User[],
    posting_data: Posting[],
    application_data: Application[],
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const company_data = await prisma.company.findMany();
    const user_data = await prisma.user.findMany();
    const posting_data = await prisma.posting.findMany();
    const application_data = await prisma.application.findMany();

    const data = {
        company_data, user_data, posting_data, application_data
    }

    res.status(200).json(data);
}

export default handler;
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
    message: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: `hello from coghacks 2021!` });
}

export default handler;
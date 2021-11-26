import {NextPage} from "next";
import {useRouter} from "next/router";

const CompanyPage: NextPage = () => {

    const router = useRouter();

    return (
        <div>
            <h1>
                {router.query.name}
            </h1>
        </div>
    );
}

export default CompanyPage;
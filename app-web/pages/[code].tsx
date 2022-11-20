import type { GetServerSideProps,GetServerSidePropsContext } from "next";
import { Text } from "../components/Text";
export default function Code() {
	return (<>
		<Text text="Oi, sua ulr é invalida" />
	</>)
}


export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {

	try {
		const { code } = params;

		const serveUrl = process.env.API_URL

		const options = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		const ulr = `${serveUrl}/api/v1/shortener/link/${code}`;

		const response = await fetch(ulr, options)
		const data = await response.json();
		const link = data?.data?.originalLink
		console.log(link)

		if (link) {
			return {
				redirect: {
					destination: link,
					permanent: false,
				}
			}
		}

		return {
			props: {},
		}

	} catch (error) {
		return {
			props: {},
		}
	}


}
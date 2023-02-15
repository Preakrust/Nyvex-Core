import { IsDomainBlacklisted } from "./mini-uwu-nyvex-auth-api";
import { Author, Publisher, Website, API_endpoint } from "../Service";


export default {
	async fetch(request, env, ctx) {

		const ClientDomain = new URL(request.url).hostname

		//VERY IMPORTANT !//
		
		if (IsDomainBlacklisted(ClientDomain)) { return new Response("Sorry, Requests from this sender's host are not allowed due to security concerns. Please contact the website administrator if you believe this is a mistake.", { status: 403 });}

		//Stuff info//

        const UwU = {
			"Author": Author,
			"Publisher": Publisher,
			"Website": Website,
			"API_Endpoint": API_endpoint
		}

		//Requested action//

		const RequestedAction = request.headers.get("RequestedAction")

		if (RequestedAction === "GET_INFO") {
			return new Response(UwU[request.headers.get("REQUESTED_INFO")]);
		}

		//Actually auth duh//



	},
};

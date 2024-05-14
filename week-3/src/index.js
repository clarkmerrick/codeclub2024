export default {
	async fetch(request, env, ctx) {
		const randomResponse = {
			1: "You used GET!",
			2: "You're a go-GETter",
			3: "Thank you for using HTTP GET",
			4: "Next time try POST",
		}

		function getRandomInt(min, max) {
      		const minCeiled = Math.ceil(min);
      		const maxFloored = Math.floor(max);
      		return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    	}

		// generate random value from function and print to console
		let randomValue = getRandomInt(1, 4);
    	console.log("random value: " + randomValue);
		console.log(request.cf.botManagement.score)

		// if bot score is less than 30
		if (request.cf.botManagement.score < 30){
			const remote = "https://httpbin.org/get";
			return await fetch(remote, request);
		}

		// if POST
		if (request.method == "POST"){
      		const data = {
        		requestMethod: "You requested this resource via HTTP POST.",
      		};
			return Response.json(data);
		}

		// if GET
		if (request.method == "GET"){
			const remote = "https://origin.week3.codeclub2024.clarkmerrick.com/";
			return await fetch(remote, request);
	  	}

		// ALL ELSE
		else {
			const data = {
        		requestMethod: "POST was not used",
      		};
      		return Response.json(data);
		}
	},
};

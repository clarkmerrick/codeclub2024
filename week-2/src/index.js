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

		// if POST
		if (request.method == "POST"){
      		const data = {
        		requestMethod: "You requested this resource via HTTP POST.",
      		};
			return Response.json(data);
		}

		// if GET
		if (request.method == "GET"){
			const data = {
			  requestMethod: randomResponse[randomValue],
			};
		  return Response.json(data);
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

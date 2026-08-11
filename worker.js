export default {
    async fetch(request, env) {

        const url = new URL(request.url);


        // ==============================
        // WEATHER API
        // ==============================

        if (url.pathname === "/weather") {

            const city = url.searchParams.get("city");

            if (!city) {

                return Response.json(
                    {
                        error: "City is required"
                    },
                    {
                        status: 400
                    }
                );

            }


            const apiKey = env.OPENWEATHER_API_KEY;

            if (!apiKey) {

                return Response.json(
                    {
                        error: "Weather API key is not configured"
                    },
                    {
                        status: 500
                    }
                );

            }


            const weatherUrl =
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;


            try {

                const response =
                    await fetch(weatherUrl);

                const data =
                    await response.json();


                return Response.json(
                    data,
                    {
                        status: response.status
                    }
                );

            } catch (error) {

                console.error("Weather API error:", error);


                return Response.json(
                    {
                        error: "Could not fetch weather data"
                    },
                    {
                        status: 500
                    }
                );

            }

        }


        // ==============================
        // WEBSITE FILES
        // ==============================

        return env.ASSETS.fetch(request);

    }
};
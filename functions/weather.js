export async function onRequestGet(context) {

    const url = new URL(context.request.url);
    const city = url.searchParams.get("city");

    if (!city) {

        return new Response(
            JSON.stringify({
                error: "City is required"
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    }



    const apiKey = context.env.OPENWEATHER_API_KEY;
    
    const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;


    try {

        const response =
            await fetch(weatherUrl);


        const data =
            await response.json();


        return new Response(
            JSON.stringify(data),
            {
                status: response.status,

                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {

        console.error(error);


        return new Response(
            JSON.stringify({
                error: "Could not fetch weather data"
            }),
            {
                status: 500,

                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    }

}
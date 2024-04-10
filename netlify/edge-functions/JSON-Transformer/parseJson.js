export default async (request, context) => {
  try {
    const url = new URL(request.url);

    // Look for the query parameter, and return if we don't find it
    if (url.searchParams.get("method") !== "transform") {
      return new Response("Method not allowed", { status: 405 });
    }

    // Parse request body to JSON
    const requestData = await request.json();

    // Return parsed JSON data as response
    return new Response(JSON.stringify(requestData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

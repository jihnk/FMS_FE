export default function handler(request, response) {
    const { method, body } = request;
    if (method === "POST") {
        return response.status(200).json({
            result: body,
        });
    }
}
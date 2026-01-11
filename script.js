function sendCode() {
    const code = document.getElementById('codeInput').value;

    // Mock response (for demo)
    const data = {
        status: "success",
        explanation: {
            summary: "This is a demo explanation. The code defines a public class named Test.",
            details: "In Java, 'public class Test { }' creates an empty class named Test. No methods or variables are defined."
        }
    };

    document.getElementById('output').innerHTML = `
        <b>Summary:</b> ${data.explanation.summary}<br>
        <b>Details:</b> ${data.explanation.details}
    `;
}

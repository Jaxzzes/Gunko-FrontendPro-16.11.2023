function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return { error: error.message };
    }
}

const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';
const jsonString2 = '{"name": "Alice", "age": twenty-five, "city": "London"}';

console.log(parseJSON(jsonString1));
console.log(parseJSON(jsonString2));

# Fortune 500 Data Project

This project contains data about the Fortune 500 companies, including their revenue, profit, and rank. The data is stored in a JSON file and can be accessed programmatically through TypeScript interfaces for type safety.

## Project Structure

- `src/data/fortune500.json`: Contains the JSON data representing the Fortune 500 companies.
- `src/types/index.ts`: Exports TypeScript interfaces that define the structure of the data in `fortune500.json`.
- `package.json`: Configuration file for npm, listing dependencies and scripts.

## Usage

To use the data, import the interfaces from `src/types/index.ts` and read the JSON data from `src/data/fortune500.json`. This will ensure that you are working with the correct data structure.

## License

This project is licensed under the MIT License.
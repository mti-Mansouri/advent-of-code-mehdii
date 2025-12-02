import { readFile } from "fs/promises";
import { join } from "path";


async function readInput(filename: string): Promise<string | undefined> {

    try {
        const filePath = join(__dirname, filename);
        const data = await readFile(filePath, 'utf-8');

        return data;

    } catch (error) {
        console.error("Error reading file:", error)
    }

}



async function main() {

    const inputIds = await readInput("input.txt");
    if (inputIds) {
        console.log(inputIds.length);
        console.log(typeof (inputIds));
    } else {
        console.log("No input found");
        return;
    }

    const allIds = inputIds.split(",");
    let count = 0;

    for (const id of allIds) {
        const idRange = id.split("-");
        for (let i = parseInt(idRange[0]);
            i <= parseInt(idRange[1]); i++) {
                // ------
            // if ( i === 0) {
            //     count += i;
            // }
            // else
                    const id = i.toString();
                if ( id.length % 2 === 0) {
                if (Number(id.slice(0, id.length / 2)) === Number(id.slice(id.length / 2))) {
                    count += Number(id);
                }

            }
        }
    }
    console.log("Total sum of invalid gift IDs:", count);

}
main();
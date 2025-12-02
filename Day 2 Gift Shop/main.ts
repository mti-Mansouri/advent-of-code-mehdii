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
    // part one
    // for (const id of allIds) {
    //     const idRange = id.split("-");
    //     for (let i = parseInt(idRange[0]);
    //         i <= parseInt(idRange[1]); i++) {

    //                 const id = i.toString();
    //             if ( id.length % 2 === 0) {
    //             if (Number(id.slice(0, id.length / 2)) === Number(id.slice(id.length / 2))) {
    //                 count += Number(id);
    //             }

    //         }
    //     }
    // }






    // part 2
    for (const range of allIds) {
        const [start,end] = range.split("-").map(Number);
        for (let i=start; i<= end; i++){
            const idStr = i.toString();
            let inValid = false;


            for (let j=1 ; j<= idStr.length/2;j++){

                if (idStr.length % j !==0) continue;

                const pattern = idStr.slice(0,j);
                const repeats = idStr.length / j;
                if ( repeats >=2  && pattern.repeat(repeats) === idStr){
                    inValid = true;
                    break;
                }

            }
            if (inValid){
                count += i
            }
        }
 
    }
    console.log("Total sum of invalid gift IDs:", count);

}
main();
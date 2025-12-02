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

    const input = await readInput("input.txt");
    if (input) {
        console.log(input.length);
        console.log(typeof (input));
    }
    // console.log(input);

    let dialPosition = 50;
    let counter = 0;

    const lines = input?.split('\n') || [];
    // part one
    // for(const line of lines){
    //     let direction = line.charAt(0);
    //     let amount = parseInt(line.slice(1));


    //     if (direction === 'R'){
    //          dialPosition = (dialPosition + amount)%100;
    //     }if (direction === 'L'){
    //             let newPos = (dialPosition - amount )%100;
    //             if (newPos < 0){
    //                 dialPosition = 100 + newPos;
    //             }else{
    //                 dialPosition = newPos;
    //             }

    //     }
    //     if ( (direction === 'R' || direction === 'L') && dialPosition === 0){
    //                 counter +=1;
    //             }

    // }
    // part two
    for (const line of lines) {
        let direction = line.charAt(0);
        let amount = parseInt(line.slice(1));


        if (direction === 'R') {
            let steps = dialPosition + amount;
            let revolutions = Math.floor(steps / 100);
            counter += revolutions;
            dialPosition = (steps) % 100;
        } if (direction === 'L') {
            let disstanceToZero = dialPosition !==0 ? dialPosition : 100;
                let np= amount - disstanceToZero;

            if ( np >=0 ){
                counter +=1;
            let revolutions = Math.floor(np / 100);

            counter += revolutions;
            }

            let newPos = (dialPosition - amount) % 100;
            if (newPos < 0) {
                dialPosition = 100 + newPos;
            } else {
                dialPosition = newPos;
            }

        }


    }
    console.log("Final Dial Position:", dialPosition);
    console.log("Counter:", counter);

    // for ()
}
main();